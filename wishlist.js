function salam() {
    const arr = JSON.parse(localStorage.getItem("basketArr")) || [];
    console.log("Basket Items:", arr);
}

function sagol() {
    const arr = JSON.parse(localStorage.getItem("wishlistArr")) || [];
    console.log("Wishlist Items:", arr);
}