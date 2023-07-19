    const mongoose = require('mongoose');

// 创建文档的结构对象
// 设置集合中文档的属性以及属性值的类型
let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number
});
// 创建模型对象，对文档操作的封装对象    集合名称   集合属性
let BookModel = mongoose.model('novel', BookSchema);

module.exports = BookModel;