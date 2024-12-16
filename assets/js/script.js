const products = [
  {
    nama: "Thinkpad T1 Carbon",
    harga: "2999999",
    gambar: "thinkpad-t1-carbon.png",
  },
  {
    nama: "Asus VivoBook 15",
    harga: "4499000",
    gambar: "asus-vivobook-15.png",
  },
  { nama: "Acer Aspire 5", harga: "6299000", gambar: "acer-aspire-5.png" },
  {
    nama: "Thinkpad T1 Carbon",
    harga: "2999999",
    gambar: "thinkpad-t1-carbon.png",
  },
  {
    nama: "Asus VivoBook 15",
    harga: "4499000",
    gambar: "asus-vivobook-15.png",
  },
  { nama: "Acer Aspire 5", harga: "6299000", gambar: "acer-aspire-5.png" },
  { nama: "Acer Aspire 5", harga: "6299000", gambar: "acer-aspire-5.png" },
  {
    nama: "Asus VivoBook 15",
    harga: "4499000",
    gambar: "asus-vivobook-15.png",
  },
  {
    nama: "Thinkpad T1 Carbon",
    harga: "2999999",
    gambar: "thinkpad-t1-carbon.png",
  },
  { nama: "Acer Aspire 5", harga: "6299000", gambar: "acer-aspire-5.png" },
  {
    nama: "Asus VivoBook 15",
    harga: "4499000",
    gambar: "asus-vivobook-15.png",
  },
  {
    nama: "Thinkpad T1 Carbon",
    harga: "2999999",
    gambar: "thinkpad-t1-carbon.png",
  },
];

const productContainer = document.getElementById("product-container");
const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");

function displayProducts(productsToDisplay) {
  productContainer.innerHTML = "";
  productsToDisplay.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("card", "col-12", "col-sm-2", "col-md-2", "mb-4");
    productCard.innerHTML = `
      <img src="assets/img/${product.gambar}" class="card-img-top" alt="${
      product.nama
    }" />
      <div class="card-body">
        <h5 class="card-title">${product.nama}</h5>
        <p class="card-text">Rp ${parseInt(product.harga).toLocaleString()}</p>
        <a href="https://wa.me/6285363001781?text=Halo%20ZetSph%20Store,%20Saya%20ingin%20Membeli%20${
          product.nama
        }" class="btn btn-dark">Beli Sekarang</a>
        <a href="#" class="btn btn-warning mt-1 add-to-cart" data-id="1" data-nama="${
          product.nama
        }" data-harga="${product.harga}">+ Keranjang</a>
      </div>
    `;
    productContainer.appendChild(productCard);
  });

  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = event.target.getAttribute("data-id");
      const nama = event.target.getAttribute("data-nama");
      const harga = event.target.getAttribute("data-harga");

      let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
      keranjang.push({ id, nama, harga });
      localStorage.setItem("keranjang", JSON.stringify(keranjang));

      alert(nama + " telah ditambahkan ke keranjang!");
    });
  });
}

displayProducts(products);

searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); 
  const searchQuery = searchInput.value.toLowerCase(); 

  const filteredProducts = products.filter((product) =>
    product.nama.toLowerCase().includes(searchQuery)
  );

  displayProducts(filteredProducts);
});
