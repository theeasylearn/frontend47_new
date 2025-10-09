const http=require('http');

const data=require('./lib/database');

const server=http.createServer(
    (req,res)=>{
        res.writeHead(200,{'content-type':'text/html'});

        let output=data.name+data.port+data.username+data.password+data.database;

        res.write(output);
        res.end();
    }
);

const port=5000;
server.listen(port,()=>{
    console.log('server is running on port 5000...');
});