//Hoisting is the way by which variables and functions are declare at the top line of the code only functions are declare in the top of the line of the code hoisting will not work for function expressions and also hoisting only works for var not for let and const.

console.log(a)
var a

console.log(b)
var b = 6

greet()
function greet(){
    console.log("Good morning.")
}

// say()
// let say = () =>{
//     console.log("I Love You")
// }

// console.log(c)
// let c = 5

console.log(d)
const d = 75

