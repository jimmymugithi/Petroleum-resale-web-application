document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const quantity = parseInt(document.getElementById('quantity').value.trim(), 10);
    const price = parseFloat(document.getElementById('price').value.trim());
    const msg = document.getElementById('msg');
    const form = this;
  
    if (!name || isNaN(quantity) || quantity <= 0 || isNaN(price) || price <= 0) {
      msg.textContent = 'Please ensure the price and quantity are filled in properly, and the numbers must be positive.';
      msg.style.color = 'red';
      setTimeout(() => msg.textContent = '', 3000);
      return;
    }
  
    const product = { name, quantity, price };
    const existing = JSON.parse(localStorage.getItem('products')) || [];
    existing.push(product);
    localStorage.setItem('products', JSON.stringify(existing));
  
    msg.textContent = '✅ Product added successfully!';
    msg.style.color = 'green';
    setTimeout(() => msg.textContent = '', 3000);
  
    form.reset();
  });
  