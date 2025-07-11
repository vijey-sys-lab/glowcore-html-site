document.addEventListener('DOMContentLoaded', () => {
    // Define all product data with updated prices and IMAGE ARRAYS
    // Each product now also has a 'category' property
    const products = [
        {
            id: 'hair-serum',
            name: 'Advanced Hair Regrow Serum',
            images: ['images/hair serum.jpg', 'images/image_d8fe46.jpg', 'images/image_a17600.jpg'],
            price: 959,
            description: 'A potent serum formulated with Redensyl, Rosemary, and Rice Water to promote hair regrowth and strengthen follicles.',
            quantity: '30ml',
            rating: 4.4,
            ratingsBreakdown: { 1: 10, 2: 5, 3: 15, 4: 25, 5: 45 },
            category: 'hairCare'
        },
        {
            id: 'glow-clear-combo',
            name: 'Glow and Clear Combo',
            images: ['images/glow and clear combo.jpg'],
            price: 1499,
            description: 'A comprehensive skincare combo for glowing and clear skin. Includes multiple serums and essentials.',
            quantity: 'Multiple Items',
            rating: 4.4,
            ratingsBreakdown: { 1: 20, 2: 10, 3: 30, 4: 50, 5: 90 },
            items: [
                { name: '2% Salicylic Acid Face Wash', image: 'images/salicylic face wash.jpg', quantity: '50ml' },
                { name: 'SPF 50 Sunscreen', image: 'images/sunscreen spf 50.jpg', quantity: '50ml' },
                { name: 'Alpha Arbutin + Niacinamide + Salicylic Moisturizer', image: 'images/moisturizer salicylic.jpg', quantity: '50ml' },
                { name: 'Vitamin C Serum', image: 'images/vitamin c serum.jpg', quantity: '60ml' },
                { name: '10% Niacinamide Serum', image: 'images/niacinamide serum.jpg', quantity: '30ml' },
                { name: '2% Salicylic + 3% Betaine Serum', image: 'images/salicylic betaine serum.jpg', quantity: '30ml' },
                { name: '2% Kojic Acid + 1% Alpha Arbutin Serum', image: 'images/kojic alpha serum.jpg', quantity: '10ml' }
            ],
            category: 'combo'
        },
        {
            id: 'vitamin-c-serum',
            name: 'Vitamin C Serum',
            images: ['images/vitamin c serum.jpg', 'images/vitamincserum1.jpg'],
            price: 259,
            description: 'Boosts skin radiance and reduces dark spots with a powerful dose of Vitamin C.',
            quantity: '60ml',
            rating: 4.2,
            ratingsBreakdown: { 1: 5, 2: 3, 3: 10, 4: 20, 5: 35 },
            category: 'faceCareSerums'
        },
        {
            id: 'sunscreen-spf50',
            name: 'Sunscreen SPF 50',
            images: ['images/sunscreen spf 50.jpg', 'images/image_a16af5.jpg', 'images/image_a0a441.jpg'],
            price: 349,
            description: 'Broad-spectrum SPF 50 protection against UVA/UVB rays, non-greasy formula.',
            quantity: '50ml',
            rating: 4.5,
            ratingsBreakdown: { 1: 2, 2: 1, 3: 8, 4: 25, 5: 50 },
            category: 'sunscreen'
        },
        {
            id: 'niacinamide-serum',
            name: 'Niacinamide Serum',
            images: ['images/niacinamide serum.jpg'],
            price: 299,
            description: '10% Niacinamide serum to improve skin texture, minimize pores, and balance oil production.',
            quantity: '30ml',
            rating: 4.3,
            ratingsBreakdown: { 1: 3, 2: 2, 3: 12, 4: 28, 5: 40 },
            category: 'faceCareSerums'
        },
        {
            id: 'kojic-alpha-serum',
            name: 'Kojic Alpha Serum',
            images: ['images/kojic alpha serum.jpg'],
            price: 299,
            description: 'Targets hyperpigmentation and dark spots with Kojic Acid and Alpha Arbutin.',
            quantity: '10ml',
            rating: 4.0,
            ratingsBreakdown: { 1: 8, 2: 7, 3: 18, 4: 22, 5: 30 },
            category: 'faceCareSerums'
        },
        {
            id: 'moisturizer-salicylic',
            name: 'Moisturizer Salicylic',
            images: ['images/moisturizer salicylic.jpg'],
            price: 359,
            description: 'Hydrating moisturizer with salicylic acid for acne-prone skin, keeps skin clear and supple.',
            quantity: '50ml',
            rating: 4.1,
            ratingsBreakdown: { 1: 4, 2: 3, 3: 11, 4: 23, 5: 32 },
            category: 'faceBodyCare'
        },
        {
            id: 'strawberry-lip-balm',
            name: 'Strawberry Lip Balm',
            images: ['images/strawberry lip balm.jpg'],
            price: 149,
            description: 'Nourishing lip balm with a sweet strawberry scent for soft and hydrated lips.',
            quantity: 'Standard lip balm size',
            rating: 4.6,
            ratingsBreakdown: { 1: 1, 2: 1, 3: 5, 4: 20, 5: 40 },
            category: 'faceBodyCare'
        },
        {
            id: 'salicylic-face-wash',
            name: 'Salicylic Face Wash',
            images: ['images/salicylic face wash.jpg'],
            price: 199,
            description: 'Gentle yet effective face wash with 2% Salicylic Acid to cleanse and prevent breakouts.',
            quantity: '50ml',
            rating: 4.3,
            ratingsBreakdown: { 1: 3, 2: 2, 3: 9, 4: 25, 5: 38 },
            category: 'faceBodyCare'
        },
        {
            id: 'salicylic-betaine-serum',
            name: '2% Salicylic Acid + 3% Betaine Serum',
            images: ['images/salicylic betaine serum.jpg'],
            price: 199,
            description: `
                <p>A powerful serum designed to target acne and improve skin clarity:</p>
                <ul>
                    <li><strong>Reduces acne & blackheads:</strong> Salicylic Acid deeply penetrates pores to clear blockages.</li>
                    <li><strong>Gently exfoliates and unclogs pores:</strong> Promotes cell turnover for smoother skin.</li>
                    <li><strong>Hydrates and soothes with Betaine:</strong> Counteracts potential dryness, keeping skin balanced.</li>
                    <li><strong>Suitable for oily and acne-prone skin:</strong> Formulated to control excess oil and prevent future breakouts.</li>
                </ul>
            `,
            quantity: '30ml',
            rating: 4.5,
            ratingsBreakdown: { 1: 5, 2: 2, 3: 10, 4: 30, 5: 50 },
            category: 'faceCareSerums'
        },
        {
            id: 'almond-body-lotion',
            name: 'Almond Body Lotion',
            images: ['images/almond body lotion.jpg'],
            price: 349,
            description: 'Deeply moisturizing body lotion infused with almond oil for silky smooth skin.',
            quantity: '300ml',
            rating: 4.5,
            ratingsBreakdown: { 1: 1, 2: 1, 3: 7, 4: 20, 5: 45 },
            category: 'faceBodyCare'
        },
        {
            id: 'sunscreen',
            name: 'Sunscreen',
            images: ['images/sunscreen.jpg'],
            price: 299,
            description: 'Everyday sunscreen for light protection against sun damage.',
            quantity: '50ml',
            rating: 4.0,
            ratingsBreakdown: { 1: 5, 2: 4, 3: 10, 4: 18, 5: 25 },
            category: 'sunscreen'
        },
        {
            id: 'glowcore-foundation',
            name: 'Glowcore Foundation',
            images: ['images/foundationg.png'],
            price: 169,
            description: 'Lightweight foundation for a natural, glowing finish. Available in various shades.',
            quantity: '50 grams',
            rating: 4.2,
            ratingsBreakdown: { 1: 6, 2: 4, 3: 15, 4: 25, 5: 30 },
            category: 'faceBodyCare' // Assuming foundation is also face/body care
        }
    ];

    // Define product categories for filtering
    const productCategories = {
        all: { name: 'All Products', ids: products.map(p => p.id) }, // Special category for all products
        faceCareSerums: {
            name: 'Face Care Serums',
            ids: ['vitamin-c-serum', 'niacinamide-serum', 'kojic-alpha-serum', 'salicylic-betaine-serum']
        },
        hairCare: {
            name: 'Hair Care',
            ids: ['hair-serum']
        },
        combo: {
            name: 'Combos',
            ids: ['glow-clear-combo']
        },
        sunscreen: {
            name: 'Sunscreen',
            ids: ['sunscreen-spf50', 'sunscreen']
        },
        faceBodyCare: {
            name: 'Face & Body Care',
            ids: ['almond-body-lotion', 'salicylic-face-wash', 'strawberry-lip-balm', 'glowcore-foundation']
        }
    };


    // Initialize cart from localStorage or as an empty array
    let cart = JSON.parse(localStorage.getItem('glowcoreCart')) || [];
    let couponApplied = false;

    // Get references to DOM elements
    const productGrid = document.getElementById('productGrid');
    const cartBadge = document.getElementById('cartBadge');
    const cartToggle = document.getElementById('cartToggle');
    const cartPanel = document.getElementById('cartPanel');
    const closeCartPanel = document.getElementById('closeCartPanel');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartSubtotalSpan = document.getElementById('cartSubtotal');
    const cartDiscountSpan = document.getElementById('cartDiscount');
    const cartGSTSpan = document.getElementById('cartGST');
    const cartDeliveryChargeSpan = document.getElementById('cartDeliveryCharge');
    const cartTotalSpan = document.getElementById('cartTotal');
    const whatsappCheckoutBtn = document.getElementById('whatsappCheckoutBtn');
    const productAddedToast = document.getElementById('productAddedToast');
    const homeLink = document.getElementById('homeLink');
    const backToHomeFromCartBtn = document.getElementById('backToHomeFromCart');
    const productDetailModal = new bootstrap.Modal(document.getElementById('productDetailModal'));
    const modalProductName = document.getElementById('modalProductName');
    const modalProductImage = document.getElementById('modalProductImage');
    const modalProductDescription = document.getElementById('modalProductDescription');
    const modalProductQuantitySpan = document.getElementById('modalProductQuantity');
    const increaseQtyBtn = document.getElementById('increaseQty');
    const decreaseQtyBtn = document.getElementById('decreaseQty');
    const addToCartModalBtn = document.getElementById('addToCartModalBtn');
    const buyNowBtn = document.getElementById('buyNowBtn');
    const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetail');
    const productSearchInput = document.getElementById('productSearch');
    const couponCodeInput = document.getElementById('couponCodeInput');
    const applyCouponBtn = document.getElementById('applyCouponBtn');
    const couponMessage = document.getElementById('couponMessage');
    const deliveryInfoMessage = document.getElementById('deliveryInfoMessage');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const modalProductRating = document.getElementById('modalProductRating');
    const modalStarBreakdown = document.getElementById('modalStarBreakdown');
    const suggestedProductsContainer = document.getElementById('suggestedProductsContainer');
    const modalThumbnailsContainer = document.getElementById('modalThumbnailsContainer');
    const categoryFiltersContainer = document.getElementById('categoryFilters'); // New: Reference to filter buttons container

    // Get reference to the payment method radio buttons
    const paymentMethodRadios = document.querySelectorAll('input[name="paymentMethod"]');


    let currentProductInModal = null;
    let modalProductQty = 1;

    // --- Product Display Functions ---
    // Modified to accept an optional category filter
    const displayProducts = (filterCategory = 'all') => {
        productGrid.innerHTML = ''; // Clear existing products
        let productsToDisplay = [];

        if (filterCategory === 'all') {
            productsToDisplay = products;
        } else if (productCategories[filterCategory]) {
            const categoryProductIds = productCategories[filterCategory].ids;
            productsToDisplay = products.filter(p => categoryProductIds.includes(p.id));
        } else {
            // Fallback if an invalid category is passed
            productsToDisplay = products;
        }

        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('col'); // Bootstrap column
            productCard.innerHTML = `
                <div class="product-card">
                    <img src="${product.images[0]}" class="card-img-top" alt="${product.name}" data-product-id="${product.id}">
                    <div class="product-card-body">
                        <h5>${product.name}</h5>
                        <p>₹${product.price.toFixed(2)}</p>
                        ${product.id === 'glow-clear-combo' ?
                            `<button class="btn btn-sm view-items-btn" data-product-id="${product.id}">View Items</button>` : ''}
                        <button class="btn btn-primary btn-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        // Add event listeners for product image clicks to open detail modal
        document.querySelectorAll('.product-card img').forEach(img => {
            img.addEventListener('click', (event) => {
                const productId = event.target.dataset.productId;
                openProductDetailModal(productId);
            });
        });

        // Add event listeners for "Add to Cart" buttons on product cards
        document.querySelectorAll('.btn-add-to-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.productId;
                addToCart(productId);
                showProductAddedToast(); // Show toast notification
            });
        });

        // Add event listeners for "View Items" button for Glow and Clear Combo
        document.querySelectorAll('.view-items-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.productId;
                openProductDetailModal(productId); // Opens modal with combo details
            });
        });

        // Update active class on filter buttons
        document.querySelectorAll('.category-filter-btn').forEach(btn => {
            if (btn.dataset.category === filterCategory) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    // NEW: Function to render category filter buttons
    const renderCategoryFilters = () => {
        categoryFiltersContainer.innerHTML = ''; // Clear existing buttons

        // Create "All Products" button first
        const allBtn = document.createElement('button');
        allBtn.classList.add('btn', 'category-filter-btn', 'active'); // 'All' is active by default
        allBtn.textContent = 'All Products';
        allBtn.dataset.category = 'all';
        allBtn.addEventListener('click', () => {
            displayProducts('all');
            productSearchInput.value = ''; // Clear search when filtering by category
        });
        categoryFiltersContainer.appendChild(allBtn);

        // Create buttons for other categories
        for (const key in productCategories) {
            if (key === 'all') continue; // Skip the 'all' category here

            const category = productCategories[key];
            const btn = document.createElement('button');
            btn.classList.add('btn', 'category-filter-btn');
            btn.textContent = category.name;
            btn.dataset.category = key; // Store category key in data attribute
            btn.addEventListener('click', () => {
                displayProducts(key);
                productSearchInput.value = ''; // Clear search when filtering by category
            });
            categoryFiltersContainer.appendChild(btn);
        }
    };


    // --- Product Detail Modal Functions ---
    const openProductDetailModal = (productId) => {
        const product = products.find(p => p.id === productId);
        if (!product) return; // Exit if product not found

        currentProductInModal = product; // Store current product for modal actions
        modalProductQty = 1; // Reset quantity for modal

        // Populate modal content
        modalProductName.textContent = product.name;
        modalProductImage.src = product.images[0]; // Set main image to the first one in the array
        modalProductImage.alt = product.name;
        modalProductQuantitySpan.textContent = modalProductQty;

        // Clear existing thumbnails
        modalThumbnailsContainer.innerHTML = '';

        // Add all images to thumbnails and set first as active
        const allImages = product.images || []; // Ensure it's an array, even if empty

        allImages.forEach((imgSrc, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = imgSrc;
            thumbnail.alt = product.name + ' thumbnail ' + (index + 1);
            thumbnail.classList.add('img-fluid', 'thumbnail-item'); // Custom class for styling
            if (index === 0) {
                thumbnail.classList.add('active-thumbnail'); // Set initial active thumbnail
            }
            modalThumbnailsContainer.appendChild(thumbnail);

            thumbnail.addEventListener('click', () => {
                // Remove active class from all thumbnails
                modalThumbnailsContainer.querySelectorAll('.thumbnail-item').forEach(t => {
                    t.classList.remove('active-thumbnail');
                });
                // Set clicked thumbnail as active
                thumbnail.classList.add('active-thumbnail');
                // Change main modal image source
                modalProductImage.src = imgSrc;
            });
        });


        let descriptionHtml = `<p>${product.description}</p>`;
        if (product.items) { // For combo product, list included items
            descriptionHtml = '<h6>This combo includes:</h6><ul>'; // Adjusted heading for clarity
            product.items.forEach(item => {
                descriptionHtml += `<li>${item.name} (${item.quantity})</li>`;
            });
            descriptionHtml += '</ul>';
        }
        modalProductDescription.innerHTML = descriptionHtml;

        renderProductRating(product);     // Display stars and overall rating
        renderStarBreakdown(product);     // Display 1-5 star breakdown
        renderSuggestedProducts(product.id); // Display suggested products

        productDetailModal.show(); // Show the Bootstrap modal
    };

    const renderProductRating = (product) => {
        // Use specified rating or generate a random one for other products
        const rating = product.rating;
        modalProductRating.innerHTML = ''; // Clear previous content

        // Render full stars
        const fullStars = Math.floor(rating);
        for (let i = 0; i < fullStars; i++) {
            modalProductRating.innerHTML += '<i class="bi bi-star-fill"></i>';
        }
        // Render half star if applicable
        const halfStar = rating % 1 >= 0.5;
        if (halfStar) {
            modalProductRating.innerHTML += '<i class="bi bi-star-half"></i>';
        }
        // Render empty stars
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            modalProductRating.innerHTML += '<i class="bi bi-star"></i>';
        }
        modalProductRating.innerHTML += ` (${rating.toFixed(1)} out of 5)`;
    };

    const renderStarBreakdown = (product) => {
        modalStarBreakdown.innerHTML = ''; // Clear previous content
        const breakdown = product.ratingsBreakdown;
        const totalRatings = Object.values(breakdown).reduce((sum, count) => sum + count, 0);

        // Render breakdown for 5 to 1 stars
        for (let i = 5; i >= 1; i--) {
            const count = breakdown[i] || 0;
            const percentage = totalRatings > 0 ? (count / totalRatings) * 100 : 0;
            modalStarBreakdown.innerHTML += `
                <div>
                    <span>${i} star</span>
                    <div class="star-bar-container">
                        <div class="star-bar" style="width: ${percentage}%"></div>
                    </div>
                    <span>${count}</span>
                </div>
            `;
        }
    };

    const renderSuggestedProducts = (currentProductId) => {
        suggestedProductsContainer.innerHTML = ''; // Clear previous suggestions
        // Filter out the current product from the list
        const filteredProducts = products.filter(p => p.id !== currentProductId);
        // Shuffle the remaining products and select the first 5
        const shuffled = filteredProducts.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 5);

        selected.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('col-6', 'col-md-4', 'col-lg-2'); // Responsive columns for suggested products
            card.innerHTML = `
                <div class="product-card">
                    <img src="${product.images[0]}" class="card-img-top" alt="${product.name}" data-product-id="${product.id}">
                    <div class="product-card-body">
                        <h5>${product.name}</h5>
                        <p>₹${product.price.toFixed(2)}</p>
                        <button class="btn btn-primary btn-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            `;
            suggestedProductsContainer.appendChild(card);
        });

        // Re-attach listeners for "Add to Cart" buttons on suggested products
        suggestedProductsContainer.querySelectorAll('.btn-add-to-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.productId;
                addToCart(productId);
                showProductAddedToast();
            });
        });

        // Re-attach listeners for suggested product images to open their detail modals
        suggestedProductsContainer.querySelectorAll('.product-card img').forEach(img => {
            img.addEventListener('click', (event) => {
                const productId = event.target.dataset.productId;
                openProductDetailModal(productId); // Re-open modal with new product details
            });
        });
    };

    // Event listeners for quantity control in product detail modal
    increaseQtyBtn.addEventListener('click', () => {
        modalProductQty++;
        modalProductQuantitySpan.textContent = modalProductQty;
    });

    decreaseQtyBtn.addEventListener('click', () => {
        if (modalProductQty > 1) {
            modalProductQty--;
            modalProductQuantitySpan.textContent = modalProductQty;
        }
    });

    // Add to Cart from modal
    addToCartModalBtn.addEventListener('click', () => {
        if (currentProductInModal) {
            addToCart(currentProductInModal.id, modalProductQty);
            showProductAddedToast();
            productDetailModal.hide(); // Hide modal after adding to cart
        }
    });

    // Buy Now from modal (adds to cart and opens cart panel)
    buyNowBtn.addEventListener('click', () => {
        if (currentProductInModal) {
            addToCart(currentProductInModal.id, modalProductQty);
            showProductAddedToast();
            productDetailModal.hide(); // Hide modal
            cartPanel.classList.add('show'); // Open cart panel directly
            document.body.classList.add('cart-open'); // Add class to body to prevent shift
            // Optional: Adjust search bar if it's visually pushed
            const searchBarElement = document.querySelector('.search-bar');
            if (searchBarElement) {
                searchBarElement.classList.add('cart-open');
            }
            updateCartUI(); // Ensure cart UI is updated
        }
    });

    // "Back to Home" button in product detail modal
    backToHomeFromDetailBtn.addEventListener('click', () => {
        productDetailModal.hide();
        // No explicit refresh needed, as home page content is already displayed
    });

    // --- Cart Functions ---
    const updateCartBadge = () => {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'inline-block' : 'none'; // Hide badge if cart is empty
    };

    const addToCart = (productId, quantity = 1) => {
        const product = products.find(p => p.id === productId);
        if (product) {
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += quantity; // Increase quantity if item already in cart
            } else {
                // Use the product's main image for the cart item thumbnail
                cart.push({ ...product, image: product.images[0], quantity: quantity });
            }
            localStorage.setItem('glowcoreCart', JSON.stringify(cart)); // Save cart to local storage
            updateCartBadge(); // Update cart icon badge
            updateCartUI();    // Update cart panel UI
        }
    };

    const updateCartItemQuantity = (productId, change) => {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                removeFromCart(productId); // Remove if quantity drops to 0 or less
            } else {
                localStorage.setItem('glowcoreCart', JSON.stringify(cart));
                updateCartBadge();
                updateCartUI();
            }
        }
    };

    const removeFromCart = (productId) => {
        cart = cart.filter(item => item.id !== productId); // Filter out the item to remove
        localStorage.setItem('glowcoreCart', JSON.stringify(cart));
        updateCartBadge();
        updateCartUI();
    };

    const calculateCartTotals = () => {
        let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        let currentDiscount = 0;

        if (couponApplied) {
            currentDiscount = subtotal * 0.095; // 9.5% discount
            subtotal -= currentDiscount; // Apply discount to subtotal
        }

        const gst = subtotal * 0.05; // 5% GST
        let deliveryCharge = 0;
        if (subtotal < 499) { // Delivery charge if total after discount is less than 499
            deliveryCharge = 50;
        }

        const total = subtotal + gst + deliveryCharge;

        return { subtotal, currentDiscount, gst, deliveryCharge, total };
    };

    const updateCartUI = () => {
        cartItemsContainer.innerHTML = ''; // Clear current cart items display
        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block'; // Show empty cart message
        } else {
            emptyCartMessage.style.display = 'none'; // Hide empty cart message
            cart.forEach(item => {
                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cart-item');
                cartItemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h6>${item.name}</h6>
                        <p>₹${item.price.toFixed(2)} x ${item.quantity}</p>
                    </div>
                    <div class="cart-item-actions">
                        <button class="btn decrease-qty" data-product-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="btn increase-qty" data-product-id="${item.id}">+</button>
                        <button class="btn remove-item-btn" data-product-id="${item.id}"><i class="bi bi-trash"></i></button>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItemDiv);
            });
        }

        const totals = calculateCartTotals(); // Recalculate totals
        cartSubtotalSpan.textContent = totals.subtotal.toFixed(2);
        cartDiscountSpan.textContent = totals.currentDiscount.toFixed(2);
        cartGSTSpan.textContent = totals.gst.toFixed(2);
        cartDeliveryChargeSpan.textContent = totals.deliveryCharge.toFixed(2);
        cartTotalSpan.textContent = totals.total.toFixed(2);

        // Update delivery message based on subtotal
        if (totals.subtotal < 499 && totals.deliveryCharge > 0) {
            deliveryInfoMessage.style.display = 'block';
            deliveryInfoMessage.textContent = `Add worth ₹${(499 - totals.subtotal).toFixed(2)} for free delivery`;
            deliveryInfoMessage.style.color = '#007bff'; // Blue color
        } else if (totals.deliveryCharge === 0 && totals.subtotal >= 499) {
            deliveryInfoMessage.style.display = 'block';
            deliveryInfoMessage.textContent = 'You qualify for FREE delivery!';
            deliveryInfoMessage.style.color = 'green'; // Green for free delivery
        } else {
             deliveryInfoMessage.style.display = 'none'; // Hide if cart is empty or conditions don't apply
        }

        // Add event listeners for cart item quantity change and remove buttons
        // IMPORTANT: Use event.currentTarget to reliably get the button's dataset
        document.querySelectorAll('.cart-item-actions .increase-qty').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.currentTarget.dataset.productId; // Use currentTarget
                updateCartItemQuantity(productId, 1);
            });
        });
        document.querySelectorAll('.cart-item-actions .decrease-qty').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.currentTarget.dataset.productId; // Use currentTarget
                updateCartItemQuantity(productId, -1);
            });
        });
        document.querySelectorAll('.cart-item-actions .remove-item-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.currentTarget.dataset.productId; // Use currentTarget
                removeFromCart(productId);
            });
        });
    };

    // --- Event Listeners for UI Interactions ---
    // Toggle cart panel visibility
    cartToggle.addEventListener('click', () => {
        cartPanel.classList.add('show');
        document.body.classList.add('cart-open'); // Add class to body to prevent shift
        // Optional: Adjust search bar if it's visually pushed (ensure .search-bar exists in your HTML)
        const searchBarElement = document.querySelector('.search-bar');
        if (searchBarElement) {
            searchBarElement.classList.add('cart-open');
        }
        updateCartUI(); // Ensure cart UI is up-to-date when opened
    });

    // Close cart panel
    closeCartPanel.addEventListener('click', () => {
        cartPanel.classList.remove('show');
        document.body.classList.remove('cart-open'); // Remove class from body
        // Optional: Adjust search bar back
        const searchBarElement = document.querySelector('.search-bar');
        if (searchBarElement) {
            searchBarElement.classList.remove('cart-open');
        }
    });

    // "Back to Home" from Navbar Brand click
    homeLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior (page reload)
        cartPanel.classList.remove('show'); // Hide cart if open
        document.body.classList.remove('cart-open'); // Remove class from body
        // Optional: Adjust search bar back
        const searchBarElement = document.querySelector('.search-bar');
        if (searchBarElement) {
            searchBarElement.classList.remove('cart-open');
        }
        productDetailModal.hide(); // Hide modal if open
        displayProducts('all'); // Re-display all products on home
        renderCategoryFilters(); // Re-render filters to ensure 'All Products' is active
        productSearchInput.value = ''; // Clear search bar
    });

    // "Back to Home" from inside cart panel
    backToHomeFromCartBtn.addEventListener('click', () => {
        cartPanel.classList.remove('show');
        document.body.classList.remove('cart-open'); // Remove class from body
        // Optional: Adjust search bar back
        const searchBarElement = document.querySelector('.search-bar');
        if (searchBarElement) {
            searchBarElement.classList.remove('cart-open');
        }
    });

    // --- Product Search Functionality ---
    productSearchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        // Filter based on currently displayed products (which might already be filtered by category)
        const currentProducts = products.filter(p => {
            const activeCategoryBtn = document.querySelector('.category-filter-btn.active');
            const activeCategory = activeCategoryBtn ? activeCategoryBtn.dataset.category : 'all';
            if (activeCategory === 'all') return true;
            return p.category === activeCategory;
        });

        const filteredBySearch = currentProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            (product.items && product.items.some(item => item.name.toLowerCase().includes(searchTerm))) // Search within combo items
        );
        // Temporarily clear active category button when searching
        document.querySelectorAll('.category-filter-btn').forEach(btn => btn.classList.remove('active'));

        // Display search results directly
        productGrid.innerHTML = '';
        filteredBySearch.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('col');
            productCard.innerHTML = `
                <div class="product-card">
                    <img src="${product.images[0]}" class="card-img-top" alt="${product.name}" data-product-id="${product.id}">
                    <div class="product-card-body">
                        <h5>${product.name}</h5>
                        <p>₹${product.price.toFixed(2)}</p>
                        ${product.id === 'glow-clear-combo' ?
                            `<button class="btn btn-sm view-items-btn" data-product-id="${product.id}">View Items</button>` : ''}
                        <button class="btn btn-primary btn-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        // Re-attach listeners for dynamically added products
        document.querySelectorAll('.product-card img').forEach(img => {
            img.addEventListener('click', (event) => {
                const productId = event.target.dataset.productId;
                openProductDetailModal(productId);
            });
        });
        document.querySelectorAll('.btn-add-to-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.productId;
                addToCart(productId);
                showProductAddedToast();
            });
        });
        document.querySelectorAll('.view-items-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.productId;
                openProductDetailModal(productId);
            });
        });

        // If search term is empty, re-display all products and activate 'All Products' filter
        if (searchTerm === '') {
            displayProducts('all');
        }
    });


    // --- Coupon Code Logic ---
    applyCouponBtn.addEventListener('click', () => {
        const couponCode = couponCodeInput.value.trim().toUpperCase();
        // Updated valid coupons
        const validCoupons = ['VJYGC10', 'WELCOME10', 'FESTIV10', 'SAI10', 'VICHU10'];

        if (validCoupons.includes(couponCode)) {
            couponApplied = true;
            couponMessage.textContent = 'Coupon applied successfully!';
            couponMessage.style.color = 'green';
        } else {
            couponApplied = false;
            couponMessage.textContent = 'Invalid coupon code.';
            couponMessage.style.color = 'red';
        }
        updateCartUI(); // Recalculate totals with/without discount
    });

    // --- WhatsApp Checkout ---
    whatsappCheckoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items before checking out.');
            return;
        }

        const totals = calculateCartTotals();
        let whatsappMessage = `Hello Glowcore! I'd like to place an order:%0A%0A*Order Details:*%0A`;

        cart.forEach((item, index) => {
            whatsappMessage += `${index + 1}. ${item.name} (Qty: ${item.quantity}) - ₹${(item.price * item.quantity).toFixed(2)}%0A`;
        });

        whatsappMessage += `%0A*Summary:*%0A`;
        whatsappMessage += `Subtotal (before discount): ₹${(totals.subtotal + totals.currentDiscount).toFixed(2)}%0A`; // Show subtotal before discount
        if (couponApplied && totals.currentDiscount > 0) { // Only show discount if applied and greater than 0
            whatsappMessage += `Discount: -₹${totals.currentDiscount.toFixed(2)}%0A`; // Show amount, not percentage
        }
        whatsappMessage += `GST (5%): ₹${totals.gst.toFixed(2)}%0A`;
        whatsappMessage += `Delivery Charge: ₹${totals.deliveryCharge.toFixed(2)}%0A`;
        whatsappMessage += `*Total Amount: ₹${totals.total.toFixed(2)}*%0A%0A`;

        // Get selected payment method
        let selectedPaymentMethod = 'Not specified'; // Default value
        for (const radio of paymentMethodRadios) {
            if (radio.checked) {
                selectedPaymentMethod = radio.value;
                break;
            }
        }
        whatsappMessage += `*Preferred Payment Method:* ${selectedPaymentMethod}%0A%0A`; // Add payment method to message

        whatsappMessage += `I would like to know info about glow core`; // Custom message as requested

        // Your WhatsApp number
        const whatsappNumber = '9150059199';

        window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    });


    // --- Product Added Toast Animation ---
    const showProductAddedToast = () => {
        const toast = new bootstrap.Toast(productAddedToast);
        toast.show();
    };

    // --- Initial Page Load ---
    updateCartBadge(); // Update cart badge on page load
    renderCategoryFilters(); // Render category filter buttons
    displayProducts('all'); // Display all products initially
});