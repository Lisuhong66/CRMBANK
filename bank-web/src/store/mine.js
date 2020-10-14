import api from '../utils/api'
import Http from '../utils/Http'


const state = {
    isLogin: localStorage.getItem('isLogin'),
    userInfo:''
}

const mutations = {
    modifyLogin(state, value){
        state.isLogin = value;
        localStorage.setItem('isLogin', value);
    },
    modifyUserInfo(state, value){
        state.userInfo = value;
        // localStorage.setItem('userInfo', value);
    }
}

const actions = {
    // 注册
    async addUser(context, value){
        return await Http.get(api.ADD_USER, value);
    },
    // 登录
    async requestLogin(context, value){
        let result =  await Http.get(api.LOGIN_API, value);
        if(result.data.code === 0){
            console.log(result.data)
            context.commit('modifyLogin',true);
            context.commit('modifyUserInfo',result.data.data)
        }else{
            context.commit('modifyLogin',false);
            context.commit('modifyUserInfo','')
        }
        return result;
    },
    // 检查登录状态
    async requestCheckLogin(context){
        let result =  await Http.get(api.CHECK_LOGIN);
        if(result.data.code === 0){
            context.commit('modifyLogin',true);
            context.commit('modifyUserInfo',result.data.data)
        }else{
            context.commit('modifyLogin',false);
            context.commit('modifyUserInfo','')
        }
    },
    // 退出登录
    async requestLogOut(context){
        let result =  await Http.get(api.LOGOUT_API);
        if(result.data.code === 0){
            context.commit('modifyLogin',false);
        }else{
            context.commit('modifyLogin',true);
        }
        return result;
    },

    async queryUser(){
         return await Http.get(api.QUERY_USER);

    }

}

const getters = {

}


export default {
    namespaced: true,
    getters,
    state,
    mutations,
    actions
}