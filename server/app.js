const http = require('http');
//const path = require('path');
//const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const auth = require('./auth');
const connection = require('./connection');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: auth
});
  
const requestHandler = async(req,res) => {
	var reqData = '';
	const headers = {
		'Access-Control-Allow-Origin': 'http://localhost:8080',
		'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
		'Access-Control-Max-Age': 2592000, // 30 days
		'Access-Control-Allow-Headers': 'Content-Type,Access-Control-Allow-Headers',
		'Content-Type': 'application/json'	
	  };
	//APIs
	if (req.method == 'OPTIONS') {
		res.writeHead(204, headers);
		res.end();
		return;
	  }
	if(req.url == "/signIn" && req.method=="POST") {
		req.on("data",(chunk)=>{
			reqData += chunk;
		});
		req.on("end", async()=>{
			try{				
				let reqJSON = JSON.parse(reqData);
				const instance = await connection();				
				let cursor = instance.db("peoplerepo").collection("users").find({username: reqJSON.username});
				let userObj = await cursor.next();
				if(userObj) {
					if(userObj && userObj.username === reqJSON.username && userObj.password === reqJSON.password) {
						res.writeHead(201, headers);
						res.write(JSON.stringify({"status": 1}));
					} else if(userObj && userObj.username === reqJSON.username) {
						res.writeHead(404, headers);
						res.write(JSON.stringify({"status": 0,"errorMsg":"Invalid password"}));
					} 
				} else {
					res.writeHead(404, headers);
					res.write(JSON.stringify({"status": 0,"errorMsg":"Invalid username or password"}));
				}
				instance.close();
				console.log('connection succssfully closed');	
			}catch(err) {
				console.log(err);
				res.writeHead(400, headers);
				res.write(JSON.stringify({"status": 0,"errorMsg":"SignIn functionality failed"}));
			}
			finally {
				res.end();				
			}			
		});
	}

	if(req.url == "/signUp" && req.method=="POST") {
		req.on("data",(chunk)=>{
			reqData += chunk;
		});
		req.on("end", async()=>{
			try{				
				let reqJSON = JSON.parse(reqData);
				const instance = await connection();				
				await instance.db("peoplerepo").collection("users").insertOne(reqJSON);
				res.writeHead(201, headers);
				res.write(JSON.stringify({"status": 1}));
				//mail
				var mailOptions = {
					from: {name:'PeopleRepo',address:'spartanprince27@gmail.com'},
					to: reqJSON.email,
					subject: 'PeopleRepo Registration',
					html: `<h2>Hey ${reqJSON.username}!</h2><br><div>Welcome to PeopleRepo. We are glad to have you!</div>`
				};				
				transporter.sendMail(mailOptions,(error,info)=>{
					console.log(error?error:`Email successfully sent: ${info.response}`);
				});
				instance.close();
				console.log('connection succssfully closed');				
			}catch(err) {
				console.log(err);
				res.writeHead(404, headers);
				res.write(JSON.stringify({"status": 0}));
			}finally {
				res.end();
			}
		});
	}
};

const server = http.createServer(requestHandler);
const port = process.env.port || '5000';
server.listen(port,()=>console.log(`listening to port ${port}..`));
