console.log("welcome here");

document.getElementById("heading").addEventListener("mouseover", function (e) {
  console.log("You clicked in heading tag");
  let varia = e.target;
  varia = e.target.className;
  varia = e.target.id;
//   varia = Array.from(e.target.classList).forEach((varia) => {
//     console.log(varia);
//   });
  varia = e.offsetX;
  varia = e.offsetY;
  varia = e.clientX;
  varia = e.offsetY;
  console.log(varia);
  // location.href = "google.com"
});
