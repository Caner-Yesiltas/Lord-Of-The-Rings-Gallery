const cardDiv = document.getElementById("cardDiv");
const loadingDiv = document.getElementById("loading");
const btn = document.querySelector(".btn");
const containerDiv = document.querySelector(".container");
const tarih = document.getElementById("tarih");
const loading2 =document.getElementById("loading")

containerDiv.style.display = "none";


function updateTarih() {
    const now = new Date();
    const formattedDate = now.toLocaleString(); 
    tarih.innerText = `Son güncelleme: ${formattedDate}`; 
  }
  
  
  updateTarih();
 
setTimeout(() => {
  loadingDiv.style.display = "none";
  containerDiv.style.display = "flex";
  loading2.style.opacity = "0.1";
 
  getLotrImages();
}, 2000);
loading2.style.opacity = "0.1";
 
function getLotrImages() {
    loading2.style.opacity = "0.5";
  cardDiv.innerHTML = `<img src="./img/loading.gif"/>`;
  
  const flickrApiKey = "6f7487affd74f71e1148975206f1d0a0";
  const randomPage = Math.floor(Math.random() * 100) + 1;
  const flickrApiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApiKey}&tags=lord+of+the+rings&per_page=5&page=${randomPage}&format=json&nojsoncallback=1`;

  fetch(flickrApiUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Veri Cekme Islemi Basarisiz");

        // verinin dgoru gelip gelmedigi kontrol edilir
      }
      loading2.style.opacity = "0.1";
 
      return res.json();
    })

    .then((data) => {
      console.log(data); 

      displayCardImages(data.photos.photo); // photos.photo datanin yolu then api ile cektigimiz

      //buraya istedigimiz islem yazilir verinin alindigi kisim
      updateTarih();
    })

    .catch((error) => {
      // burayada hata mesaji
      console.error("Hata:", error);
      cardDiv.innerHTML = '<img src="./img/error.gif" />';
      alert(
        "Verileri çekerken bir hata oluştu. Lütfen daha sonra tekrar deneyin."
      );
    });
}

getLotrImages();

btn.onclick = () => {
  
    
    getLotrImages();
};

function displayCardImages(photos) {
  cardDiv.innerHTML = "";

  photos.forEach(({ farm, server, id, secret, title }) => {
    // cat datanin icerisindeki her bir verinin adi parametre olarak geceriz simdi onu photo olarak yaptik api degisti

    const imgElement = document.createElement("img");
    imgElement.src = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_b.jpg`; //   imgElement.src =cat.url;  onceki deger buydu degistirildi
    imgElement.classList.add("img-fluid", "col-md-4", "col-sm-12"); // classList.add ile bootstrap classlari ekledik olusturdugumuz img elementine
    cardDiv.appendChild(imgElement);
  });
}
