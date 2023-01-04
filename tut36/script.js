let id1 = document.getElementById('id1');
let id2 = document.getElementById('id2');
// console.log(id2); //This will directly print the element whose id is id2
console.log(id1.matches('.box'));
console.log(sp2.closest('#id2'));
console.log(sp2.closest('.box'));
console.log(id2.contains(sp2));
// console.log(id2.classList.contains('.spann')); //Dont know about this