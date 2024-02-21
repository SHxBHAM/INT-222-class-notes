const fs = require('fs');
const http = require('http'); // Change from https to http
const PORT = 6969;
const Server = http.createServer((req, res) => { // Change from res,req to req, res
    if (req.url === "/") { // Change single equals sign to triple equals for comparison
        fs.readFile("./index.html", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            res.end(data);
            // res.send(data);

        });
    }
    else if(req.url == "/Soumya"){
        res.end("<h1>Soumya chutiya hai</h1>");
    }
});
Server.listen(PORT, () => {
    console.log(`SERVER is Running on http://localhost:${PORT}`);
});
