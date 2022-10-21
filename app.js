$(".slider").slick( {
    dots: true,
});

$(".slider1").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
});

// при нажатии на кнопку buy - цифра у корзины будет увеличиваться

let productsCount = document.getElementById("products-count") // getElementById потому что элемент один
console.log(productsCount)

let addToCartButtons = document.querySelectorAll(".buy-button") // querySelectorAll потому что элементов много
console.log(addToCartButtons);

addToCartButtons.forEach((item) => {
    item.addEventListener("click", function () {
        productsCount.textContent = +productsCount.textContent + 1;
    });
})

AOS.init();