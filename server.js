const express=require('express');
const path=require('path');
const fs=require('fs');

const app=express();

app.get('/index_android',(req,res)=>{
  let f=path.resolve(__dirname,'index_android.html');
  let html=fs.readFileSync(f,'utf-8');
  // console.log('html:',html);
  res.send(html);
})

app.get('/index_ios',(req,res)=>{
  let f=path.resolve(__dirname,'index_ios.html');
  let html=fs.readFileSync(f,'utf-8');
  // console.log('html:',html);
  res.send(html);
})

app.get('/',(req,res)=>{
  res.send("hello");
})

app.listen(3001,function(){
  console.log('服务启动端口:',3001);
})