const cart = ["Kurta", "Shoes", "Pants"];

const promise = createOrder(cart);
promise.then(function(orderId){
    console.log(orderId);
})

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject){

        if(!validateCart()){
            const err = new Error("Cart is not valid!");
            reject(err);
        }

        const orderId = "12345";

        if(orderId){
            resolve(orderId);
        }
    })
    return pr;
}

function validateCart(){
    return false;
}