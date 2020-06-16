const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://grox:hereicome@clustergr-floov.gcp.mongodb.net/test?retryWrites=true&w=majority";

async function connectToDB(){	
	try{
		const client = await MongoClient.connect(uri, {useNewUrlParser: true,useUnifiedTopology:true});
		await client.connect();
		console.log('connected succssfully to db instance');
		return client;		
	}catch(err) {
		console.log(err.stack);
	}
};

module.exports = connectToDB;