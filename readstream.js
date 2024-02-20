const fs = require('fs');

const readablestream = fs.createReadStream('a.txt',
{   encoding:'utf-8',
    highWaterMark:90,
    start:2
})

readablestream.on('data',(chunk)=>{
    console.log('the recieved data chunk is:');
    console.log(chunk);
})