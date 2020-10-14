// 管理api
// export const HOST = 'http://localhost:9000';

/* 
登录
method:post
参数:username password 
*/
const LOGIN_API = '/api/user/login';

/*
检查登录
参数：无
*/
const CHECK_LOGIN = '/api/user/check_login'

/*
退出登录
参数：无
*/
const LOGOUT_API = '/api/user/logout';


/*
添加系统用户
*/
///api/home/catelist/itemlist
const ADD_USER = '/api/user/add';

// 查询所有系统用户
const QUERY_USER = '/api/user/select';

/*
根据输入条件查询用户
*/
///api/item/detail
const QUERY_CUS = '/api/customer/getinfo';



const UPDATE_CUS_BASIC_INFO = '/api/customer/updateCus';

const UPDATE_CUS_CONTACT_INFO = '/api/customer/upContact';

const DELETE_CUS_CONTACT_INFO = '/api/customer/deleteCon';

const ADD_CUS_CONTACT_INFO = '/api/customer/addCon';




const QUERY_ALL_INFO = '/api/customer/getall';
const QUERY_PRO_INFO = '/api/customer/getpro';
const QUERY_LOAN_INFO = '/api/customer/getloan';
const QUERY_DEPO_INFO = '/api/customer/getdepo';
const QUERY_SHARE_INFO = '/api/customer/getshare';
const QUERY_MEM_INFO = '/api/customer/getmem';

const QUERY_USER_CUS_INFO = '/api/customer/getcus';


const ACTIVITY_SELECT_API = '/api/activity/select';

const ACTIVITY_ADD_API = '/api/activity/upload';

const ACTIVITY_ADD_TO_CUS_API = '/api/activity/add_to_cus';






export default {
  LOGIN_API,
  CHECK_LOGIN,
  LOGOUT_API,
  ADD_USER,
  QUERY_USER,
  QUERY_CUS,
  UPDATE_CUS_BASIC_INFO,
  UPDATE_CUS_CONTACT_INFO,
  DELETE_CUS_CONTACT_INFO,
  ADD_CUS_CONTACT_INFO,
  QUERY_ALL_INFO,
  QUERY_PRO_INFO,
  QUERY_LOAN_INFO,
  QUERY_DEPO_INFO,
  QUERY_SHARE_INFO,
  QUERY_MEM_INFO,
  QUERY_USER_CUS_INFO,
  ACTIVITY_SELECT_API,
  ACTIVITY_ADD_API,
  ACTIVITY_ADD_TO_CUS_API
}
