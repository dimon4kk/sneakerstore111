
document.addEventListener('DOMContentLoaded', () => {
    const productImages = {
        black: ["images/black_1.jpg", "images/black_2.jpg", "images/black_3.jpg"],
        white: ["images/white_1.jpg", "images/white_2.jpg", "images/white_3.jpg"],
        red: ["images/blue_1.jpg", "images/blue_2.jpg", "images/blue_3.jpg"]
    };

    let currentColor = "black";
    let currentIndex = 0;

    const mainImage = document.getElementById('mainImage');
    const prevButton = document.getElementById('prevImage');
    const nextButton = document.getElementById('nextImage');
    const colorButtons = document.querySelectorAll('.color-btn');

    const updateImage = () => {
        mainImage.classList.add('fade'); // Додаємо клас fade для плавної анімації
        setTimeout(() => {
            mainImage.src = productImages[currentColor][currentIndex];
            mainImage.classList.remove('fade'); // Видаляємо клас після оновлення
        }, 400); // Затримка для плавної зміни
    };

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentColor = button.dataset.color;
            currentIndex = 0;
            updateImage();
            colorButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + productImages[currentColor].length) % productImages[currentColor].length;
        updateImage();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % productImages[currentColor].length;
        updateImage();
    });

    updateImage();
});




document.addEventListener('DOMContentLoaded', () => {
    const colorButtons = document.querySelectorAll('.color-btn');
    const mainImage = document.getElementById('mainImage');

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Видаляємо клас "active" з усіх кнопок
            colorButtons.forEach(btn => btn.classList.remove('active'));
            // Додаємо клас "active" до натиснутої кнопки
            button.classList.add('active');
            // Змінюємо зображення відповідно до вибраного кольору
            const newImage = button.getAttribute('data-image');
            mainImage.setAttribute('src', newImage);
        });
    });
});
