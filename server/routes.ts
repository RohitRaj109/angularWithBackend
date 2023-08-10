//const express = require("express");
import * as express from 'express';
const app = express.Router();

export {app as routes}

app.get('/',(req,res)=>{res.send({success:true,message:'hello developer'})});
app.get('/users',(req,res)=>{res.send([{success:true,message:'data found',data:[{firstName:'Rohit',lastName:'Singh',phone:9170190050,email:'rohitraj.smsit@gmail.com'}]}])});
app.post('/users',(req,res)=>{res.send({data:req.body,success:true,message:'data found'})});
