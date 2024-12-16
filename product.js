
document.addEventListener("DOMContentLoaded", () => {
    const productImage = document.getElementById("productImage");
    const colorButtons = document.querySelectorAll(".color-btn");

    // Додавання функціоналу для зміни кольору
    colorButtons.forEach(button => {
        button.addEventListener("click", () => {
            const newImage = button.getAttribute("data-image");
            productImage.src = newImage; // Оновлення зображення
        });
    });

    const addToCartButton = document.getElementById("addToCart");
    addToCartButton.addEventListener("click", () => {
        const selectedSize = document.querySelector('input[name="size"]:checked');
        if (!selectedSize) {
            alert("Будь ласка, оберіть розмір.");
            return;
        }

        const selectedColor = document.querySelector(".color-btn[data-image='" + productImage.src + "']").getAttribute("data-color");

        alert(`Ви додали до кошика: Nike Air Max\nРозмір: ${selectedSize.value}\nКолір: ${selectedColor}`);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const productImage = document.getElementById('productImage');
    const colorButtons = document.querySelectorAll('.color-btn');
    const addToCartBtn = document.getElementById('addToCart');
    const sizeOptions = document.querySelectorAll('input[name="size"]');

    // Зміна кольору
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newImage = button.dataset.image;
            productImage.src = newImage;

            colorButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Додавання до кошика
    addToCartBtn.addEventListener('click', () => {
        const selectedSize = document.querySelector('input[name="size"]:checked');
        if (!selectedSize) {
            alert('Оберіть розмір!');
            return;
        }
        alert(`Додано до кошика. Розмір: ${selectedSize.value}`);
    });
});


