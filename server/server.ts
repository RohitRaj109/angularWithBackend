// import * as express from 'express';
const express = require("express")
import {routes} from './routes'
const app = express();

app.use((req:any,res:any,next:any)=>{
res.header('Access-Control-Allow-Origin','*');
res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
res.header('Access-Control-Allow-Methods','OPTIONS, GET, POST, PUT, DELETE');
if('OPTIONS' == req.method){
    res.sendStatus(200);
}else{
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
}
})
app.use(express.json());
app.use(routes);
app.get('/',(req:any,res:any)=>{
   res.send([{success:true,message:'working'}])
})
app.listen(4201,'https://backend.hisarauto.co.in/',function (){
console.log('server now listening on 4201')
})


