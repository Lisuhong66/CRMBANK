
const { Router } = require('express')
const router = new Router();
const connection = require('../connect')



// 查询产品
router.get('/select', (req, res) => {
    const { pID, pTypes } = req.query;
    console.log(pTypes)
    if (pTypes) {
        let str = `SELECT * from market_product WHERE pID="${pID}" AND pTypes='${pTypes}'`
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
                res.json({ code: -2, message: '数据不存在' });
            }
        });
    }
    else {
        let str = `SELECT * from market_product WHERE pID="${pID}"`
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
                res.json({ code: -2, message: '数据不存在' });
            }
        });
    }

})


//客户订购
router.get('/add_to_cus', (req, res) => {

    var { cID, pID, hTransdate, hStartdate, hEnddate, hSubamount } = req.query
    console.log(cID, pID, hTransdate, hStartdate, hEnddate, hSubamount)
    var str1 = `INSERT INTO customer_product (cID, pID ,hTransdate, hStartdate ,hEnddate, hSubamount ) VALUES('${cID}', '${pID}', '${hTransdate}', '${hStartdate}', '${hEnddate}', '${hSubamount}');`
    connection.query(str1, function (error, results, fields) {
        if (error) {
            console.log(error)
            res.json({
                code: -1,
                message: '服务器开小差啦，请稍后重试～',
            });
            return
        }
        if(results){
            res.json({
                code: 0,
                message: '添加成功',
            })
        }
        
    });

})

// 新增产品
router.get('/upload', (req, res, next) => {
    var { pID, pTypes, pName, pTarget, pAppobj, pLimitperiod, pCurrency, pReleasedate, pRemarksVarchar, pProCharact, uStaffnum } = req.query
    var str1 = `INSERT INTO market_product (pID, pTypes, pName, pTarget, pAppobj, pLimitperiod, pCurrency, pReleasedate, pRemarksVarchar, pProCharact, uStaffnum )
           VALUES('${pID}', '${pTypes}', '${pName}', '${pTarget}', '${pAppobj}', ${pLimitperiod}, '${pCurrency}', '${pReleasedate}', '${pRemarksVarchar}', '${pProCharact}', '${uStaffnum}');`

    connection.query(str1, function (error, results, fields) {
        if (error) {
            res.json({
                code: -1,
                message: '添加失败',
            });
            return
        }
        res.json({
            code: 0,
            message: '添加成功',
        })
    });

});

// router.

module.exports = router;