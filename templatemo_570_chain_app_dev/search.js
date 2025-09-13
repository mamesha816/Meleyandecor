document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('productsearch');

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.toLowerCase().trim();
            const products = document.querySelectorAll('.product');
            let found = false;
            
            products.forEach((product, index) => {
                const productText = product.textContent.toLowerCase();
                
                if (productText.includes(query)) {
                    product.scrollIntoView({ behavior: 'smooth' });
                    product.style.outline = '3px solid red';
                    
                    setTimeout(() => {
                        product.style.outline = '';
                    }, 2000);
                    
                    found = true;
                    this.value = '';
                    return;
                }
            });
            
            if (!found) {
                alert('Product not found');
            }
        }
    });
});