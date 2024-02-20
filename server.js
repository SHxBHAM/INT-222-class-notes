const fs = require('fs');
const https = require('http')
const PORT = 6969;
const Server  = https.createServer((res,req)=>{
    if(req.url =="/"){
        fs.readFile("./a.txt","utf-8",(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end('File-content:'+data); 

        })
    }
});
Server.listen(PORT,()=>{
    console.log(`SERVER is Running on http://localhost:${PORT}`);
});