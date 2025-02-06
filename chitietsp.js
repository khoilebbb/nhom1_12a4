document.addEventListener("DOMContentLoaded", function () {
  // Lấy thông tin đăng nhập
  let username = localStorage.getItem("username");
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const userNameDisplay = document.getElementById("user-name");

  // Kiểm tra trạng thái đăng nhập
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

  loginBtn.addEventListener("click", function () {
    localStorage.setItem("returnTo", window.location.href);
    window.location.href = "login.html";
  });

  // Lấy dữ liệu sản phẩm từ localStorage (sản phẩm được lưu từ trang shop.html)
  let productData = JSON.parse(localStorage.getItem("selectedProduct"));
  if (productData) {
    document.getElementById("product-name").textContent = productData.name;
    document.getElementById("product-img").src = productData.img;
    document.getElementById("product-desc").textContent = productData.desc;
    document.getElementById("product-price").textContent = "Giá: " + productData.price;

    // Nếu sản phẩm có link mua hàng, gán cho nút "Mua sản phẩm"
    if (productData.buyLink) {
      document.getElementById("buy-product").href = productData.buyLink;
    } else {
      document.getElementById("buy-product").style.display = "none";
    }
  }

  // Chức năng "Xem thêm / Rút gọn" mô tả sản phẩm
  const toggleDesc = document.getElementById("toggle-desc");
  const descPara = document.getElementById("product-desc");
  let isExpanded = false;
  if (productData && productData.desc.length > 100) {
    descPara.textContent = productData.desc.substring(0, 100) + "...";
    toggleDesc.textContent = "Xem thêm";
    isExpanded = false;
  } else {
    toggleDesc.style.display = "none";
  }
  toggleDesc.addEventListener("click", function () {
    if (!isExpanded) {
      descPara.textContent = productData.desc;
      toggleDesc.textContent = "Rút gọn";
      isExpanded = true;
    } else {
      descPara.textContent = productData.desc.substring(0, 100) + "...";
      toggleDesc.textContent = "Xem thêm";
      isExpanded = false;
    }
  });

  // QUẢN LÝ YÊU THÍCH: Khi người dùng nhấn nút "Thêm vào yêu thích"
  const wishlistBtn = document.getElementById("add-to-wishlist");
  wishlistBtn.addEventListener("click", function () {
    if (!username) {
      alert("Vui lòng đăng nhập để thêm vào danh sách yêu thích!");
      localStorage.setItem("returnTo", window.location.href);
      window.location.href = "login.html";
      return;
    }

    // Sử dụng productData có thuộc tính id để đảm bảo tính duy nhất
    let wishlistKey = "wishlist_" + username;
    let wishlist = JSON.parse(localStorage.getItem(wishlistKey)) || [];

    if (!wishlist.some(p => p.id === productData.id)) {
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
  const sliderContainer = document.getElementById("slider-container");
  const slides = document.querySelectorAll("#slider-container .slide");
  const totalSlides = slides.length;

  function showSlide(index) {
    // Nếu index nhỏ hơn 0, chuyển về slide cuối
    if (index < 0) {
      currentSlide = totalSlides - 1;
    }
    // Nếu index lớn hơn số slide, chuyển về slide đầu tiên
    else if (index >= totalSlides) {
      currentSlide = 0;
    }
    else {
      currentSlide = index;
    }
    // Chuyển đổi slide bằng cách thay đổi thuộc tính transform
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Hàm chuyển slide kế tiếp
  window.nextSlide = function () {
    showSlide(currentSlide + 1);
  };

  // Hàm chuyển slide trước
  window.prevSlide = function () {
    showSlide(currentSlide - 1);
  };

  // Khởi tạo hiển thị slide đầu tiên
  showSlide(currentSlide);
});