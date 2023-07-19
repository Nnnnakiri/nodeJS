const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/abc');

// 设置连接成功回调
mongoose.connection.once('open',()=>{
    console.log('连接成功');
    // 创建文档的结构对象
    // 设置集合中文档的属性以及属性值的类型
    let BookSchema = new mongoose.Schema({
        name:String,
        author:String,
        price:Number
    });
    // 创建模型对象，对文档操作的封装对象    集合名称   集合属性
    let BookModel = mongoose.model('books',BookSchema);


    // BookModel.findOne({'_id':'64a2d50dd43c41ffa8c5bc65'}).then(function(data,err){
    //     if(err){
    //         console.log('读取错误啦');
    //         return
    //     }
    //     console.log('@'+data);
    //     mongoose.disconnect();
    // });
    

    // BookModel.findById('64a2d3f1951b6331802f9ecd',).then((data,err)=>{
    //     if(err){
    //         console.log('读取错误啦'+err);
    //         return
    //     }
    //     console.log(data);
    //     mongoose.disconnect();
    // });


        BookModel.find({'name':'西游记'},).then((data,err)=>{
        if(err){
            console.log('读取错误啦'+err);
            return
        }
        console.log(data);
        mongoose.disconnect();
    });


});

// 设置连接失败回调
mongoose.connection.once('error',()=>{
    console.log('连接失败');

});

// 设置连接关闭回调
mongoose.connection.once('close',()=>{
    console.log('连接关闭');

});

