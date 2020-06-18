const state = {
    loggedIn: null,
    showPopup: null,
    popupmsg: null
}

const getters = {
    isLoggedIn: state => !!state.loggedIn,
    shouldDisplayPopup: state => !!state.showPopup,
    getPopupMsg: state => state.popupmsg
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
    }
}

export default {state,getters,actions,mutations}