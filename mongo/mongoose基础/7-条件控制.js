const mongoose = require('mongoose')


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
    let BookModel = mongoose.model('books', BookSchema);
    // 算数运算符
    BookModel.find({price:{$lt:10}}).then(res=>{
        if(res){
            console.log(res);
        }
    }).catch(err=>{
        if(err){
            console.log(err);
        }
    });

    // 逻辑运算符
    // BookModel.find({$or:[{author:'aaa'},{author:'bbb'},{author:'ccc'}]}).then((data, err) => {
    //     if (err) {
    //         console.log('读取错误啦' + err);
    //         return
    //     }
    //     console.log(data);
    //     mongoose.disconnect();
    // });

    // 关键字
    //     BookModel.find({name:new RegExp('三')}).then((data, err) => {
    //     if (err) {
    //         console.log('读取错误啦' + err);
    //         return
    //     }
    //     console.log(data);
    //     mongoose.disconnect();
    // });


});

// 设置连接失败回调
mongoose.connection.once('error', () => {
    console.log('连接失败');

});

// 设置连接关闭回调
mongoose.connection.once('close', () => {
    console.log('连接关闭');

});

