document.addEventListener("DOMContentLoaded", function () {
  let username = localStorage.getItem("username");
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const userNameDisplay = document.getElementById("user-name");

  function checkLoginStatus() {
    if (username) {
      userNameDisplay.textContent = `Xin chào, ${username}`;
      loginBtn.style.display = "none";
      logoutBtn.style.display = "inline";
    }
  }
  checkLoginStatus();

  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("username");
    window.location.reload();
  });

  // Lấy dữ liệu sản phẩm
  let productData = JSON.parse(localStorage.getItem("selectedProduct"));
  if (productData) {
    document.getElementById("product-name").textContent = productData.name;
    document.getElementById("product-desc").innerHTML = productData.desc + ' <span id="toggle-desc" class="toggle-btn"></span>';
    document.getElementById("product-price").textContent = "Giá: " + productData.price;

    if (!productData.id) {
      // Tạo ID duy nhất dựa trên tên và thời gian hiện tại
      productData.id = `${productData.name}-${Date.now()}`;
    }
  }

  // Thêm vào danh sách yêu thích
  const wishlistBtn = document.getElementById("add-to-wishlist");
  wishlistBtn.addEventListener("click", function () {
    if (!username) {
      alert("Vui lòng đăng nhập để thêm vào danh sách yêu thích!");
      localStorage.setItem("returnTo", window.location.href);
      window.location.href = "login.html";
      return;
    }

    let wishlistKey = "wishlist_" + username;
    let wishlist = JSON.parse(localStorage.getItem(wishlistKey)) || [];

    // Kiểm tra sản phẩm đã có trong danh sách hay chưa
    if (!wishlist.some(item => item.id === productData.id)) {
      wishlist.push(productData);
      localStorage.setItem(wishlistKey, JSON.stringify(wishlist));
      alert("Đã thêm vào danh sách yêu thích!");
    } else {
      alert("Sản phẩm này đã có trong danh sách yêu thích!");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
const slides = document.querySelectorAll('#slider-container-2 .slide');

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });

  currentSlide = index;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Hiển thị slide đầu tiên khi tải trang
showSlide(0);


