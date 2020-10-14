const mongoose = require('mongoose');


const ContractInfo = mongoose.model('contractInfo', mongoose.Schema({
    ctractid: String,
    serialNumber:String,
    contratName:String,
    signedName:String,
    phoneNumber:String,
    finishTime:String,
    signedTime:String,
    submitTime:String,
    origin:String,
    status:String,
    undersigned:String,
    ipAddress:String,
    releAccount:String,
    speciActive:String,
    whetherRealname:String,
    whetherEffect:String,
    mainCertificate:String,
    account:String,
    effecttime:String
}));

module.exports.ContractInfo = ContractInfo;

module.exports.queryallContract = async () => {
    return await ContractInfo.find();
};


module.exports.queryContract = async (serialNumber) => {
    return await ContractInfo.findOne({ serialNumber });
};