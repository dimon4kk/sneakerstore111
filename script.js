// Дані про кросівки
const products = [
    { id: 1, name: "Nike Air Max", brand: "Nike", price: 120, image: "sneaker1.jpg", link: "product1.html" },
    { id: 2, name: "Adidas Ultraboost", brand: "Adidas", price: 150, image: "sneaker2.jpg", link: "product2.html" },
    { id: 3, name: "Puma RS-X", brand: "Puma", price: 100, image: "sneaker3.jpg", link: "product3.html" },
    { id: 4, name: "New Balance 574", brand: "New Balance", price: 110, image: "sneaker4.jpg", link: "product4.html" },
    { id: 5, name: "Reebok Classic", brand: "Reebok", price: 90, image: "sneaker5.jpg", link: "product5.html" },
    { id: 6, name: "Salomon Quest 4 Gtx MID FUR", brand: "Salamon", price: 80, image: "sneaker6.jpg", link: "product6.html" },
    { id: 7, name: "Nike air jordan 4 retro", brand: "Nike", price: 130, image: "sneaker7.jpg", link: "product7.html" },
    { id: 8, name: "Adidas Campus 00s x KORN Black", brand: "Adidas", price: 140, image: "sneaker8.jpg", link: "product8.html" },
    { id: 9, name: "Asics Gel Kahana 8 ❄️", brand: "Asics", price: 80, image: "sneaker9.jpg", link: "product9.html" }
]; 

// Відображення продуктів на головній сторінці
function displayProducts(filterBrand = "all") {
    const productGrid = document.getElementById("productGrid");
    productGrid.innerHTML = "";

    const filteredProducts = filterBrand === "all" ? products : products.filter(product => product.brand === filterBrand);

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `<p>На жаль, немає продуктів цього бренду.</p>`;
        return;
    }

    filteredProducts.forEach(product => {
        productGrid.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Бренд: ${product.brand}</p>
                <p>Ціна: $${product.price}</p>
                <a href="${product.link}">Детальніше</a>
            </div>
        `;
    });
}

// Функція для оновлення продуктів при зміні фільтра
function setupFilter() {
    const filterElement = document.getElementById("brandFilter");
    filterElement.addEventListener("change", (event) => {
        displayProducts(event.target.value);
    });
}

// Запуск функцій
window.onload = () => {
    displayProducts();
    setupFilter();
};



document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".product-card");
    const links = document.querySelectorAll(".product-card a");

    // Ефект для карток
    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
            card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });
    });

    // Ефект для посилань (кнопок)
    links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "#fff";
            link.style.backgroundColor = "#0056b3";
            link.style.transition = "background-color 0.3s ease, color 0.3s ease";
            link.style.padding = "8px 12px";
            link.style.borderRadius = "4px";
        });

        link.addEventListener("mouseleave", () => {
            link.style.color = "";
            link.style.backgroundColor = "";
        });
    });
});







function displayProducts(filterBrand = "all") {
    const productGrid = document.getElementById("productGrid");
    productGrid.innerHTML = "";

    const filteredProducts = filterBrand === "all" ? products : products.filter(product => product.brand === filterBrand);

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `<p>На жаль, немає продуктів цього бренду.</p>`;
        return;
    }

    filteredProducts.forEach((product, index) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.style.animationDelay = `${index * 0.1}s`; // Затримка для кожної картки
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Бренд: ${product.brand}</p>
            <p>Ціна: $${product.price}</p>
            <a href="${product.link}">Детальніше</a>
        `;
        productGrid.appendChild(productCard);
    });
}

// Запуск пошуку із плавною появою
function searchProducts(query) {
    const lowerCaseQuery = query.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(lowerCaseQuery)
    );
    displayProducts();

    const productGrid = document.getElementById("productGrid");
    productGrid.innerHTML = "";

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `<p>На жаль, результатів не знайдено.</p>`;
    } else {
        filteredProducts.forEach((product, index) => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.style.animationDelay = `${index * 0.1}s`; // Додаємо затримку
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Бренд: ${product.brand}</p>
                <p>Ціна: $${product.price}</p>
                <a href="${product.link}">Детальніше</a>
            `;
            productGrid.appendChild(productCard);
        });
    }
}





function searchProducts(query) {
    const lowerCaseQuery = query.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(lowerCaseQuery)
    );
    displayProducts();
    const productGrid = document.getElementById("productGrid");
    productGrid.innerHTML = "";

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `<p>На жаль, результатів не знайдено.</p>`;
    } else {
        filteredProducts.forEach(product => {
            productGrid.innerHTML += `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Бренд: ${product.brand}</p>
                    <p>Ціна: $${product.price}</p>
                    <a href="${product.link}">Детальніше</a>
                </div>
            `;
        });
    }
}

// Додай поле пошуку
document.addEventListener("DOMContentLoaded", () => {
    const filterSection = document.getElementById("filter");
    const searchBox = `
        <input type="text" id="searchInput" placeholder="Пошук за назвою...">
    `;
    filterSection.innerHTML += searchBox;

    document.getElementById("searchInput").addEventListener("input", (event) => {
        searchProducts(event.target.value);
    });
});


