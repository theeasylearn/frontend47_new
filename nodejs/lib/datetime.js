function getCurrentDate(){
    let current=new Date();
    let today=current.getDate() + "/"+ (current.getMonth()+1)  +'/' + current.getFullYear();
    return today;
}

function getCurrentTime(){
    let current=new Date();
    let time=current.getHours()+':'+current.getMinutes();
    return time;
}

module.exports={getCurrentDate,getCurrentTime};