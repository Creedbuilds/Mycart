import { useState } from "react";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import apple from "./assets/Appletwo.jpeg";
import banana from "./assets/banana.jpeg";
import tomato from "./assets/tomato.jpeg";
import carrot from "./assets/carrot.jpeg";
import mango from "./assets/mango.jpeg"
import "./App.css";

function App() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Red Apples",
      category: "Fruit",
      weight: "250 gm",
      price: 4,
      quantity: 0,
      image: apple,
    },
    {
      id: 2,
      name: "Fresh Banana",
      category: "Fruit",
      weight: "250 gm",
      price: 6,
      quantity: 0,
      image: banana,
    },
    {
      id: 3,
      name: "Tomato",
      category: "Vegetables",
      weight: "250 gm",
      price: 9,
      quantity: 0,
      image: tomato,
    },
    {
      id: 4,
      name: "Carrots",
      category: "Vegetables",
      weight: "250 gm",
      price: 5,
      quantity: 0,
      image: carrot,
    },
    {
      id: 5,
      name: "Mango",
      category: "fruit",
      weight: "250 gm",
      price: 5,
      quantity: 0,
      image: mango,
    },
  ]);


  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };


  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = subtotal / 4.8;

  const total = subtotal + deliveryFee;

  return (
    <div className="app">
      <div className="cart-container">

        {/* Header */}
        <header className="cart-header">
          <button className="back-button">
            {/* <ArrowLeft size={20} /> */}
                +
          </button>

          <h1>My Cart</h1>

          <div className="header-space"></div>
        </header>

        {/* Cart Items */}
        <section className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>

              {/* Product Image */}
              <div className="product-image">
                <img src={item.image} alt={item.name} />
              </div>

              {/* Product Details */}
              <div className="product-details">
                <h3>{item.name}</h3>

                <p className="category">
                  {item.category}
                </p>

                <p className="weight">
                  {item.weight}
                </p>
              </div>

              {/* Right Side */}
              <div className="product-right">

                {/* Quantity */}
                <div className="quantity-control">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="quantity-button"
                  >
                    {/* <Minus size={14} /> */}
                    -
                  </button>

                  <span>
                    {String(item.quantity).padStart(2, "0")}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="quantity-button"
                  >
                    {/* <Plus size={14} /> */}
                    +
                  </button>

                </div>

                {/* Price */}
                <p className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

              </div>
            </div>
          ))}
        </section>

        {/* Coupon */}
        <div className="coupon">
          <input
            type="text"
            placeholder="Enter coupon code"
          />

          <button>Apply</button>
        </div>

        {/* Order Summary */}
        <section className="order-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Sub Total</span>

            <span>
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <div className="summary-row">
            <span>Delivery fee</span>

            <span>
              ${deliveryFee.toFixed(2)}
            </span>
          </div>

          <div className="summary-divider"></div>

          <div className="total-row">
            <span>Total</span>

            <span>
              ${total.toFixed(2)}
            </span>
          </div>

        </section>

        {/* Checkout */}
        <button className="checkout-button">
          Checkout
        </button>

      </div>
    </div>
  );
}

export default App;