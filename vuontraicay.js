document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".garden-tab");
    const infos = document.querySelectorAll(".garden-info");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Xóa trạng thái active cũ
            tabs.forEach(t => t.classList.remove("active"));
            infos.forEach(info => info.classList.remove("active"));

            // Thêm trạng thái active mới
            tab.classList.add("active");
            document.getElementById(tab.getAttribute("data-garden")).classList.add("active");
        });
    });
    
});
