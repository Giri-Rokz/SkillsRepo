import axios from 'axios';
import router from '../../router';

const headers = {
    'Content-Type': 'application/json'
  }

const state = {
    loggedIn: null,
    showPopup: null,
    popupmsg: null,
    profileInfo: {},
    headers: {'Content-Type':'application/json'}
}

const getters = {
    isLoggedIn: state => !!state.loggedIn,
    shouldDisplayPopup: state => !!state.showPopup,
    getPopupMsg: state => state.popupmsg,
    getProfileInfo: state=> state.profileInfo
}

const actions = {
    logOut: ({commit}) => {
        commit('setLogin',null);
    },
    showPopup: ({commit},showPopup) => {
        commit('setPopupDisplay',showPopup);
    },
    buildPopupMsg: ({commit},popupmsg) => {
        commit('setPopupMsg',popupmsg);
    },
    signIn: ({commit},payload) => {
        commit('setProfileInfo',payload);
    }
}

const mutations = {
    setLogin: (state,loginStatus) => {
        state.loggedIn = loginStatus;
    },
    setPopupDisplay: (state,popupStatus) => {
        state.showPopup = popupStatus;
    },
    setPopupMsg: (state,popupMessage) => {
        state.popupmsg = popupMessage;
    },
    setProfileInfo: (state,userInfo) => {
        axios.post('/signIn',userInfo.postBody,{headers}).then((resp)=> {
            if(resp.data.status) {
                state.profileInfo = resp.data.profileInfo;
                router.push('profile');
            }
        }).catch();
    }
}

export default {state,getters,actions,mutations}