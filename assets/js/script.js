// Data produk (dengan gambar berdasarkan nama produk)
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

// Fungsi untuk menampilkan produk dengan card
function displayProducts(productsToDisplay) {
  productContainer.innerHTML = ""; // Bersihkan sebelumnya
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
        <a href="#" class="btn btn-dark">Beli Sekarang</a>
        <a href="#" class="btn btn-warning mt-1 add-to-cart" data-id="1" data-nama="${
          product.nama
        }" data-harga="${product.harga}">+ Keranjang</a>
      </div>
    `;
    productContainer.appendChild(productCard);
  });

  // Menambahkan event listener untuk tombol "+ Keranjang"
  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = event.target.getAttribute("data-id");
      const nama = event.target.getAttribute("data-nama");
      const harga = event.target.getAttribute("data-harga");

      // Menyimpan produk yang dipilih ke localStorage
      let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
      keranjang.push({ id, nama, harga });
      localStorage.setItem("keranjang", JSON.stringify(keranjang));

      alert(nama + " telah ditambahkan ke keranjang!");
    });
  });
}

// Tampilkan produk awal
displayProducts(products);

// Event listener untuk form pencarian
searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Menghindari refresh halaman
  const searchQuery = searchInput.value.toLowerCase(); // Ambil nilai pencarian dan ubah ke lowercase

  // Filter produk berdasarkan nama yang mengandung query pencarian
  const filteredProducts = products.filter((product) =>
    product.nama.toLowerCase().includes(searchQuery)
  );

  // Tampilkan produk yang sudah difilter
  displayProducts(filteredProducts);
});
