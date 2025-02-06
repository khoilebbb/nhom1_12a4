document.addEventListener("DOMContentLoaded", function () {
    const detailButtons = document.querySelectorAll(".detail-btn");

    detailButtons.forEach(button => {
        button.addEventListener("click", function () {
            let productData = {
                name: this.getAttribute("data-name"),
                price: this.getAttribute("data-price"),
                img: this.getAttribute("data-img"),
                desc: this.getAttribute("data-desc")
            };

            localStorage.setItem("selectedProduct", JSON.stringify(productData));

            window.location.href = "product.html";
        });
    });
});