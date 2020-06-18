import Vue from 'vue';
import router from 'vue-router';
import SignInComponent from './components/signIn';
import RegisterComponent from './components/register';

Vue.use(router);

export default new router({
    routes: [
        {path: "/", component: SignInComponent},
        {path: "/signIn", component: SignInComponent},
        {path: "/signUp", component: RegisterComponent}
    ]
});


