const cardDiv = document.getElementById("cardDiv");
const loadingDiv = document.getElementById("loading");
const btn = document.querySelector(".btn");
const containerDiv = document.querySelector(".container");
const tarih = document.getElementById("tarih");



setTimeout(() => {

    loadingDiv.style.display="none";
    containerDiv.style.display="flex";


    
}, 3000);

function fetchImages() {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then(response => response.json())
      .then(data => {
        
        console.log(data);
      });
  }
  
  fetchImages();