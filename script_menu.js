// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuContent = document.querySelector('.mobile-menu-content');
const closeMenuButton = document.querySelector('.close-menu');

// Open Menu
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active'); // Hiển thị overlay
    menuContent.classList.add('active'); // Trượt menu vào
});

// Close Menu
closeMenuButton.addEventListener('click', () => {
    menuContent.classList.remove('active'); // Menu trượt ra
    setTimeout(() => {
        mobileMenu.classList.remove('active'); // Ẩn overlay
    }, 500); // Đồng bộ thời gian hiệu ứng
});

// Danh sách các trái cây để tìm kiếm
const fruits = [
    "Táo",
    "Cam",
    "Xoài",
    "Chuối",
    "Dưa hấu",
    "Ổi",
    "Dứa",
    "Lê",
    "Bưởi",
    "Dâu tây", "Sau rieng"
];

function searchItems() {
    // Lấy giá trị từ thanh tìm kiếm
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = fruits.filter((fruit) =>
        fruit.toLowerCase().includes(input)
    );

    // Hiển thị kết quả tìm kiếm
    const resultDiv = document.getElementById("searchResults");
    if (results.length > 0) {
        resultDiv.innerHTML = `<p>Kết quả tìm kiếm:</p><ul>${results
            .map((fruit) => `<li>${fruit}</li>`)
            .join("")}</ul>`;
    } else {
        resultDiv.innerHTML = `<p>Không tìm thấy kết quả phù hợp.</p>`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var username = localStorage.getItem("username"); // Lấy username từ LocalStorage
    var loginBtn = document.getElementById("login-btn");
    var usernameDisplay = document.getElementById("username-display");
    var logoutBtn = document.getElementById("logout-btn");

    if (username) {
        // Nếu đã đăng nhập, ẩn nút đăng nhập & hiển thị tên + nút đăng xuất
        loginBtn.style.display = "none";
        usernameDisplay.textContent =username;
        usernameDisplay.style.display = "inline-block";
        logoutBtn.style.display = "inline-block";
       
}
    
    // Xử lý đăng xuất
    logoutBtn.addEventListener("click", function() {
        localStorage.removeItem("username"); // Xóa thông tin đăng nhập
        alert("Bạn đã đăng xuất!");
        window.location.reload(); // Tải lại trang
    });
});

