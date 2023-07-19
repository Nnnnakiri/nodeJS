// 导入mongoose
const mongoose = require('mongoose')

// 连接MongoDB服务
mongoose.connect('mongodb://127.0.0.1:27017/abc');

// 设置连接成功回调
mongoose.connection.once('open', () => {
    console.log('连接成功');
    // 创建文档的结构对象
    // 设置集合中文档的属性以及属性值的类型
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    });
    // 创建模型对象，对文档操作的封装对象    集合名称   集合属性
    let BookModel = mongoose.model('novel', BookSchema);

    // 获取所有的name和author  1表示需要  0表示不需要  默认为0  id需要另外设置
    // BookModel.find().select({ name: 1, author: 1 })
    //     .then(result => {
    //         console.log(result);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });

    // 数据排序 1升序  -1倒序
    // BookModel.find().sort({ price: -1 })
    //     .then(result => {
    //         console.log(result);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });

    // select只选择name和price   sort按照price降序排序 skip跳过3条数据  limit取3条数据
    BookModel.find()
        .select({name:1,price:1,_id:0})
        .sort({ price: -1 })
        .skip(3)
        .limit(3)
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.error(err);
        });





});

// 设置连接失败回调
mongoose.connection.once('error', () => {
    console.log('连接失败');

});

// 设置连接关闭回调
mongoose.connection.once('close', () => {
    console.log('连接关闭');

});

