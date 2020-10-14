const { Router } = require('express');
const { mock } = require('mockjs');

const { CustomerInfo } = require('../models/customerInfo');
const { ContractInfo} = require('../models/contractInfo')

const router = new Router();

router.get('/', async (req, res) => {

    // 生成客户数据  user
    for (var i = 0; i < 10; i++) {
        let item = mock({
            entityName: '@cname',
            unitId:'@id',
            "businessLicense|1000-2000": 0,
            "unitFax|1000-2000": 0,
            unitAddress: '@county(true)',
            unitUrl:'@url',
            unitIntro:'@csentence',
            unitPhone: /^1([38][0-9]|4[579]|5[0-9]|6[6]|7[0135678]|9[89])\d{8}$/,
            "postCode|410000-430000": 0,
            unitProperty: '@cword(3)',
            'unitType|1':['互联网','金融','医疗','建筑','服务','其他'],
            unitMark:'@csentence',
            "unitAge|20-50": 0,
            'unitArea|1':['福田区','罗湖区','南山区','宝安区','龙岗区','龙华区','光明新区','坪山新区'],
            'unitLevel|1':['关键客户','主要客户','普通客户'],
            legalPerson: "@cname(3)",
            position:'合伙人',
            contactNumber:  /^1([38][0-9]|4[579]|5[0-9]|6[6]|7[0135678]|9[89])\d{8}$/,
            email: "@email",
            date:'@date',
            customerType: "@cname(3)"
        });
        await new CustomerInfo(item).save();
    }

    let idinitial = 1;

    for(var i=0;i<10;i++){

        let item = mock({
            ctractid: i,
            serialNumber:'@id',
            'contratName|1':['借款协议','贷款协议'],
            signedName:'@cname',
            phoneNumber:/^1([38][0-9]|4[579]|5[0-9]|6[6]|7[0135678]|9[89])\d{8}$/,
            finishTime:'@date',
            signedTime:'@date',
            submitTime:'@date',
            origin:'消费金融服务平台',
            'status|1':['草稿','待签署','已完成','已过期','已撤销'],
            'undersigned|1-3':0,
            ipAddress:'@ip',
            releAccount:'@integer',
            'speciActive|1':['上传合同','签署合同','合同生效'],
            'whetherRealname|1':['是','否'],
            'whetherEffect|1':['是','否'],
            'mainCertificate|1':['是','否'],
            account:'@zip',
            effecttime:'@date'-'@date'
        });
        await new ContractInfo(item).save();
    }

    res.json({code:0});

})

module.exports = router;


