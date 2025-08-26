// Product data from JSON
const appData = {
  "company": {
    "name": "Oasis Trends",
    "tagline": "Custom Leather Goods Manufacturer",
    "description": "We specialize in creating premium handmade leather products with exceptional craftsmanship. Our products are designed to last and reflect your unique style.",
    "stats": {
      "experience": "12+",
      "monthlyProduction": "5000+",
      "countries": "25+",
      "realLeather": "100"
    },
    "contact": {
      "address": "585/4 C, BLOCK, NAI CHUNGI JAJMAU, KANPUR, UTTAR PRADESH, INDIA",
      "phone": "+916394938670",
      "email": "info@premiumleathercraft.com"
    }
  },
  "categories": [
    {
      "id": "camera-bags",
      "name": "Camera Bags",
      "count": 8,
      "description": "Professional camera bags for photographers",
      "image": "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop"
    },
    {
      "id": "canvas-bags",
      "name": "Canvas Bags",
      "count": 6,
      "description": "Durable canvas bags for everyday use",
      "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop"
    },
    {
      "id": "duffle-bags",
      "name": "Duffle & Travel Bags",
      "count": 12,
      "description": "Perfect companions for your travels",
      "image": "https://images.unsplash.com/photo-1544448840-3be7cb2fd398?w=400&h=300&fit=crop"
    },
    {
      "id": "ladies-bags",
      "name": "Ladies Bags",
      "count": 15,
      "description": "Elegant bags designed for women",
      "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop"
    },
    {
      "id": "backpacks",
      "name": "Leather Backpacks",
      "count": 10,
      "description": "Comfortable and stylish backpacks",
      "image": "https://images.unsplash.com/photo-1553902059-3c4a8b4b8cf1?w=400&h=300&fit=crop"
    },
    {
      "id": "messenger-bags",
      "name": "Messenger & Laptop Bags",
      "count": 14,
      "description": "Professional bags for work and business",
      "image": "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=400&h=300&fit=crop"
    },
    {
      "id": "travel-accessories",
      "name": "Travel Accessories",
      "count": 8,
      "description": "Essential accessories for travelers",
      "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      "id": "other-accessories",
      "name": "Other Accessories",
      "count": 9,
      "description": "Wallets, belts, and more leather goods",
      "image": "https://images.unsplash.com/photo-1523170335258-f5c0c12786f3?w=400&h=300&fit=crop"
    }
  ],
  "products": [
    {
      "id": "cam-001",
      "name": "Professional DSLR Camera Bag",
      "category": "camera-bags",
      "image": "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=400&fit=crop",
      "description": "Premium leather camera bag with padded compartments",
      "productCode": "PLC-CAM-001",
      "material": "Full Grain Buffalo Leather",
      "colors": ["Dark Brown", "Tan", "Black"],
      "dimensions": "Length: 14 inches, Height: 10 inches, Depth: 6 inches",
      "weight": "950 grams",
      "features": ["Padded compartments", "Weather resistant", "Adjustable strap"]
    },
    {
      "id": "can-001",
      "name": "Vintage Canvas Messenger",
      "category": "canvas-bags",
      "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=400&fit=crop",
      "description": "Durable canvas messenger bag with leather accents",
      "productCode": "PLC-CAN-001",
      "material": "Heavy-duty Canvas with Leather Trim",
      "colors": ["Khaki", "Navy", "Olive Green"],
      "dimensions": "Length: 16 inches, Height: 12 inches, Depth: 4 inches",
      "weight": "850 grams",
      "features": ["Laptop compartment", "Multiple pockets", "Leather reinforcements"]
    },
    {
      "id": "duf-001",
      "name": "Executive Travel Duffle",
      "category": "duffle-bags",
      "image": "https://images.unsplash.com/photo-1544448840-3be7cb2fd398?w=500&h=400&fit=crop",
      "description": "Spacious leather duffle bag for business travel",
      "productCode": "PLC-DUF-001",
      "material": "Premium Cow Hide Leather",
      "colors": ["Cognac", "Dark Brown", "Black"],
      "dimensions": "Length: 22 inches, Height: 12 inches, Depth: 12 inches",
      "weight": "1200 grams",
      "features": ["Large capacity", "Shoe compartment", "Detachable strap"]
    },
    {
      "id": "lad-001",
      "name": "Elegant Ladies Tote",
      "category": "ladies-bags",
      "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=400&fit=crop",
      "description": "Sophisticated tote bag perfect for daily use",
      "productCode": "PLC-LAD-001",
      "material": "Soft Nappa Leather",
      "colors": ["Burgundy", "Camel", "Black", "Navy"],
      "dimensions": "Length: 15 inches, Height: 11 inches, Depth: 5 inches",
      "weight": "680 grams",
      "features": ["Interior organizer", "Magnetic closure", "Comfortable handles"]
    },
    {
      "id": "bac-001",
      "name": "Classic Leather Backpack",
      "category": "backpacks",
      "image": "https://images.unsplash.com/photo-1553902059-3c4a8b4b8cf1?w=500&h=400&fit=crop",
      "description": "Timeless backpack design with modern functionality",
      "productCode": "PLC-BAC-001",
      "material": "Vegetable Tanned Leather",
      "colors": ["Natural", "Dark Brown", "Black"],
      "dimensions": "Length: 12 inches, Height: 17 inches, Depth: 6 inches",
      "weight": "1100 grams",
      "features": ["Laptop compartment", "Drawstring closure", "Padded straps"]
    },
    {
      "id": "mes-001",
      "name": "Professional Laptop Briefcase",
      "category": "messenger-bags",
      "image": "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500&h=400&fit=crop",
      "description": "Executive briefcase with laptop protection",
      "productCode": "PLC-MES-001",
      "material": "Full Grain Leather",
      "colors": ["Tan", "Dark Brown", "Black"],
      "dimensions": "Length: 17 inches, Height: 13 inches, Depth: 3 inches",
      "weight": "950 grams",
      "features": ["15-inch laptop fit", "Document organizer", "Combination lock"]
    },
    {
      "id": "tra-001",
      "name": "Travel Toiletry Bag",
      "category": "travel-accessories",
      "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      "description": "Compact toiletry bag for organized travel",
      "productCode": "PLC-TRA-001",
      "material": "Water-resistant Leather",
      "colors": ["Brown", "Black", "Navy"],
      "dimensions": "Length: 10 inches, Height: 6 inches, Depth: 4 inches",
      "weight": "320 grams",
      "features": ["Multiple compartments", "Hanging hook", "Water-resistant lining"]
    },
    {
      "id": "acc-001",
      "name": "Premium Leather Wallet",
      "category": "other-accessories",
      "image": "https://images.unsplash.com/photo-1523170335258-f5c0c12786f3?w=500&h=400&fit=crop",
      "description": "Handcrafted wallet with RFID protection",
      "productCode": "PLC-ACC-001",
      "material": "Italian Calf Leather",
      "colors": ["Brown", "Black", "Cognac"],
      "dimensions": "Length: 4.5 inches, Height: 3.5 inches, Depth: 0.8 inches",
      "weight": "85 grams",
      "features": ["RFID blocking", "Coin pocket", "Card slots"]
    }
  ]
};

// Global variables
let currentFilter = 'all';
let currentProducts = [...appData.products];

// Make functions globally accessible
window.showProductModal = showProductModal;
window.closeModal = closeModal;
window.filterByCategory = filterByCategory;
window.scrollToProducts = scrollToProducts;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  renderCategories();
  renderProducts(appData.products);
  createFilterButtons();
  initializeEventListeners();
  animateStats();
}

// Render categories
function renderCategories() {
  const categoriesGrid = document.getElementById('categoriesGrid');
  
  const categoriesHTML = appData.categories.map(category => `
    <div class="category-card" onclick="filterByCategory('${category.id}')">
      <img src="${category.image}" alt="${category.name}" class="category-image">
      <div class="category-info">
        <h3 class="category-name">${category.name}</h3>
        <p class="category-description">${category.description}</p>
        <span class="category-count">${category.count} Products</span>
      </div>
    </div>
  `).join('');
  
  categoriesGrid.innerHTML = categoriesHTML;
}

// Render products
function renderProducts(productsToRender) {
  const productsGrid = document.getElementById('productsGrid');
  
  if (!productsToRender || productsToRender.length === 0) {
    productsGrid.innerHTML = '<div style="text-align: center; grid-column: 1 / -1; padding: 40px;"><p>No products found matching your criteria.</p></div>';
    return;
  }
  
  const productsHTML = productsToRender.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-actions">
          <span class="product-code">${product.productCode}</span>
          <button class="btn btn--primary btn--sm" onclick="showProductModal('${product.id}')">View Details</button>
        </div>
      </div>
    </div>
  `).join('');
  
  productsGrid.innerHTML = productsHTML;
}

// Create filter buttons
function createFilterButtons() {
  const filterButtons = document.getElementById('filterButtons');
  
  appData.categories.forEach(category => {
    const button = document.createElement('button');
    button.className = 'filter-btn';
    button.setAttribute('data-category', category.id);
    button.textContent = category.name;
    button.addEventListener('click', () => filterByCategory(category.id));
    filterButtons.appendChild(button);
  });
}

// Filter products by category
function filterByCategory(categoryId) {
  currentFilter = categoryId;
  
  // Update active filter button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-category') === categoryId) {
      btn.classList.add('active');
    }
  });
  
  // Filter products
  if (categoryId === 'all') {
    currentProducts = [...appData.products];
  } else {
    currentProducts = appData.products.filter(product => product.category === categoryId);
  }
  
  renderProducts(currentProducts);
  
  // Clear search input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = '';
  }
  
  // Scroll to products section
  scrollToSection('products');
}

// Search functionality
function searchProducts(query) {
  const searchQuery = query.toLowerCase().trim();
  
  if (searchQuery === '') {
    // If search is empty, show products based on current filter
    renderProducts(currentProducts);
    return;
  }
  
  const searchResults = currentProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery) ||
    product.description.toLowerCase().includes(searchQuery) ||
    product.material.toLowerCase().includes(searchQuery) ||
    product.features.some(feature => feature.toLowerCase().includes(searchQuery))
  );
  
  renderProducts(searchResults);
}

// Show product modal
function showProductModal(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.getElementById('productModal');
  const modalBody = document.getElementById('modalBody');
  
  const modalHTML = `
    <img src="${product.image}" alt="${product.name}" class="modal-product-image">
    <h2 class="modal-product-name">${product.name}</h2>
    <p class="modal-product-description">${product.description}</p>
    
    <div class="product-details">
      <div class="detail-item">
        <span class="detail-label">Product Code:</span>
        <span class="detail-value">${product.productCode}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Material:</span>
        <span class="detail-value">${product.material}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Available Colors:</span>
        <span class="detail-value">${product.colors.join(', ')}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Dimensions:</span>
        <span class="detail-value">${product.dimensions}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Weight:</span>
        <span class="detail-value">${product.weight}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Features:</span>
        <span class="detail-value">${product.features.join(', ')}</span>
      </div>
    </div>
  `;
  
  modalBody.innerHTML = modalHTML;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  const modal = document.getElementById('productModal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Scroll to products section
function scrollToProducts() {
  scrollToSection('products');
}

// Initialize event listeners
function initializeEventListeners() {
  // Search input
  const searchInput = document.getElementById('searchInput');
  let searchTimeout;
  
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        searchProducts(e.target.value);
      }, 300);
    });
  }
  
  // Navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      
      // Handle home link specifically
      if (targetId === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        scrollToSection(targetId);
      }
    });
  });
  
  // All Products filter button
  const allProductsBtn = document.querySelector('[data-category="all"]');
  if (allProductsBtn) {
    allProductsBtn.addEventListener('click', () => filterByCategory('all'));
  }
  
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
  
  // Close modal on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
  
  // Close modal when clicking overlay
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target.classList.contains('modal-overlay')) {
        closeModal();
      }
    });
  }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const sectionTop = section.offsetTop - headerHeight - 20;
    
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  }
}

// Animate statistics counters
function animateStats() {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
  });
}

// Animate individual counter
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    
    if (target >= 1000) {
      element.textContent = Math.floor(current).toLocaleString() + '+';
    } else {
      element.textContent = Math.floor(current) + (target === 100 ? '%' : '+');
    }
  }, 16);
}

// Handle mobile navigation
document.addEventListener('click', function(e) {
  const navMenu = document.querySelector('.nav-menu');
  const navToggle = document.querySelector('.nav-toggle');
  
  if (navMenu && navToggle && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove('active');
  }
});

// Add mobile navigation styles
const style = document.createElement('style');
style.textContent = `
  @media (max-width: 768px) {
    .nav-menu.active {
      display: flex;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: var(--color-surface);
      flex-direction: column;
      padding: var(--space-16);
      box-shadow: var(--shadow-md);
      border-top: 1px solid var(--color-border);
    }
    
    .nav-menu.active .nav-link {
      padding: var(--space-12) 0;
      text-align: center;
      border-bottom: 1px solid var(--color-border);
    }
    
    .nav-menu.active .nav-link:last-child {
      border-bottom: none;
    }
  }
`;
document.head.appendChild(style);