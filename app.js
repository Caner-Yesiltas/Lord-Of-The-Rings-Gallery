const cardDiv = document.getElementById("cardDiv");
const loadingDiv = document.getElementById("loading");
const btn = document.querySelector(".btn");
const containerDiv = document.querySelector(".container");
const tarih = document.getElementById("tarih");

containerDiv.style.display = "none";

setTimeout(() => {

    loadingDiv.style.display="none";
    containerDiv.style.display="flex";
    getLotrImages();

    
}, 3000);

function getLotrImages () {
    cardDiv.innerHTML = `<img src="./img/loading.gif"/>`;
    const flickrApiKey = "J0464b5b099ff8d2f8885d3077787c70d";
    const flickrApiSecret = "c8108ff7e7352dc9";
    const flickrApiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApiKey}&tags=lord+of+the+rings&per_page=10&format=json&nojsoncallback=1`;

    fetch(flickrApiUrl)
  .then((res) => {
    if(!res.ok) {
        throw new Error("Veri Cekme Islemi Basarisiz");

        // verinin dgoru gelip gelmedigi kontrol edilir
        
    }
    
    return res.json();
  })
  
  .then((data) => { displayCardImages(data.photos.photo); // photos.photo datanin yolu then api ile cektigimiz 

    //buraya istedigimiz islem yazilir verinin alindigi kisim
    
  })


  .catch((error) => {

    // burayada hata mesaji
    console.error("Hata:", error);
    cardDiv.innerHTML = '<img src="./img/error.gif" />';
    alert("Verileri çekerken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
     
  });
}


getLotrImages()

  btn.onclick = () => getLotrImages();


    
  
  function displayCardImages(data) {
    cardDiv.innerHTML="";

    data.forEach((cat) => { // cat datanin icerisindeki her bir verinin adi parametre olarak geceriz 

    const imgElement = document.createElement("img");
    imgElement.src =cat.url;
    imgElement.classList.add("img-fluid", "col-md-4", "col-sm-12"); // classList.add ile bootstrap classlari ekledik olusturdugumuz img elementine
cardDiv.appendChild(imgElement);

    });

  };
