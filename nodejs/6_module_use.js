const http=require('http');

const data=require('./lib/datetime');

const server=http.createServer(
    (req,res)=>{
        res.writeHead(200,{'content-type':'text/html'});

        let output=data.getCurrentDate()+'  '+data.getCurrentTime();

        res.write(output);
        res.end();
    }
);

const port=5000;
server.listen(
    port,()=>{
        console.log('server is listening on port 5000.....');
    }
);
