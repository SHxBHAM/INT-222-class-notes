const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url=="/Soumyabad")
    {res.end("soumya bkl hai sale ko ata jata nhi kuch lund kahin ka");
    res.writeHead(200,{"content-type":"text/plain"});}
    else if(req.url=="/Soumyagood"){
        res.end("soumya bkl hai sale ko ata jata nhi kuch lund kahin ka");
        res.writeHead(200,{"content-type":"text/plain"});
    }
})
const PORT = 6969;
server.listen(PORT,()=>{
    console.log(`your server is running on http://localhost:${PORT}`)
})