const mongoose = require('mongoose');

const CustomerInfo = mongoose.model('customerInfo', mongoose.Schema({
    entityName: String,
    unitId:String,
    businessLicense: String,
    unitFax: String,
    unitAddress: String,
    unitUrl:String,
    unitIntro:String,
    unitPhone:String,
    postCode: String,
    unitProperty: String,
    unitType:String,
    unitMark:String,
    unitAge: Number,
    unitArea:String,
    unitLevel:String,
    logo:String,
    legalPerson: String,
    position:String,
    contactNumber: String,
    email: String,
    qq:String,
    wx:String,
    date:String,
    customerType: String,
}));



module.exports.CustomerInfo = CustomerInfo;

module.exports.queryCustomer = async (entityName) => {
    return await CustomerInfo.findOne({ entityName }); 
};

module.exports.addCustomer = async (item) => {
    
    
   return await new CustomerInfo(item).save();
};



