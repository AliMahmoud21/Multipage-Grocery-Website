
    // Declaring the variables that will be used
    const searchBtn = document.querySelector('.search-btn');
    const searchForm = document.querySelector('.search-form');
    const shoppingCartBtn = document.querySelector('.cart');
    const shoppingCart = document.querySelector('.shopping-cart');
    const userBtn = document.querySelector('.user');
    const loginForm = document.querySelector('.login-form');
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.menu-btn');
    const slides = document.querySelectorAll('.hero .slides-container .slide');


    // Showing the search field
    searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    });

    // Showing the shopping cart section
    shoppingCartBtn.addEventListener('click', () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    });

    // Showing the shopping cart section
    userBtn.addEventListener('click', () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
    });

    // Display the menu in responsive section
    menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    });


    let index = 0;

    function next() {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }

    function prev() {
        slides[index].classList.remove('active');
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('active');
    }