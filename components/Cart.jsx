import React from "react";

const Cart = ({ cart, setCart }) => {
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h2 style={{ marginBottom: "20px" }}>🛒 Your Cart</h2>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            background: "white",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <p>Qty: {item.qty}</p>
          </div>

          <div>
            <button onClick={() => increaseQty(item.id)}>+</button>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <button onClick={() => removeItem(item.id)} style={{ color: "red" }}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
