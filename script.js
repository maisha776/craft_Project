
        // --- CONFIGURATION ---
        const apiKey = ""; 

        // --- PRODUCT CATEGORY CONFIGURATION ---
        // NOTE: This now drives the automatic generation if you want default products.
        // BUT, since you want to manually edit products, you will see the `allProducts` array below.
        const categories = { 
            'Picture': 71, 
            'Wall Craft': 19, 
            'Bookmark': 1, 
            'Bridal Pen': 3, 
            'Memory Frame': 3 
        };
        
        // --- 1. PRODUCT DATA ARRAY (EDIT THIS!) ---
        // I have pre-filled this array based on your counts.
        // You can now manually change the ID, Name, Price, and Image URL for every single product here.
        
        let allProducts = [
            // --- PICTURE CATEGORY (71 Items) ---
          
    { id: 1, category: "Picture", name: "Art Print No.1", price: 88.69, img: "images/gallery/picture1.jpg" },
    { id: 2, category: "Picture", name: "Art Print No.2", price: 92.50, img: "images/gallery/picture2.jpg" },
    { id: 3, category: "Picture", name: "Art Print No.3", price: 96.00, img: "images/gallery/picture3.jpg" },
    { id: 4, category: "Picture", name: "Art Print No.4", price: 99.99, img: "images/gallery/picture4.jpg" },
    { id: 5, category: "Picture", name: "Art Print No.5", price: 105.00, img: "images/gallery/picture5.jpg" },
    { id: 6, category: "Picture", name: "Art Print No.6", price: 109.50, img: "images/gallery/picture6.jpg" },
    { id: 7, category: "Picture", name: "Art Print No.7", price: 112.00, img: "images/gallery/picture7.jpg" },
    { id: 8, category: "Picture", name: "Art Print No.8", price: 115.75, img: "images/gallery/picture8.jpg" },
    { id: 9, category: "Picture", name: "Art Print No.9", price: 118.90, img: "images/gallery/picture9.jpg" },
    { id: 10, category: "Picture", name: "Art Print No.10", price: 120.00, img: "images/gallery/picture10.jpg" },

    { id: 11, category: "Picture", name: "Art Print No.11", price: 122.50, img: "images/gallery/picture11.jpg" },
    { id: 12, category: "Picture", name: "Art Print No.12", price: 125.00, img: "images/gallery/picture12.jpg" },
    { id: 13, category: "Picture", name: "Art Print No.13", price: 128.75, img: "images/gallery/picture13.jpg" },
    { id: 14, category: "Picture", name: "Art Print No.14", price: 130.00, img: "images/gallery/picture14.jpg" },
    { id: 15, category: "Picture", name: "Art Print No.15", price: 132.50, img: "images/gallery/picture15.jpg" },
    { id: 16, category: "Picture", name: "Art Print No.16", price: 135.00, img: "images/gallery/picture16.jpg" },
    { id: 17, category: "Picture", name: "Art Print No.17", price: 138.25, img: "images/gallery/picture17.jpg" },
    { id: 18, category: "Picture", name: "Art Print No.18", price: 140.00, img: "images/gallery/picture18.jpg" },
    { id: 19, category: "Picture", name: "Art Print No.19", price: 142.75, img: "images/gallery/picture19.jpg" },
    { id: 20, category: "Picture", name: "Art Print No.20", price: 145.00, img: "images/gallery/picture20.jpg" },

    { id: 21, category: "Picture", name: "Art Print No.21", price: 147.50, img: "images/gallery/picture21.jpg" },
    { id: 22, category: "Picture", name: "Art Print No.22", price: 149.99, img: "images/gallery/picture22.jpg" },
    { id: 23, category: "Picture", name: "Art Print No.23", price: 152.00, img: "images/gallery/picture23.jpg" },
    { id: 24, category: "Picture", name: "Art Print No.24", price: 155.00, img: "images/gallery/picture24.jpg" },
    { id: 25, category: "Picture", name: "Art Print No.25", price: 158.50, img: "images/gallery/picture25.jpg" },
    { id: 26, category: "Picture", name: "Art Print No.26", price: 160.00, img: "images/gallery/picture26.jpg" },
    { id: 27, category: "Picture", name: "Art Print No.27", price: 162.75, img: "images/gallery/picture27.jpg" },
    { id: 28, category: "Picture", name: "Art Print No.28", price: 165.00, img: "images/gallery/picture28.jpg" },
    { id: 29, category: "Picture", name: "Art Print No.29", price: 168.90, img: "images/gallery/picture29.jpg" },
    { id: 30, category: "Picture", name: "Art Print No.30", price: 170.00, img: "images/gallery/picture30.jpg" },

    { id: 31, category: "Picture", name: "Art Print No.31", price: 172.00, img: "images/gallery/picture31.jpg" },
    { id: 32, category: "Picture", name: "Art Print No.32", price: 174.50, img: "images/gallery/picture32.jpg" },
    { id: 33, category: "Picture", name: "Art Print No.33", price: 176.00, img: "images/gallery/picture33.jpg" },
    { id: 34, category: "Picture", name: "Art Print No.34", price: 178.25, img: "images/gallery/picture34.jpg" },
    { id: 35, category: "Picture", name: "Art Print No.35", price: 180.00, img: "images/gallery/picture35.jpg" },
    { id: 36, category: "Picture", name: "Art Print No.36", price: 182.50, img: "images/gallery/picture36.jpg" },
    { id: 37, category: "Picture", name: "Art Print No.37", price: 185.00, img: "images/gallery/picture37.jpg" },
    { id: 38, category: "Picture", name: "Art Print No.38", price: 187.75, img: "images/gallery/picture38.jpg" },
    { id: 39, category: "Picture", name: "Art Print No.39", price: 189.90, img: "images/gallery/picture39.jpg" },
    { id: 40, category: "Picture", name: "Art Print No.40", price: 190.00, img: "images/gallery/picture40.jpg" },

    { id: 41, category: "Picture", name: "Art Print No.41", price: 192.00, img: "images/gallery/picture41.jpg" },
    { id: 42, category: "Picture", name: "Art Print No.42", price: 194.50, img: "images/gallery/picture42.jpg" },
    { id: 43, category: "Picture", name: "Art Print No.43", price: 196.00, img: "images/gallery/picture43.jpg" },
    { id: 44, category: "Picture", name: "Art Print No.44", price: 198.75, img: "images/gallery/picture44.jpg" },
    { id: 45, category: "Picture", name: "Art Print No.45", price: 200.00, img: "images/gallery/picture45.jpg" },
    { id: 46, category: "Picture", name: "Art Print No.46", price: 202.50, img: "images/gallery/picture46.jpg" },
    { id: 47, category: "Picture", name: "Art Print No.47", price: 205.00, img: "images/gallery/picture47.jpg" },
    { id: 48, category: "Picture", name: "Art Print No.48", price: 207.75, img: "images/gallery/picture48.jpg" },
    { id: 49, category: "Picture", name: "Art Print No.49", price: 209.99, img: "images/gallery/picture49.jpg" },
    { id: 50, category: "Picture", name: "Art Print No.50", price: 210.00, img: "images/gallery/picture50.jpg" },

    { id: 51, category: "Picture", name: "Art Print No.51", price: 212.00, img: "images/gallery/picture51.jpg" },
    { id: 52, category: "Picture", name: "Art Print No.52", price: 214.50, img: "images/gallery/picture52.jpg" },
    { id: 53, category: "Picture", name: "Art Print No.53", price: 216.00, img: "images/gallery/picture53.jpg" },
    { id: 54, category: "Picture", name: "Art Print No.54", price: 218.75, img: "images/gallery/picture54.jpg" },
    { id: 55, category: "Picture", name: "Art Print No.55", price: 220.00, img: "images/gallery/picture55.jpg" },
    { id: 56, category: "Picture", name: "Art Print No.56", price: 222.50, img: "images/gallery/picture56.jpg" },
    { id: 57, category: "Picture", name: "Art Print No.57", price: 225.00, img: "images/gallery/picture57.jpg" },
    { id: 58, category: "Picture", name: "Art Print No.58", price: 227.75, img: "images/gallery/picture58.jpg" },
    { id: 59, category: "Picture", name: "Art Print No.59", price: 229.99, img: "images/gallery/picture59.jpg" },
    { id: 60, category: "Picture", name: "Art Print No.60", price: 230.00, img: "images/gallery/picture60.jpg" },

    { id: 61, category: "Picture", name: "Art Print No.61", price: 232.00, img: "images/gallery/picture61.jpg" },
    { id: 62, category: "Picture", name: "Art Print No.62", price: 234.50, img: "images/gallery/picture62.jpg" },
    { id: 63, category: "Picture", name: "Art Print No.63", price: 236.00, img: "images/gallery/picture63.jpg" },
    { id: 64, category: "Picture", name: "Art Print No.64", price: 238.75, img: "images/gallery/picture64.jpg" },
    { id: 65, category: "Picture", name: "Art Print No.65", price: 240.00, img: "images/gallery/picture65.jpg" },
    { id: 66, category: "Picture", name: "Art Print No.66", price: 242.50, img: "images/gallery/picture66.jpg" },
    { id: 67, category: "Picture", name: "Art Print No.67", price: 245.00, img: "images/gallery/picture67.jpg" },
    { id: 68, category: "Picture", name: "Art Print No.68", price: 247.75, img: "images/gallery/picture68.jpg" },
    { id: 69, category: "Picture", name: "Art Print No.69", price: 249.99, img: "images/gallery/picture69.jpg" },
    { id: 70, category: "Picture", name: "Art Print No.70", price: 250.00, img: "images/gallery/picture70.jpg" },

    { id: 71, category: "Picture", name: "Art Print No.71", price: 255.00, img: "images/gallery/picture71.jpg" },


            // ... Add more Picture items here manually or use the generator below to fill the rest
            
            // --- WALL CRAFT CATEGORY (19 Items) ---
{ id: 72, category: "Wall Craft", name: "Wall Craft No.1", price: 200.00, img: "images/crafts/wc1.jpeg" },
{ id: 73, category: "Wall Craft", name: "Wall Craft No.2", price: 215.00, img: "images/crafts/wc2.jpeg" },
{ id: 74, category: "Wall Craft", name: "Wall Craft No.3", price: 225.00, img: "images/crafts/wc3.jpeg" },
{ id: 75, category: "Wall Craft", name: "Wall Craft No.4", price: 235.00, img: "images/crafts/wc4.jpeg" },
{ id: 76, category: "Wall Craft", name: "Wall Craft No.5", price: 245.00, img: "images/crafts/wc5.jpeg" },
{ id: 77, category: "Wall Craft", name: "Wall Craft No.6", price: 355.00, img: "images/crafts/wc6.jpeg" },
{ id: 78, category: "Wall Craft", name: "Wall Craft No.7", price: 265.00, img: "images/crafts/wc7.jpeg" },
{ id: 79, category: "Wall Craft", name: "Wall Craft No.8", price: 275.00, img: "images/crafts/wc8.jpeg" },
{ id: 80, category: "Wall Craft", name: "Wall Craft No.9", price: 285.00, img: "images/crafts/wc9.jpeg" },
{ id: 81, category: "Wall Craft", name: "Wall Craft No.10", price: 295.00, img: "images/crafts/wc10.jpeg" },

{ id: 82, category: "Wall Craft", name: "Wall Craft No.11", price: 305.00, img: "images/crafts/wc11.jpeg" },
{ id: 83, category: "Wall Craft", name: "Wall Craft No.12", price: 315.00, img: "images/crafts/wc12.jpeg" },
{ id: 84, category: "Wall Craft", name: "Wall Craft No.13", price: 325.00, img: "images/crafts/wc13.jpeg" },
{ id: 85, category: "Wall Craft", name: "Wall Craft No.14", price: 335.00, img: "images/crafts/wc14.jpeg" },
{ id: 86, category: "Wall Craft", name: "Wall Craft No.15", price: 345.00, img: "images/crafts/wc15.jpeg" },
{ id: 87, category: "Wall Craft", name: "Wall Craft No.16", price: 355.00, img: "images/crafts/wc16.jpeg" },
{ id: 88, category: "Wall Craft", name: "Wall Craft No.17", price: 365.00, img: "images/crafts/wc17.jpeg" },
{ id: 89, category: "Wall Craft", name: "Wall Craft No.18", price: 375.00, img: "images/crafts/wc18.jpeg" },
{ id: 90, category: "Wall Craft", name: "Wall Craft No.19", price: 385.00, img: "images/crafts/wc19.jpeg" },

            
            // --- BOOKMARK CATEGORY (1 Item) ---
            { id: 91, category: "Bookmark", name: "Special Bookmark", price: 50.00, img: "images/book_mark.jpg" },
            
            // --- BRIDAL PEN CATEGORY (3 Items) ---
            { id: 92, category: "Bridal Pen", name: "Pen Set 1", price: 150.00, img: "images/pen/pen1.jpeg" },
            { id: 93, category: "Bridal Pen", name: "Pen Set 2", price: 180.00, img: "images/pen/pen2.jpeg" },
            { id: 94, category: "Bridal Pen", name: "Pen Set 3", price: 200.00, img: "images/pen/pen3.jpeg" },
            
            // --- MEMORY FRAME CATEGORY (3 Items) ---
            { id: 95, category: "Memory Frame", name: "Frame 1", price: 300.00, img: "images/memory_frame/mf1.jpeg" },
            { id: 96, category: "Memory Frame", name: "Frame 2", price: 350.00, img: "images/memory_frame/mf2.jpeg" },
            { id: 97, category: "Memory Frame", name: "Frame 3", price: 400.00, img: "images/memory_frame/mf3.jpeg" }
        ];

        // --- AUTOMATIC GENERATOR (Optional Helper) ---
        // Since manually writing 97 items in code is tedious, I will keep this generator function active.
        // It helps fill in the gaps if you haven't manually written out all 97 items in the array above.
        // If you want to ONLY use the manual array above, you can delete this function call in window.onload.
        function generateProductData() {
            // Find the highest existing ID to continue counting
            let productIdCounter = allProducts.length > 0 ? Math.max(...allProducts.map(p => p.id)) + 1 : 1;
            
            // This loop ensures we meet the exact count requirements (71 Pictures, etc.)
            // It skips items if you've already defined them manually above.
            for (const [category, targetCount] of Object.entries(categories)) {
                const existingCount = allProducts.filter(p => p.category === category).length;
                const needed = targetCount - existingCount;

                for (let i = 1; i <= needed; i++) {
                    let baseName = category;
                    // Auto-generate names
                    if (category === 'Picture') baseName = 'Art Print';
                    if (category === 'Bookmark') baseName = 'Custom Bookmark';
                    if (category === 'Bridal Pen') baseName = 'Signature Pen';
                    
                    const price = (Math.random() * 500 + 50).toFixed(2);
                    
                    // Auto-generate placeholder image URL
                    // Change 'placeholderImage' string logic if you have systematic local filenames like 'picture_5.jpg'
                    const placeholderImage = `https://placehold.co/400x300/${getCategoryColor(category)}/ffffff?text=${encodeURIComponent(category.replace(' ', '+'))}+${existingCount + i}`;

                    allProducts.push({
                        id: productIdCounter++,
                        category: category,
                        name: `${baseName} (Auto ${existingCount + i})`,
                        price: parseFloat(price),
                        img: placeholderImage 
                    });
                }
            }
            // Sort products so they appear in order
            allProducts.sort((a, b) => a.category.localeCompare(b.category));
        }

        let cart = [];
        
        // --- SLIDESHOW CONFIGURATION ---
        const slides = [
            { type: 'placeholder', url: "images/slideshow/a.jpg", alt: "Digital Nature" },
            { type: 'placeholder', url: "images/slideshow/j.jpg", alt: "Futuristic City" },
            { type: 'placeholder', url: "images/slideshow/i.jpg", alt: "Digital Nature" },
            { type: 'placeholder', url: "images/slideshow/s.jpg", alt: "Glass Shapes" }
        ];
        
        let currentSlideIndex = 0;
        let slideInterval;
        const SLIDE_DURATION = 5000;

        // --- HELPER FUNCTIONS ---
        function categoryToSlug(name) { return name.replace(/\s/g, ''); }
        
        function getCategoryColor(category) {
            switch (category) {
                case 'Picture': return '005A9C';
                case 'Wall Craft': return '33AA77';
                case 'Bookmark': return 'FFD700';
                case 'Bridal Pen': return 'FF69B4';
                case 'Memory Frame': return '8A2BE2';
                default: return '6a11cb';
            }
        }

        // --- NAVIGATION LOGIC ---
        function scrollToSection(event, sectionId) {
            event.preventDefault();
            const section = document.getElementById(sectionId);
            if (!section) return;
            
            let headerOffset = 80;
            if (section.classList.contains('category-section')) headerOffset = 140;
            if (sectionId === 'home-section') { window.scrollTo({ top: 0, behavior: "smooth" }); return; }

            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }

        function renderCategoryNavigation() {
            const navContainer = document.getElementById('category-nav');
            if (!navContainer) return;
            navContainer.innerHTML = Object.keys(categories).map(categoryName => {
                const slug = categoryToSlug(categoryName);
                return `<a href="#category-${slug}" class="nav-link text-white hover:text-cyan-300 transition duration-300 px-3 py-1 rounded-full bg-white/10 hover:bg-white/30" onclick="scrollToSection(event, 'category-${slug}')">${categoryName}</a>`;
            }).join('');
        }

        // --- PRODUCT RENDERING ---
        function renderProducts() {
            const container = document.getElementById('category-sections');
            container.innerHTML = '';
            
            for (const [categoryName, count] of Object.entries(categories)) {
                const slug = categoryToSlug(categoryName);
                const categoryProducts = allProducts.filter(p => p.category === categoryName);
                
                let sectionHtml = `
                    <div id="category-${slug}" class="category-section mb-16 pt-6"> 
                        <h3 class="text-3xl font-bold mb-6 border-b pb-2 border-white/30 text-teal-300 neon-glow">${categoryName} Collection <span class="text-sm font-light text-white ml-2">(${categoryProducts.length} items)</span></h3>
                        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                `;
                
                sectionHtml += categoryProducts.map(p => `
                    <div class="product-card glass p-4 flex flex-col items-center text-center space-y-3">
                        <img src="${p.img}" alt="${p.name}" class="w-full h-32 md:h-48 object-cover rounded-xl shadow-lg" onerror="this.onerror=null;this.src='https://placehold.co/400x300?text=Error';">
                        <h4 class="text-lg font-semibold mt-2 truncate w-full px-1">${p.name}</h4>
                        <p class="text-xl font-bold text-teal-300 drop-shadow-md">${typeof p.price === 'number' ? p.price.toFixed(2) : p.price} tk</p>
                        <button class="glass-btn w-full px-4 py-2 rounded-lg font-semibold transition" onclick="addToCart(${p.id})">Add to Cart</button>
                    </div>
                `).join('');
                
                sectionHtml += `</div></div>`;
                container.innerHTML += sectionHtml;
            }
        }

        // --- CART LOGIC ---
        function addToCart(id) {
            const product = allProducts.find(p => p.id === id);
            if (!product) return;
            const item = cart.find(i => i.id === id);
            if (item) {
                item.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            updateCartUI();
            
            ['cart-icon-mobile', 'cart-icon-desktop'].forEach(iconId => {
                const icon = document.getElementById(iconId);
                if (icon) { 
                    icon.classList.add('pulse-once'); 
                    setTimeout(() => icon.classList.remove('pulse-once'), 600); 
                }
            });
        }

        function removeFromCart(id) {
            const idx = cart.findIndex(i => i.id === id);
            if (idx > -1) {
                if (cart[idx].quantity > 1) {
                    cart[idx].quantity--;
                } else {
                    cart.splice(idx, 1);
                }
                updateCartUI();
            }
        }

        function updateCartUI() {
            const count = cart.reduce((sum, i) => sum + i.quantity, 0);
            const total = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
            
            document.getElementById('cart-count-mobile').textContent = count;
            document.getElementById('cart-count-desktop').textContent = count;
            document.getElementById('cart-total-price').textContent = `${total.toFixed(2)} tk`;
            
            const container = document.getElementById('cart-items-container');
            const emptyMsg = document.getElementById('cart-empty-message');
            
            if (cart.length === 0) {
                container.innerHTML = '';
                emptyMsg.classList.remove('hidden');
            } else {
                emptyMsg.classList.add('hidden');
                container.innerHTML = cart.map(i => `
                    <div class="flex items-center justify-between py-2 border-b border-white/10 last:border-b-0">
                        <div class="flex-1">
                            <p class="font-medium">${i.name}</p>
                            <p class="text-sm opacity-70">${i.price.toFixed(2)} tk x ${i.quantity}</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <button class="glass-btn w-6 h-6 rounded-full" onclick="removeFromCart(${i.id})">-</button>
                            <span>${i.quantity}</span>
                            <button class="glass-btn w-6 h-6 rounded-full" onclick="addToCart(${i.id})">+</button>
                        </div>
                        <p class="w-20 text-right font-semibold">${(i.price * i.quantity).toFixed(2)} tk</p>
                    </div>
                `).join('');
            }
        }

        function toggleCartModal() {
            const modal = document.getElementById('cart-modal');
            modal.classList.toggle('hidden');
        }

        function showCustomAlert(msg) {
            document.getElementById('alert-message').textContent = msg;
            document.getElementById('custom-alert').classList.remove('hidden');
        }
        function hideCustomAlert() {
            document.getElementById('custom-alert').classList.add('hidden');
        }

        // --- SLIDESHOW FUNCTIONS ---
        function renderSlideshow() {
            const container = document.getElementById('slideshow-container');
            const indicators = document.getElementById('slideshow-indicators');
            if (!container) return;

            // Generate HTML structure if not present
            if (!container.querySelector('.slide')) {
                container.innerHTML = slides.map((s, i) => `
                    <div class="slide ${i===0?'active':''}" style="background-image: url('${s.url}');">
                        <div class="slide-overlay"></div>
                    </div>
                `).join('');
                
                indicators.innerHTML = slides.map((_, i) => `<div class="indicator ${i===0?'active':''}" onclick="jumpToSlide(${i})"></div>`).join('');
            } else {
                // Just toggle active classes
                Array.from(container.children).forEach((el, i) => el.classList.toggle('active', i === currentSlideIndex));
                Array.from(indicators.children).forEach((el, i) => el.classList.toggle('active', i === currentSlideIndex));
            }
            
            // Reset timer
            clearInterval(slideInterval);
            slideInterval = setInterval(() => changeSlide(1), SLIDE_DURATION);
        }

        function changeSlide(dir) {
            currentSlideIndex += dir;
            if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
            if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
            renderSlideshow();
        }

        function jumpToSlide(index) {
            currentSlideIndex = index;
            renderSlideshow();
        }

        // --- API CALL FOR AI IMAGE ---
        async function generateImage(prompt) {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`;
            try {
                const response = await fetch(url, {
                    method: 'POST', headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ instances: { prompt: prompt }, parameters: { "sampleCount": 1 } })
                });
                if (!response.ok) throw new Error('API Error');
                const data = await response.json();
                if (data.predictions?.[0]?.bytesBase64Encoded) return data.predictions[0].bytesBase64Encoded;
            } catch (e) { console.error(e); }
            return null;
        }

        async function initSlideshow() {
            // Customize prompt here
            const prompt = "A beautiful, abstract, glassmorphism-style sculpture with neon cyan and magenta glowing lines, high detail, digital art, minimal background, high resolution.";
            
            const b64 = await generateImage(prompt);
            
            slides[0].url = b64 ? `data:image/png;base64,${b64}` : "https://placehold.co/1920x1080/000000/ffffff?text=Art+In+Motion";
            renderSlideshow();
        }

        // --- INITIALIZATION ---
        window.onload = () => {
            // First, run the auto-generator to ensure we hit the 97 item count target
            generateProductData(); 
            // Then render everything
            renderProducts();
            renderCategoryNavigation();
            updateCartUI();
            initSlideshow();
            
            window.addEventListener('scroll', () => {
                const header = document.getElementById('main-header');
                if (window.scrollY > 50) {
                    header.classList.add('py-2');
                    header.classList.remove('p-4');
                } else {
                    header.classList.add('p-4');
                    header.classList.remove('py-2');
                }
            });
        };
