function email(receiver,subject,message){
    return{
    receiver,
    subject,
    message,
    send(){
        console.log("Receiver: ",this.receiver);
        console.log("Subject: ",this.subject);
        console.log("Message: ",this.message);
    }}
}

module.exports={email};