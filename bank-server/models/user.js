const mongoose = require('mongoose');

module.exports = mongoose.model('user', mongoose.Schema({
    username: {
        type: String,
        require: true
    },// 用户名
    password: {
        type: String,
        require: true
    },//密码
    departName: {
        type: String,
        require: true
    },//部门名称
    duties: String, //职务
    realName: String,//姓名
    gender: String,//性别
    phoneNumber: String,//联系电话
    staffNumber: String,//员工号码
}));

module.exports.checkUser = async (username, password) => {

    // var res = await User.find();
    // console.log(res);

    return await User.findOne({ username, password });

}

module.exports.addUser = async (name) => {
    new User({
        username: 'admin',
        password: '123456',
        departName: '第一部门',
        duties: '领导',
        realName: '李大姐',
        gender: '女',//性别
        phoneNumber: '17573848493',//联系电话
        staffNumber: '80559177',//员工号码

    }).save();
}