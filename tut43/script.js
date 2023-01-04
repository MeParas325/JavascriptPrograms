console.log("This is the tutorial about insertion methods.");

let a = document.getElementsByTagName('div')[0];
console.log(a.innerHTML);

a.innerHTML = a.innerHTML + '<h1>I am the heading tag</h1>';
console.log(a.innerHTML);

a.innerHTML = '<h1>I am the heading tag</h1>';
console.log(a);

let dabba = document.createElement('div');
console.log(dabba);


dabba.innerHTML = '<h1> I am the heding inside dabba</h1>';
console.log(dabba.innerHTML);

dabba.append('<h2>I am the heading</h2>');
console.log(dabba.innerHTML);


