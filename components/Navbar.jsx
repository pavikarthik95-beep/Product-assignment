import React from "react";

const Navbar = ({ cartCount, setPage }) => {
  return (
    <nav className="navbar">
      <h2 style={{ cursor: "pointer" }} onClick={() => setPage("products")}>
        Product Listing
      </h2>

      <div
        style={{
          marginRight: "20px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "18px",
        }}
        onClick={() => setPage("cart")}
      >
        🛒 Cart ({cartCount})
      </div>
    </nav>
  );
};

export default Navbar;

