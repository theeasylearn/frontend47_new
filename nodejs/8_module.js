const http=require("http");

const detail=require('./lib/site_detail');

const server=http.createServer(
    (req,res)=>{
        res.writeHead(200,{'content-type':'text/html'});

        let output=detail.center + '<br/>' + detail.address + '<br/>' + detail.city + '<br/>' + detail.contactno;
        res.write(output);
        res.end();
    }
 );

port=5000;
server.listen(
    port,()=>{
        console.log("server is running on port 5000...");
    }
);