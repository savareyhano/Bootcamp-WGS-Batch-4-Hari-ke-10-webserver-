const http = require('http');
const fs = require('fs');
const port = 3000;

const read = (path, res) =>{
    fs.readFile(path,(err,data)=>{
        if(err){
            res.writeHead(404);
            res.write('Error : page not found');
        } else {
            res.write(data)
        }
        res.end();
    })
}

http
    .createServer((req,res)=>{
        const url = req.url;
        console.log(url);

        res.writeHead(200, {
            'Content-Type': 'text/html',
        });

        if(url==='/about'){
            // res.write('<h1>This is about page</h1>'); //using html language
            read('./about.html', res)
        } else if(url==='/contact'){
            // res.write('<h2>This is contact page</h2>'); //using html language
            read('./contact.html', res)
        } else {
            // res.write('Hello World!');
            read('./about.html', res)
        }
    })
    .listen(port,()=>{
        console.log('Server is listening on port 3000');
    });