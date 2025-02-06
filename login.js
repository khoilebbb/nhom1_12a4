// Chuyển đổi giữa form đăng nhập và đăng ký
function showForm(formType) {
    if (formType === 'login') {
        document.getElementById('login-form').classList.remove('hidden');
        document.getElementById('register-form').classList.add('hidden');
        document.querySelectorAll('.tab-button')[0].classList.add('active');
        document.querySelectorAll('.tab-button')[1].classList.remove('active');
    } else {
        document.getElementById('login-form').classList.add('hidden');
        document.getElementById('register-form').classList.remove('hidden');
        document.querySelectorAll('.tab-button')[1].classList.add('active');
        document.querySelectorAll('.tab-button')[0].classList.remove('active');
    }
}

// Xử lý đăng nhập
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    if (username && password) {
        localStorage.setItem("username", username); // Đổi thành "username" cho đồng bộ
        
        alert("Đăng nhập thành công!");

        // Kiểm tra xem có trang trước đó không
        let returnTo = localStorage.getItem("returnTo");
        if (returnTo) {
            localStorage.removeItem("returnTo"); // Xóa để tránh lặp
            window.location.href = returnTo;
        } else {
            window.location.href = "../index.html"; // Không có trang trước thì về trang chủ
        }
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
});
// Xử lý đăng ký
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("register-username").value;
    var password = document.getElementById("register-password").value;

    if (username && password) {
        localStorage.setItem("username", username); // Lưu username vào localStorage
        alert("Đăng ký thành công! Chuyển hướng đến trang đăng nhập...");
        window.location.href = "login.html";  // Chuyển về trang login
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
});
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    if (username && password) {
        localStorage.setItem("username", username); // Lưu username vào LocalStorage
        alert("Đăng nhập thành công!");
      window.location.href = "../index.html"; // Quay về trang chủ
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
});