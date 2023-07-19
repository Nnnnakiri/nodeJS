
const path  = require('path');
const mongoose = require('mongoose');



const db = require(path.resolve(__dirname+'/db/db'));

const BookModel = require(path.resolve(__dirname+'/model/bookModel.js'))


db(success,err)


function success(){
    
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

}

function err(){
    console.log("连接失败~~");
}