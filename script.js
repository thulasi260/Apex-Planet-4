const products = [
  { name: "Smartphone 📱", category: "electronics", price: 12000, rating: 4.2 },
  { name: "T-Shirt 👕", category: "clothing", price: 500, rating: 4.0 },
  { name: "Laptop 💻", category: "electronics", price: 50000, rating: 4.5 },
  { name: "Novel Book 📔", category: "books", price: 300, rating: 4.1 },
  { name: "Jeans 👖", category: "clothing", price: 1000, rating: 4.9 },
  { name: "Router 🛜", category: "electronics", price: 1500, rating: 4.1 }
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const sortOptions = document.getElementById("sortOptions");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      
      <h3>${product.name}</h3>
      <p>Category: <strong>${product.category}</strong></p>
      <p>Price: <strong>₹${product.price}</strong></p>
      <p>Rating: <strong>${product.rating} ⭐</strong></p>
    `;
    productList.appendChild(card);
  });
}

function filterAndSort() {
  let filtered = [...products];

  const category = categoryFilter.value;
  const sort = sortOptions.value;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "priceLowHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHighLow") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "ratingHighLow") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSort);
sortOptions.addEventListener("change", filterAndSort);

window.addEventListener("DOMContentLoaded", () => displayProducts(products));
