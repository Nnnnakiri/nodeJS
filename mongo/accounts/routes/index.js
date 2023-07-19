var express = require('express');
var router = express.Router();

// 导入mongoose
const mongoose = require('mongoose');
// 导入文档模型
const accountModel = require('../model/accountModel');

// 导入工具包
const moment = require('moment');





/* GET home page. */
router.get('/account', function (req, res, next) {

  accountModel.find().sort({ time: -1 })
    .then((result) => {
      res.render('account', { accounts: result, moment: moment });
    })
  // .catch((err)=>{
  //   if(err){
  //     res.send
  //   }
  // })

});

// 添加路由
router.get('/account/create', function (req, res, next) {
  res.render('create');
});

// 添加记录
router.post('/account', function (req, res) {

  accountModel.create({
    ...req.body,
    time: moment(req.body.time).toDate()
  }).then((data) => {
    if (data) {
      console.log(data);
      res.render('success', { msg: '添加成功', url: '/account' });
      return
    }
  }).catch((err) => {
    if (err) {
      res.send("添加失败~~~")
    }
  })


})


router.get('/account/:id', function (req, res) {
  let id = req.params.id
  accountModel.deleteOne({ _id: id })
    .then((data) => {
      if (data) {  
        res.render('success', { msg: '删除成功', url: '/account' });
      }  
    })
    .catch((err) => {
      if (err) {  
        res.send('插入失败~~');
      }  
    })


  
})

module.exports = router;
