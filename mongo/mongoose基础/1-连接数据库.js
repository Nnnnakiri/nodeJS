const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/abc');

// 设置连接成功回调
mongoose.connection.once('open',()=>{
    console.log('连接成功');
});

// 设置连接失败回调
mongoose.connection.once('error',()=>{
    console.log('连接失败');

});

// 设置连接关闭回调
mongoose.connection.once('close',()=>{
    console.log('连接关闭');

});

// 关闭 mongodb 的连接 
setTimeout(() => {
    mongoose.disconnect();
}, 3000);