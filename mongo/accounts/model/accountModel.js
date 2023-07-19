    const mongoose = require('mongoose');

// 创建文档的结构对象
// 设置集合中文档的属性以及属性值的类型
let accountSchema = new mongoose.Schema({
    matters:{
        type:String,
        required:true
    },
    time:{
        type:Date,
    },
    type:{
        type:Number,
        default:-1
    },
    account:{
        type:Number,
        required:true
    },
    remarks:{
        type:String,
        default:' '
    },
});
// 创建模型对象，对文档操作的封装对象    集合名称   集合属性
let accountModel = mongoose.model('account', accountSchema);

module.exports = accountModel;