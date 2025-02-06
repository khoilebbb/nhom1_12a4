document.addEventListener("DOMContentLoaded", function () {
    let username = localStorage.getItem("username");

    // Hiển thị thông tin người dùng
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const userNameDisplay = document.getElementById("user-name");

    if (username) {
        userNameDisplay.textContent = `Xin chào, ${username}`;
        loginBtn.style.display = "none";
        logoutBtn.style.display = "inline";
    }

    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("username");
        localStorage.removeItem("wishlist_" + username);
        window.location.reload();
    });

    // Lấy danh sách yêu thích từ localStorage
    function getWishlist() {
        if (username) {
            return JSON.parse(localStorage.getItem("wishlist_" + username)) || [];
        }
        return [];
    }

    // Lưu danh sách yêu thích
    function saveWishlist(wishlist) {
        if (username) {
            localStorage.setItem("wishlist_" + username, JSON.stringify(wishlist));
        }
    }

    let wishlist = getWishlist();
    const wishlistContainer = document.getElementById("wishlist-items");

    function displayWishlist() {
        wishlistContainer.innerHTML = "";
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

        // Nút "Xóa sản phẩm"
        document.querySelectorAll(".remove-wishlist").forEach(button => {
            button.addEventListener("click", function () {
                let index = this.getAttribute("data-index");
                wishlist.splice(index, 1);
                saveWishlist(wishlist);
                displayWishlist();
            });
        });

        // Nút "Xem Chi Tiết"
        document.querySelectorAll(".view-details").forEach(button => {
            button.addEventListener("click", function () {
                const productId = this.getAttribute("data-id");
                const selectedProduct = wishlist.find(p => p.id == productId);
                if (selectedProduct) {
                    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
                    window.location.href = "chitietsp.html";
                }
            });
        });
    }

    displayWishlist();
});