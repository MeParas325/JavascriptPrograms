try{
    setTimeout(() => {
        console.log(varun);
    }, 2000);
}catch(error){
    console.log("Error aa gya bhai");
}finally{
    console.log("This will execute finally.");
}

name1 = "Tarun";
try{
    setTimeout(() => {
        console.log(name1);
    }, 5000);
}catch(error){
    console.log(error);
}finally{
    console.log("This will execute finally...");
}