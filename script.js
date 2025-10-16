// Product Data
const products = [
    {
        id: 1,
        name: "Classic White Shirt",
        price: 59.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
        description: "A timeless classic white shirt perfect for any occasion.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["white"],
        featured: true
    },
    {
        id: 2,
        name: "Slim Fit Jeans",
        price: 89.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        description: "Modern slim fit jeans with a comfortable stretch.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["blue"],
        featured: true
    },
    {
        id: 3,
        name: "Leather Jacket",
        price: 199.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
        description: "Premium leather jacket with a modern cut.",
        sizes: ["M", "L", "XL"],
        colors: ["black", "brown"],
        featured: true
    },
    {
        id: 4,
        name: "Summer Dress",
        price: 79.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2030&q=80",
        description: "Light and elegant summer dress for warm days.",
        sizes: ["XS", "S", "M", "L"],
        colors: ["white", "blue"],
        featured: true
    },
    {
        id: 5,
        name: "Casual T-Shirt",
        price: 29.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        description: "Comfortable cotton t-shirt for everyday wear.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "white", "gray", "blue"],
        featured: false
    },
    {
        id: 6,
        name: "Elegant Blouse",
        price: 69.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1604575396136-77888f9b4c52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        description: "Elegant silk blouse perfect for office or evening wear.",
        sizes: ["XS", "S", "M", "L"],
        colors: ["white", "black", "red"],
        featured: false
    },
    {
        id: 7,
        name: "Wool Coat",
        price: 249.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1520012218364-3dbe62c99bee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        description: "Warm wool coat for cold winter days.",
        sizes: ["S", "M", "L"],
        colors: ["black", "gray", "camel"],
        featured: false
    },
    {
        id: 8,
        name: "Designer Watch",
        price: 199.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80",
        description: "Elegant designer watch with leather strap.",
        sizes: ["One Size"],
        colors: ["black", "brown"],
        featured: false
    },
    {
        id: 9,
        name: "Leather Handbag",
        price: 159.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
        description: "Premium leather handbag with multiple compartments.",
        sizes: ["One Size"],
        colors: ["black", "brown", "tan"],
        featured: false
    },
    {
        id: 10,
        name: "Formal Suit",
        price: 299.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1971&q=80",
        description: "Classic formal suit for special occasions.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "navy", "gray"],
        featured: false
    },
    {
        id: 11,
        name: "Evening Gown",
        price: 349.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1938&q=80",
        description: "Stunning evening gown for special events.",
        sizes: ["XS", "S", "M", "L"],
        colors: ["black", "red", "blue"],
        featured: false
    },
    {
        id: 12,
        name: "Silk Scarf",
        price: 49.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        description: "Luxurious silk scarf with elegant patterns.",
        sizes: ["One Size"],
        colors: ["multicolor"],
        featured: false
    }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Initialize Cart from localStorage
    initializeCart();
    
    // Shop Page Functionality
    if (window.location.pathname.includes('shop.html')) {
        loadProducts();
        setupFilters();
        setupSorting();
        setupPagination();
    }
    
    // Cart Page Functionality
    if (window.location.pathname.includes('cart.html')) {
        displayCartItems();
        setupCartFunctionality();
    }
    
    // Checkout Page Functionality
    if (window.location.pathname.includes('checkout.html')) {
        setupCheckoutProcess();
        displayOrderSummary();
    }
    
    // Add to Cart Functionality (on all pages)
    setupAddToCartButtons();
    
    // Update Cart Count (on all pages)
    updateCartCount();
});

// Cart Functionality
let cart = [];

function initializeCart() {
    const savedCart = localStorage.getItem('eleganceCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function saveCart() {
    localStorage.setItem('eleganceCart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    
    cartCountElements.forEach(element => {
        element.textContent = itemCount;
    });
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === parseInt(productId));
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === parseInt(productId));
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    saveCart();
    
    // Show confirmation message
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== parseInt(productId));
    saveCart();
    
    if (window.location.pathname.includes('cart.html')) {
        displayCartItems();
        updateCartSummary();
    }
}

function updateCartItemQuantity(productId, quantity) {
    const item = cart.find(item => item.id === parseInt(productId));
    
    if (item) {
        item.quantity = parseInt(quantity);
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            if (window.location.pathname.includes('cart.html')) {
                updateCartSummary();
            }
        }
    }
}

function setupAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            addToCart(productId);
        });
    });
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Shop Page Functionality
function loadProducts(filters = {}) {
    const productsContainer = document.querySelector('.products');
    
    if (!productsContainer) return;
    
    // Filter products based on criteria
    let filteredProducts = [...products];
    
    // Apply category filter
    if (filters.categories && filters.categories.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            filters.categories.includes(product.category)
        );
    }
    
    // Apply price filter
    if (filters.maxPrice) {
        filteredProducts = filteredProducts.filter(product => 
            product.price <= filters.maxPrice
        );
    }
    
    // Apply color filter
    if (filters.colors && filters.colors.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            product.colors.some(color => filters.colors.includes(color))
        );
    }
    
    // Apply size filter
    if (filters.sizes && filters.sizes.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            product.sizes.some(size => filters.sizes.includes(size))
        );
    }
    
    // Apply sorting
    if (filters.sort) {
        switch (filters.sort) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                // For demo purposes, we'll just reverse the array
                filteredProducts.reverse();
                break;
            default:
                // 'featured' is default, no sorting needed
                break;
        }
    }
    
    // Update product count
    const productCountElement = document.getElementById('product-count');
    if (productCountElement) {
        productCountElement.textContent = filteredProducts.length;
    }
    
    // Clear products container
    productsContainer.innerHTML = '';
    
    // Display products
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = '<div class="no-products">No products found matching your criteria.</div>';
    } else {
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-actions">
                        <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-shopping-bag"></i></button>
                        <button class="quick-view" data-id="${product.id}"><i class="fas fa-eye"></i></button>
                    </div>
                </div>
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
            `;
            productsContainer.appendChild(productCard);
        });
        
        // Re-attach event listeners
        setupAddToCartButtons();
    }
}

function setupFilters() {
    const categoryFilters = document.querySelectorAll('.category-filter');
    const priceSlider = document.getElementById('price-slider');
    const priceValue = document.getElementById('price-value');
    const colorOptions = document.querySelectorAll('.color-option');
    const sizeOptions = document.querySelectorAll('.size-option');
    const resetButton = document.querySelector('.filter-reset');
    
    if (!categoryFilters.length && !priceSlider && !colorOptions.length && !sizeOptions.length) return;
    
    // Current filter state
    const filters = {
        categories: [],
        maxPrice: 500,
        colors: [],
        sizes: []
    };
    
    // Category filters
    categoryFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            if (this.checked) {
                filters.categories.push(this.value);
            } else {
                filters.categories = filters.categories.filter(cat => cat !== this.value);
            }
            loadProducts(filters);
        });
    });
    
    // Price filter
    if (priceSlider && priceValue) {
        priceSlider.addEventListener('input', function() {
            const value = this.value;
            priceValue.textContent = `$${value}`;
            filters.maxPrice = parseInt(value);
            loadProducts(filters);
        });
    }
    
    // Color filters
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            this.classList.toggle('active');
            
            if (this.classList.contains('active')) {
                filters.colors.push(color);
            } else {
                filters.colors = filters.colors.filter(c => c !== color);
            }
            
            loadProducts(filters);
        });
    });
    
    // Size filters
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            const size = this.getAttribute('data-size');
            this.classList.toggle('active');
            
            if (this.classList.contains('active')) {
                filters.sizes.push(size);
            } else {
                filters.sizes = filters.sizes.filter(s => s !== size);
            }
            
            loadProducts(filters);
        });
    });
    
    // Reset filters
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            // Reset category filters
            categoryFilters.forEach(filter => {
                filter.checked = false;
            });
            
            // Reset price filter
            if (priceSlider && priceValue) {
                priceSlider.value = 500;
                priceValue.textContent = '$500';
            }
            
            // Reset color filters
            colorOptions.forEach(option => {
                option.classList.remove('active');
            });
            
            // Reset size filters
            sizeOptions.forEach(option => {
                option.classList.remove('active');
            });
            
            // Reset filter state
            filters.categories = [];
            filters.maxPrice = 500;
            filters.colors = [];
            filters.sizes = [];
            
            // Reload products
            loadProducts(filters);
        });
    }
}

function setupSorting() {
    const sortSelect = document.getElementById('sort-select');
    
    if (!sortSelect) return;
    
    sortSelect.addEventListener('change', function() {
        const filters = {
            sort: this.value
        };
        
        loadProducts(filters);
    });
}

function setupPagination() {
    const pageNumbers = document.querySelectorAll('.page-number');
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    
    if (!pageNumbers.length && !paginationButtons.length) return;
    
    // For demo purposes, we'll just toggle active class
    pageNumbers.forEach(button => {
        button.addEventListener('click', function() {
            pageNumbers.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            const direction = this.getAttribute('data-page');
            const activePage = document.querySelector('.page-number.active');
            
            if (direction === 'prev' && activePage.previousElementSibling) {
                activePage.classList.remove('active');
                activePage.previousElementSibling.classList.add('active');
            } else if (direction === 'next' && activePage.nextElementSibling) {
                activePage.classList.remove('active');
                activePage.nextElementSibling.classList.add('active');
            }
        });
    });
}

// Cart Page Functionality
function displayCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <i class="fas fa-shopping-bag"></i>
                <p>Your cart is empty</p>
                <a href="shop.html" class="btn">Continue Shopping</a>
            </div>
        `;
        
        // Disable checkout button
        const checkoutBtn = document.querySelector('.checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.disabled = true;
        }
    } else {
        cartItemsContainer.innerHTML = '';
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Unit Price: $${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                    <a href="#" class="cart-item-remove" data-id="${item.id}">Remove</a>
                </div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
            `;
            
            cartItemsContainer.appendChild(cartItem);
        });
        
        // Enable checkout button
        const checkoutBtn = document.querySelector('.checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.disabled = false;
        }
    }
    
    updateCartSummary();
}

function updateCartSummary() {
    const subtotalElement = document.querySelector('.subtotal');
    const shippingElement = document.querySelector('.shipping');
    const taxElement = document.querySelector('.tax');
    const totalElement = document.querySelector('.total-price');
    
    if (!subtotalElement || !shippingElement || !taxElement || !totalElement) return;
    
    // Calculate subtotal
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    // Calculate shipping (free over $100, otherwise $10)
    const shipping = subtotal > 100 ? 0 : 10;
    
    // Calculate tax (8%)
    const tax = subtotal * 0.08;
    
    // Calculate total
    const total = subtotal + shipping + tax;
    
    // Update elements
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    shippingElement.textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    taxElement.textContent = `$${tax.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

function setupCartFunctionality() {
    const cartItemsContainer = document.querySelector('.cart-items');
    
    if (!cartItemsContainer) return;
    
    // Event delegation for cart item interactions
    cartItemsContainer.addEventListener('click', function(e) {
        // Remove item
        if (e.target.classList.contains('cart-item-remove')) {
            e.preventDefault();
            const productId = e.target.getAttribute('data-id');
            removeFromCart(productId);
        }
        
        // Decrease quantity
        if (e.target.classList.contains('decrease')) {
            const productId = e.target.getAttribute('data-id');
            const item = cart.find(item => item.id === parseInt(productId));
            
            if (item && item.quantity > 1) {
                updateCartItemQuantity(productId, item.quantity - 1);
                const quantityInput = e.target.nextElementSibling;
                quantityInput.value = item.quantity - 1;
            }
        }
        
        // Increase quantity
        if (e.target.classList.contains('increase')) {
            const productId = e.target.getAttribute('data-id');
            const item = cart.find(item => item.id === parseInt(productId));
            
            if (item) {
                updateCartItemQuantity(productId, item.quantity + 1);
                const quantityInput = e.target.previousElementSibling;
                quantityInput.value = item.quantity + 1;
            }
        }
    });
    
    // Quantity input change
    cartItemsContainer.addEventListener('change', function(e) {
        if (e.target.classList.contains('quantity-input')) {
            const productId = e.target.getAttribute('data-id');
            const quantity = parseInt(e.target.value);
            
            if (quantity > 0) {
                updateCartItemQuantity(productId, quantity);
            } else {
                e.target.value = 1;
                updateCartItemQuantity(productId, 1);
            }
        }
    });
    
    // Checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (!this.disabled) {
                window.location.href = 'checkout.html';
            }
        });
    }
}

// Checkout Page Functionality
function setupCheckoutProcess() {
    const nextButtons = document.querySelectorAll('.next-step');
    const prevButtons = document.querySelectorAll('.prev-step');
    const steps = document.querySelectorAll('.step');
    const formSections = document.querySelectorAll('.form-section');
    
    if (!nextButtons.length || !prevButtons.length || !steps.length || !formSections.length) return;
    
    // Next step buttons
    nextButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // In a real application, you would validate the form here
            
            // Hide current form section
            formSections[index].classList.remove('active');
            
            // Show next form section
            formSections[index + 1].classList.add('active');
            
            // Update steps
            steps[index].classList.remove('active');
            steps[index + 1].classList.add('active');
            
            // If this is the last step (confirmation), generate order number and email
            if (index === 1) {
                const orderNumber = 'ELG-' + Math.floor(10000 + Math.random() * 90000);
                const email = document.getElementById('email').value || 'your email address';
                
                document.querySelector('.order-number').textContent = orderNumber;
                document.querySelector('.order-email').textContent = email;
                
                // Clear cart after successful order
                cart = [];
                saveCart();
            }
        });
    });
    
    // Previous step buttons
    prevButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Hide current form section
            formSections[index + 1].classList.remove('active');
            
            // Show previous form section
            formSections[index].classList.add('active');
            
            // Update steps
            steps[index + 1].classList.remove('active');
            steps[index].classList.add('active');
        });
    });
    
    // Payment method toggle
    const paymentOptions = document.querySelectorAll('.payment-option');
    
    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            paymentOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            const paymentMethod = this.querySelector('input').value;
            const creditCardForm = document.querySelector('.credit-card-form');
            
            if (paymentMethod === 'credit-card') {
                creditCardForm.style.display = 'block';
            } else {
                creditCardForm.style.display = 'none';
            }
        });
    });
}

function displayOrderSummary() {
    const orderItemsContainer = document.querySelector('.order-items');
    
    if (!orderItemsContainer) return;
    
    if (cart.length === 0) {
        orderItemsContainer.innerHTML = '<p>No items in cart.</p>';
    } else {
        orderItemsContainer.innerHTML = '';
        
        cart.forEach(item => {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="order-item-image">
                <div class="order-item-details">
                    <h3>${item.name}</h3>
                    <p>Qty: ${item.quantity}</p>
                </div>
                <div class="order-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
            `;
            
            orderItemsContainer.appendChild(orderItem);
        });
    }
    
    // Update summary
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 10;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    const subtotalElement = document.querySelector('.subtotal');
    const shippingElement = document.querySelector('.shipping');
    const taxElement = document.querySelector('.tax');
    const totalElement = document.querySelector('.total-price');
    
    if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingElement) shippingElement.textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    if (taxElement) taxElement.textContent = `$${tax.toFixed(2)}`;
    if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`;
}

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--accent-color);
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        transform: translateX(150%);
        transition: transform 0.3s ease;
        z-index: 1000;
    }
    
    .notification.show {
        transform: translateX(0);
    }
`;
document.head.appendChild(style);