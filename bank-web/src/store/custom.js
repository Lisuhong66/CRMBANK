import api from '../utils/api'
import Http from '../utils/Http'


const state = {
  CusInfo: "",
  pageShow: false,
  clickCID: ""
}

const mutations = {
  setCus(state, value) {
    state.CusInfo = value;
  },
  modifyPageshow(state, value) {
    console.log(value)
    state.pageShow = value.show;
    state.clickCID = value.clickCID;
    console.log(2222, state.pageShow)
  },
  modifyPageself(state, value) {
    state.pageShow = value;
  },
}

const actions = {
  // 根据用户输入信息查询
  async queryCus(context, value) {
    let result = await Http.get(api.QUERY_CUS, value);
    if (result.data.code === 0) {
      // console.log(result.data)
      context.commit('setCus', result.data.data);
    }
    return result;
  },
  //设置全景视图的可见性
  setPageshow(context, value) {
    context.commit('modifyPageshow', value);
  },
  setPageself(context, value) {
    context.commit('modifyPageself', value);
  },
  //根据id请求全景视图的信息
  async requestDatabyID(context, value) {
    console.log(value)
    let result = await Http.get(api.QUERY_ALL_INFO, value);
    let result2 = await Http.get(api.QUERY_PRO_INFO, value);
    let result3 = await Http.get(api.QUERY_LOAN_INFO, value);
    let result4 = await Http.get(api.QUERY_DEPO_INFO, value);
    let result5 = await Http.get(api.QUERY_SHARE_INFO, value);
    let result6 = await Http.get(api.QUERY_MEM_INFO, value);
    let allInfo = [
      result.data.data,
      result2.data.data,
      result3.data.data,
      result4.data.data,
      result5.data.data,
      result6.data.data]
    return allInfo
  },
  async getcus(context, value) {
    let result = await Http.get(api.QUERY_USER_CUS_INFO, value);
    return result
  },
  async upBasicInfo(context, value){
    let result = await Http.get(api.UPDATE_CUS_BASIC_INFO, value);
    console.log(result)
    return result
  },
  async upContact(context, value){
    let result = await Http.get(api.UPDATE_CUS_CONTACT_INFO, value);
    console.log(result)
    return result
  },
  async deleteContact(context, value){
    let result = await Http.get(api.DELETE_CUS_CONTACT_INFO, value);
    console.log(result)
    return result
  },
  async addContact(context, value){
    let result = await Http.get(api.ADD_CUS_CONTACT_INFO, value);
    console.log(result)
    return result
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