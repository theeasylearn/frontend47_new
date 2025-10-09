class Dbconnector{
    constructor(){
        console.log('constructor is working');
    }
    insertdb(){
        console.log("data is inserted");
    }
    updatedb(){
        console.log("data is updated");
    }
    deletedb(){
        console.log("data is deleted");
    }
    fetchdata(){
        console.log("data is fetched");
    }
}

module.exports={Dbconnector};