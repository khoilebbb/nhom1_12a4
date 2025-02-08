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


document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username");
    const loginBtn = document.getElementById("login-btn");
    const usernameDisplay = document.getElementById("username-display");
    const logoutBtn = document.getElementById("logout-btn");

    if (username) {
        // Nếu đã đăng nhập, ẩn nút đăng nhập & hiển thị tên + nút đăng xuất
        loginBtn.style.display = "none";
        usernameDisplay.textContent = `${username}`;
        usernameDisplay.style.display = "inline-block";
        logoutBtn.style.display = "inline-block";
    } else {
        // Nếu chưa đăng nhập, chỉ hiện nút đăng nhập
        loginBtn.style.display = "inline-block";
        usernameDisplay.style.display = "none";
        logoutBtn.style.display = "none";
    }

    // Xử lý đăng xuất
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("username"); // Xóa thông tin đăng nhập
        alert("Bạn đã đăng xuất!");
        window.location.reload(); // Tải lại trang để cập nhật giao diện
    });
});

// Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.mobile-menu-overlay').style.display = 'block';
});

document.querySelector('.close-menu').addEventListener('click', function () {
    document.querySelector('.mobile-menu-overlay').style.display = 'none';
});

// script_menu.js
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.mobile-menu-overlay').style.display = 'block';
});

document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.mobile-menu-overlay').style.display = 'none';
});