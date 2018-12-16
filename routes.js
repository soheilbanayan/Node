
const fs = require('fs');

//this or function requestHandler(req, res) {}
const requestHandler = (req, res) =>{

    const url = req.url;


if(url  === '/'){

    res.write('<html>');
    res.write('<head><title>enter</title></head>');
    res.write('<body><form action="/messaging" method="POST"><input type="text" name="messages"> <button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
}
const method = req.method;
if(url === '/messaging' && method ==='POST'){

    const body = [];

    req.on('data', chunking => {
        console.log(chunking); //bebinim chiya print mishe
        body.push(chunking);
    });


     return  req.on('end', () => {
            const parsBody = Buffer.concat(body).toString();
            const messag = parsBody.split('=')[1];
           // console.log(parsBody);
            fs.writeFile('msg.txt', messag, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            }
            ); 
        });
}

res.setHeader('Content-type' , 'text/html');
res.write('<html>');
res.write('<head><title>My first page</title></head>');
res.write('<body><h1>Hello node</h1></body>');
res.write('</html>')
return res.end();
}

module.exports = requestHandler;