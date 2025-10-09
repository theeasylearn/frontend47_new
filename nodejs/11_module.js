const http=require('http');
const data=require('./lib/database1');

function handleReqRes(req,res){
        res.writeHead(200,{'content-type':'text/plain'});
        let db=new data.Dbconnector();
        db.insertdb();
        db.updatedb();
        db.deletedb();
        db.fetchdata();
        res.write('database features are working');
        res.end();
}

const server=http.createServer(
    (req,res)=>{handleReqRes(req,res)}
);

const port=5000;
server.listen(
    port,()=>{
        console.log('server is listening port 5000');
    }
);