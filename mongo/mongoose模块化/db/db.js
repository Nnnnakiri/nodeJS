const path = require('path');

const {DBHOST,DBPORT,DBNAME} = require(path.resolve(__dirname+'/../config/config'));


module.exports  = function(success,err){

    // 导入mongoose
    const mongoose = require('mongoose')

    // 连接MongoDB服务
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

    // 设置连接成功回调
    mongoose.connection.once('open', () => {
        success();
    });

    // 设置连接失败回调
    mongoose.connection.once('error', () => {
        err();
    });

    // 设置连接关闭回调
    mongoose.connection.once('close', () => {
        console.log('连接关闭');

    });
}