import Vue from 'vue';
import router from 'vue-router';
import SignInComponent from './components/signIn';
import RegisterComponent from './components/register';
import ProfileComponent from './components/profile';

Vue.use(router);

export default new router({
    routes: [
        {path: "/", component: SignInComponent},
        {path: "/signIn", component: SignInComponent},
        {path: "/signUp", component: RegisterComponent},
        {path: "/profile", component: ProfileComponent}
    ]
});


