const cart = ["Kurta", "Pants", "Shoes"];

const promise = createOrder(cart);
promise.then(function(orderId){
    console.log(orderId);
}).catch(function(err){
    console.log(err.message);
})


function createOrder(cart){
    
    const pr = new Promise(function(resolve, reject){
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }

        const orderId = "12345";

        if(orderId){
            resolve(orderId);
        }
    })

    return pr;
}

function validateCart(cart){
    return false;
}