const http = require('http')
const port = 3000
const server = http.createServer((req,res)=>{
    res.writeHead(200,"LOL")
    res.end("lmao this your server lol");
})
server.listen(3000,()=>{
    "server on http://localhost:3000"
})