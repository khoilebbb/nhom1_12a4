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

// ✅ Xử lý đăng ký
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("register-username").value.trim();
    var password = document.getElementById("register-password").value;

    if (username && password) {
        let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

        const userExists = accounts.some(account => account.username === username);
        if (userExists) {
            alert("Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác!");
            return;
        }

        accounts.push({ username: username, password: password });
        localStorage.setItem("accounts", JSON.stringify(accounts)); 

        alert("Đăng ký thành công! Chuyển hướng đến trang đăng nhập...");
        showForm('login');  // Chuyển sang form đăng nhập sau khi đăng ký
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
});

// ✅ Xử lý đăng nhập
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("login-username").value.trim();
    var password = document.getElementById("login-password").value;

    if (username && password) {
        const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

        const user = accounts.find(account => account.username === username && account.password === password);

        if (user) {
            localStorage.setItem("username", username);  
            alert("Đăng nhập thành công!");

            const returnTo = localStorage.getItem("returnTo");
            if (returnTo) {
                localStorage.removeItem("returnTo");
                window.location.href = returnTo;
            } else {
                window.location.href = "../index.html";
            }
        } else {
            const isRegistered = accounts.some(account => account.username === username);
            if (isRegistered) {
                alert("Mật khẩu không đúng. Vui lòng thử lại!");
            } else {
                if (confirm("Tài khoản chưa được đăng ký. Bạn có muốn đăng ký ngay bây giờ không?")) {
                    showForm('register');  // ✅ Chuyển sang tab đăng ký
                }
            }
        }
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
});