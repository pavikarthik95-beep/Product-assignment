import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

const productsData = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1500,
    category: "Category A",
    rating: 4.5,
    image: "https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072201.jpg",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2200,
    category: "Category B",
    rating: 4.1,
    image: "https://img.freepik.com/free-vector/realistic-fitness-tracker-illustration_23-2148521366.jpg",
  },
  {
    id: 3,
    name: "Dslr Camera",
    price: 900,
    category: "Category A",
    rating: 4.8,
    image: "https://img.freepik.com/free-photo/camera-equipment-capturing-single-macro-object-generative-ai_188544-12096.jpg",
  },
  {
    id: 4,
    name: "Apple Ipad",
    price: 600,
    category: "Category C",
    rating: 4.2,
    image: "https://img.freepik.com/premium-photo/modern-tablet-with-stylus-white-background-minimalist-setup_1289359-3722.jpg?w=740",
  },
];

const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  // PAGE SWITCHING (PRODUCTS <-> CART)
  const [page, setPage] = useState("products");

  // CART STATE + LOCAL STORAGE
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to cart
  const addToCart = (product) => {
    console.log("Added to cart:", product.name);

    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Filter by search
  let filtered = productsData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Filter by category
  if (category !== "All") {
    filtered = filtered.filter((p) => p.category === category);
  }

  // Sorting
  if (sort === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <>
      <Navbar cartCount={cart.reduce((a, b) => a + b.qty, 0)} setPage={setPage} />

      {page === "products" && (
        <>
          <Filters
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            sort={sort}
            setSort={setSort}
          />

          <div className="container product-grid">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </>
      )}

      {page === "cart" && <Cart cart={cart} setCart={setCart} />}
    </>
  );
};

export default App