const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/abc');

// 设置连接成功回调
mongoose.connection.once('open',()=>{
    console.log('连接成功');
    // 创建文档的结构对象
    // 设置集合中文档的属性以及属性值的类型
    let BookSchema = new mongoose.Schema({
        name:{
            type:String,
            // 唯一值
            unique:true,
            // 该属性必须不为空
            required:true
        },
        author:{
            type:String,
            // 默认值
            default:'匿名'
        },
        price:Number,
        style:{
            type:String,
            // 枚举值
            enum:['言情','都市','鬼怪']
        }
    });
    // 创建模型对象，对文档操作的封装对象    集合名称   集合属性
    let BookModel = mongoose.model('books',BookSchema);

    BookModel.create({
        name:'西游记',
        author:'吴承恩',
        price:10
    }).then((err,data)=>{
        if(err){
            console.log(err);
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

