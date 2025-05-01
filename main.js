window.addEventListener('DOMContentLoaded', () => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const container = document.getElementById('products');
    
    if (!container) return; 
  
    const renderProducts = (products) => {
      container.innerHTML = ''; 
  
      if (products.length === 0) {
        container.innerHTML = "<p>No products found.</p>";
        return;
      }
  
      products.forEach((product, index) => {
        const div = document.createElement('div');
        div.className = "product";
        div.innerHTML = `
          <strong>${product.name}</strong><br/>
          Quantity: ${product.quantity} L<br/>
          Price: KES ${product.price.toFixed(2)}<br/>
          <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        container.appendChild(div);
      });
      
      
      const deleteButtons = document.querySelectorAll('.delete-btn');
      deleteButtons.forEach(button => {
        button.addEventListener('click', handleDelete);
      });
    };
  
    const handleDelete = (event) => {
      const index = event.target.getAttribute('data-index'); 
      const products = JSON.parse(localStorage.getItem('products')) || [];
      
      
      products.splice(index, 1);
  
      
      localStorage.setItem('products', JSON.stringify(products));
      
      
      renderProducts(products);
    };
  
    
    renderProducts(products);
  });
  