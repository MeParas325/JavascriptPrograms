console.log("Callback hell and Pyramid of Doom");

const GITHUB_API = "https://api.github.com/users/MeParas325";

const user = fetch(GITHUB_API);

console.log(user);