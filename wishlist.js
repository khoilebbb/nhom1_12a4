document.addEventListener("DOMContentLoaded", function () {
  let username = localStorage.getItem("username");
  const wishlistContainer = document.getElementById("wishlist-items");

  function getWishlist() {
    return JSON.parse(localStorage.getItem("wishlist_" + username)) || [];
  }

  function displayWishlist() {
    wishlistContainer.innerHTML = "";
    let wishlist = getWishlist();

    if (wishlist.length === 0) {
      wishlistContainer.innerHTML = "<p>Danh sách yêu thích trống.</p>";
      return;
    }

    wishlist.forEach((product, index) => {
      let itemDiv = document.createElement("div");
      itemDiv.classList.add("wishlist-item");

      itemDiv.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button class="view-details" data-id="${product.id}">Xem Chi Tiết</button>
        <button class="remove-wishlist" data-index="${index}">❌</button>
      `;

      wishlistContainer.appendChild(itemDiv);
    });

    document.querySelectorAll(".remove-wishlist").forEach(button => {
      button.addEventListener("click", function () {
        let index = this.getAttribute("data-index");
        let wishlist = getWishlist();
        wishlist.splice(index, 1);
        localStorage.setItem("wishlist_" + username, JSON.stringify(wishlist));
        displayWishlist();
      });
    });

    document.querySelectorAll(".view-details").forEach(button => {
      button.addEventListener("click", function () {
        const productId = this.getAttribute("data-id");
        const wishlist = getWishlist();
        const selectedProduct = wishlist.find(p => p.id === productId);

        if (selectedProduct) {
          localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
          window.location.href = "chitietsp.html";
        }
      });
    });
  }

  displayWishlist();
});

document.addEventListener("DOMContentLoaded", function () {
  const username = localStorage.getItem("username");
  const userInfo = document.getElementById("user-info");
  const userNameDisplay = document.getElementById("user-name");
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");

  if (username) {
    userNameDisplay.textContent = `Xin chào, ${username}`;
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline";
  } else {
    userNameDisplay.textContent = "";
    loginBtn.style.display = "inline";
    logoutBtn.style.display = "none";
  }

  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("username");
    window.location.reload();
  });
});