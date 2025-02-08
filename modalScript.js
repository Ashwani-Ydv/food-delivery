document.addEventListener("DOMContentLoaded", () => {
    const requestDishBtn = document.getElementById("request-dish-btn");
    const requestModal = document.getElementById("request-modal");
    const closeRequestBtn = document.getElementById("close-request");
    const requestForm = document.getElementById("request-form");
    
    requestDishBtn.addEventListener("click", () => {
        requestModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
    
    closeRequestBtn.addEventListener("click", () => {
        requestModal.style.display = "none";
        document.body.style.overflow = "auto";
    });
    
    requestForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Your dish request has been submitted!");
        requestModal.style.display = "none";
        document.body.style.overflow = "auto";
    });
    
    const cartIcon = document.getElementById("cart-icon");
    const cartModal = document.getElementById("cart-modal");
    const closeCartBtn = document.getElementById("close-cart");
    const backtoMenuBtn = document.getElementById("back-to-menu");
    
    cartIcon.addEventListener("click", () => {
        cartModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
    
    closeCartBtn.addEventListener("click", () => {
        cartModal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    backtoMenuBtn.addEventListener("click", () => {
        cartModal.style.display = "none";
        document.body.style.overflow = "auto";
    });
    
    window.addEventListener("click", (event) => {
        if (event.target === requestModal) {
            requestModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
        if (event.target === cartModal) {
            cartModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});