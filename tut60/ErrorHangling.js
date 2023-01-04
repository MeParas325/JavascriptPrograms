console.log("Error handling in java.");

try {
    console.log(tanuja);
} catch (error) {
    console.log("This is the error"+error);
}

// val = 5;
try{
    console.log(val);
}catch(paras){
    console.log("This is the second error"+paras);
}

try{
    setTimeout(() => {
        try {
            console.log(sister);
        } catch (error) {
            console.log("This is the error"+error);
        }
    }, 4000);
}catch(error){
    console.log(error);
}