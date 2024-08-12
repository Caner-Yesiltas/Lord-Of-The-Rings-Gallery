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
    cardDiv.innerHTML = `<img src="./img/loading.gif"/>`;
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")

  .then((res) => {
    if(!res.ok) {
        throw new Error("Veri Cekme Islemi Basarisiz");

        // verinin dgoru gelip gelmedigi kontrol edilir
        
    }
    
    return res.json();
  })
  
  .then((data) => { displayCardImages();

    //buraya istedigimiz islem yazilir verinin alindigi kisim
    
  })


  .catch((error) => {

    // burayada hata mesaji
    console.error("Hata:", error);
    cardDiv.innerHTML = '<img src="./img/error.gif" />';
    alert("Verileri çekerken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
     
  });
}


  fetchImages();

  btn.addEventListener("click", fetchImages) {



  }


    
  
  function displayCardImages(data) {
    cardDiv.innerHTML="";

    data.forEach((cat) => { // cat datanin icerisindeki her bir verinin adi parametre olarak geceriz 

    const imgElement = document.createElement("img");

    

    })

  }
