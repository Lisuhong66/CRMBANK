const { Router } = require('express')
const router = new Router();
const connection = require('../connect')


router.get('/getinfo', (req, res) => {
    const { cID, cCompany, cIndustry, cOwnership, cCore } = req.query;
    let str = `SELECT*FROM enter_customer WHERE (cID LIKE '%${cID}%') AND cCompany LIKE
     "%${cCompany}%" AND cIndustry="${cIndustry}" AND cOwnership="${cOwnership}" AND cCore="${cCore}"`
    connection.query(str, function (error, results, fields) {
        if (error) {
            res.json({
                code: -1,
                message: '服务器开小差啦，请稍后重试～',
            });
            return
        };
        let result = JSON.parse(JSON.stringify(results))
        if (result) {
            res.json({
                code: 0,
                message: '查询成功',
                data: result
            });
        } else {
            res.json({ code: -2, message: '该客户不存在喔～' });
        }
    });
})

// 查询某个客户经理管理的客户
router.get('/getcus', async (req, res, next) => {
    const { uStaffnum } = req.query;
    connection.query(`SELECT * from enter_customer WHERE uStaffnum='${uStaffnum}'`, function (error, results, fields) {
        if (error) {
            res.json({
                code: -1,
                message: '服务器开小差啦，请稍后重试～',
            });
            return
        }
        let result = JSON.parse(JSON.stringify(results))
        if (result) {
            res.json({
                code: 0,
                message: '查询成功',
                data: result
            });
        } else {
            res.json({ code: -2, message: '该客户不存在喔～' });
        }
    });
});



router.get('/getall', async (req, res) => {
    const { cID } = req.query;
    let str = `SELECT * from enter_customer WHERE cID="${cID}"`
    connection.query(str, function (error, results, fields) {
        if (error) {
            res.json({
                code: -1,
                message: '服务器开小差啦，请稍后重试～',
            });
            return
        };
        let result = JSON.parse(JSON.stringify(results))[0]
        if (result) {
            res.json({
                code: 0,
                message: '查询成功',
                data: result
            });
        } else {
            res.json({ code: -2, message: '该账号不存在' });
        }
    });
})

router.get('/getpro', async (req, res) => {
    const { cID } = req.query;
    let str = `SELECT * from customer_product WHERE cID="${cID}"`
    connection.query(str, function (error, results, fields) {
        if (error) {
            res.json({
                code: -1,
                message: '服务器开小差啦，请稍后重试～',
            });
            return
        };
        let result = JSON.parse(JSON.stringify(results))
        if (result) {
            res.json({
                code: 0,
                message: '查询成功',
                data: result
            });
        } else {
            res.json({ code: -2, message: '该账号不存在' });
        }
    });
})

router.get('/getloan', async (req, res) => {
    const { cID } = req.query;
    let str = `SELECT * from loan_account WHERE cID="${cID}"`
    connection.query(str, function (error, results, fields) {
        if (error) {
            res.json({
                code: -1,
                message: '服务器开小差啦，请稍后重试～',
            });
            return
        };
        let result = JSON.parse(JSON.stringify(results))
        if (result) {
            res.json({
                code: 0,
                message: '查询成功',
                data: result
            });
        } else {
            res.json({ code: -2, message: '该账号不存在' });
        }
    });
})

router.get('/getdepo', async (req, res) => {
    const { cID } = req.query;
    let str = `SELECT * from deposit_account WHERE cID="${cID}"`
    connection.query(str, function (error, results, fields) {
        if (error) {
            res.json({
                code: -1,
                message: '服务器开小差啦，请稍后重试～',
            });
            return
        };
        let result = JSON.parse(JSON.stringify(results))
        if (result) {
            res.json({
                code: 0,
                message: '查询成功',
                data: result
            });
        } else {
            res.json({ code: -2, message: '该账号不存在' });
        }
    });
})

router.get('/getshare', async (req, res) => {
    const { cID } = req.query;
    let str = `SELECT * from shareholder WHERE cID="${cID}"`
    connection.query(str, function (error, results, fields) {
        if (error) {
            res.json({
                code: -1,
                message: '服务器开小差啦，请稍后重试～',
            });
            return
        };
        let result = JSON.parse(JSON.stringify(results))
        if (result) {
            res.json({
                code: 0,
                message: '查询成功',
                data: result
            });
        } else {
            res.json({ code: -2, message: '该账号不存在' });
        }
    });
})

router.get('/getmem', async (req, res) => {
    const { cID } = req.query;
    let str = `SELECT * from enter_member WHERE cID="${cID}"`
    connection.query(str, function (error, results, fields) {
        if (error) {
            res.json({
                code: -1,
                message: '服务器开小差啦，请稍后重试～',
            });
            return
        };
        let result = JSON.parse(JSON.stringify(results))
        if (result) {
            res.json({
                code: 0,
                message: '查询成功',
                data: result
            });
        } else {
            res.json({ code: -2, message: '该账号不存在' });
        }
    });
})

//修改客户信息
router.get('/updateCus', async (req, res) => {
    const { upPost, upEmail, upTel, upHome, upAdd, cID } = req.query;
    let str = `
    UPDATE enter_customer 
        SET 
        cPostcode="${upPost}",
        cEmail="${upEmail}",
        cTel="${upTel}",
        cHomepage="${upHome}",
        cAddress="${upAdd}"
        WHERE cID = "${cID}";
    `
    connection.query(str, function (error, results, fields) {
        if (error) {
            console.log(error)
            res.json({
                code: -1,
                message: '服务器开小差啦，请稍后重试～',
            });
            return
        };
        let result = JSON.parse(JSON.stringify(results))
        if (result) {
            res.json({
                code: 0,
                message: '修改成功',
                data: result
            });
        } else {
            res.json({ code: -2, message: '修改失败' });
        }
    });
})



//修改联系人信息
router.get('/upContact', async (req, res) => {
    const { mID,mTel,mName } = req.query;
    console.log(mID,mTel,mName)
    let str = `
    UPDATE enter_member 
        SET 
        mTel="${mTel}",
        mName="${mName}"
        WHERE mID = "${mID}";
    `
    connection.query(str, function (error, results, fields) {
        if (error) {
            console.log(error)
            res.json({
                code: -1,
                message: '服务器开小差啦，请稍后重试～',
            });
            return
        };
        let result = JSON.parse(JSON.stringify(results))
        if (result) {
            res.json({
                code: 0,
                message: '修改成功',
                data: result
            });
        } else {
            res.json({ code: -2, message: '修改失败' });
        }
    });
})


//删除联系人
router.get('/deleteCon', async (req, res) => {
    const { mID } = req.query;
    console.log(mID)
    let str = `
    DELETE FROM  enter_member  WHERE mID = '${mID}'
    `
    connection.query(str, function (error, results, fields) {
        if (error) {
            console.log(error)
            res.json({
                code: -1,
                message: '服务器开小差啦，请稍后重试～',
            });
            return
        };
        let result = JSON.parse(JSON.stringify(results))
        if (result) {
            res.json({
                code: 0,
                message: '删除成功',
                data: result
            });
        } else {
            res.json({ code: -2, message: '修改失败' });
        }
    });
})


//新增联系人
router.get('/addCon', async (req, res) => {
    const { mID,cID,mName,mTel } = req.query;
    console.log(mID)
    let str = `
    INSERT INTO enter_member (
        mID,
        cID,
        mName,
        mPost,
        mEmail,
        mBirthday,
        mTel,
        mIntro,
        mSenior,
        mContacts 
    )
    VALUES
        (
            '${mID}',
            '${cID}',
            '${mName}',
            '${mTel}',
            'email1号',
            '2019-01-01 00:00:00',
            '18282829282',
            '介绍啥呢介绍',
            '否',
        '是' 
        )
    `
    connection.query(str, function (error, results, fields) {
        if (error) {
            console.log(error)
            res.json({
                code: -1,
                message: '服务器开小差啦，请稍后重试～',
            });
            return
        };
        let result = JSON.parse(JSON.stringify(results))
        if (result) {
            res.json({
                code: 0,
                message: '添加成功',
                data: result
            });
        } else {
            res.json({ code: -2, message: '修改失败' });
        }
    });
})
module.exports = router;