let url = "https://kontests.net/api/v1/all";

let response = fetch(url);
response.then((v)=>{
    return v.json();
}).then((contests)=>{
    let ihtml = "";
    console.log(contests);
    for(item in contests){
        ihtml += `<div class="card" style="width: 18rem; margin: 2rem;">
        <img src="/coding.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[item].name.substr(0, 20)}</h5>
          <p class="card-text">Start time: ${contests[item].start_time}</p>
          <p class="card-text">End time: ${contests[item].end_time}</p>
          <a href="${contests[item].url}" target="_blank" class="btn btn-primary">View here</a>
        </div>
      </div>`;
    }
    cardContainer.innerHTML = ihtml;
})