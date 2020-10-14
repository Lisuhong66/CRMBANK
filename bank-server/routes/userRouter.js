const { Router } = require('express')
const router = new Router();
const connection = require('../connect')
const md5 = require('md5')


// 登录
router.get('/login', (req, res) => {
    const { username, password } = req.query;
    console.log(username, password);
    var secretPass = md5(password)

    let str = `SELECT * from sys_user WHERE uAccount="${username}"`
    connection.query(str, function (error, results, fields) {
        if (error) {
            res.json({
                code: -1,
                message: '服务器开小差啦，请稍后重试～',
            });
            return
        }
        let result = JSON.parse(JSON.stringify(results))[0]
        console.log(result)
        if (result) {
            if (result.uPassword === secretPass) {
                console.log(111111)
                req.session.userInfo = result;
                res.json({
                    code: 0,
                    message: '登录成功',
                    data: result
                });
            }
            else{
                console.log(111111)
                req.session.userInfo = result;
                res.json({
                    code: -2,
                    message: '密码错误',
                });
            }

        } else {
            res.json({ code: -3, message: '该账号不存在' });
        }
    });
})

//退出登录
router.get('/logout', (req, res) => {
    delete req.session.userInfo;
    res.json({
        code: 0,
        message: 'ok'
    });
});

// 登录
router.get('/check_login', (req, res) => {
    if (req.session.userInfo) {
        console.log(req.session.userInfo)
        res.json({
            code: 0,
            message: 'ok',
            data: req.session.userInfo
        })
    } else {
        res.json({
            code: -1,
            message: '请重新登录'
        })
    }
})

// 新增用户
router.get('/add', async (req, res, next) => {
    var { uPassword } = req.query
    uPassword = md5(uPassword)

    var str1 = `INSERT INTO sys_user (uStaffnum, uAccount, uPassword,uGroup,uIdenty,uName,uGender,uTel)
           VALUES('${req.query.uStaffnum}','${req.query.uAccount}','${uPassword}','${req.query.uGroup}','${req.query.uIdenty}','${req.query.uName}','${req.query.uGender}','${req.query.uTel}');`
    connection.query(str1, function (error, results, fields) {
        if (error) {
            res.json({
                code: -1,
                message: '服务器开小差啦，请稍后重试～',
            });
            return
        }
        res.json({
            code: 0,
            message: '添加成功',
        })
    });
});


// 查询所有用户
router.get('/select', async (req, res, next) => {
    connection.query("SELECT * from sys_user", function (error, results, fields) {
        let result = JSON.parse(JSON.stringify(results))
        if (error) {
            res.json({
                code: -1,
                message: '服务器开小差啦，请稍后重试～',
            });
            return
        }
        res.json({
            code: 0,
            message: '查询成功',
            data: result
        })
    });
});


module.exports = router;