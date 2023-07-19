
const path  = require('path');
const mongoose = require('mongoose');
const { log } = require('console');
const db = require(path.resolve(__dirname+'/db/db'));
const movieModel = require(path.resolve(__dirname+'/model/movieModel.js'));

db(success,err);

function success(){
    movieModel.create({title:'让子弹飞',author:'姜文'})
    .then((res)=>{
        if(res){
            console.log(res);
        }
    })
    .catch((err)=>{
        if(err){
            console.log(err);
        }
    })
}

function err() {
    console.log("连接失败~~");
}