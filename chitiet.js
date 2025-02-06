// Lấy nút quay lại đầu trang
let backToTopButton = document.getElementById('back-to-top');

// Thêm sự kiện khi người dùng cuộn xuống
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTopButton.classList.add("show"); // Hiển thị nút khi cuộn xuống
    } else {
        backToTopButton.classList.remove("show"); // Ẩn nút khi ở trên đầu trang
    }
};

// Thêm sự kiện khi nhấn nút quay lại đầu trang
backToTopButton.onclick = function() {
    // Cuộn lên đầu trang với hiệu ứng mượt mà
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Cuộn mượt mà
    });
}