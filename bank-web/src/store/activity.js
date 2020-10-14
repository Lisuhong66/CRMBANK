import api from '../utils/api'
import Http from '../utils/Http'


const state = {
    
}

const mutations = {
    // modifyLogin(state, value){
    //     state.isLogin = value;
    //     localStorage.setItem('isLogin', value);
    // },
    // modifyUserInfo(state, value){
    //     console.log(value)
    //     state.userInfo = value;
    //     localStorage.setItem('userInfo', value);
    // }
}

const actions = {
    // 注册
    async addPro(context, value){
        return await Http.get(api.ACTIVITY_ADD_API, value);
    },
    // 查询产品
    async selectAct(context, value){
        let result =  await Http.get(api.ACTIVITY_SELECT_API, value);
        if(result.data.code === 0){
            console.log(result.data)
            // context.commit('modifyLogin',true);
            // context.commit('modifyUserInfo',JSON.stringify(result.data.data) )
        }else{
            // context.commit('modifyLogin',false);
            // context.commit('modifyUserInfo','')
            console.log('wrong')
        }
        return result;
    },
    // 客户订购产品
    async subActivity(context,value){
        let result =  await Http.get(api.ACTIVITY_ADD_TO_CUS_API,value);
        console.log(result)
        return result
        // if(result.data.code === 0){
        //     context.commit('modifyLogin',true);
        //     context.commit('modifyUserInfo',JSON.stringify(result.data.data))
        // }else{
        //     context.commit('modifyLogin',false);
        //     context.commit('modifyUserInfo','')
        // }
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