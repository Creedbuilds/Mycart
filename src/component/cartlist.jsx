import { Minus, Plus, Trash2 } from "lucide-react";
import styles from "./Cartlist.module.css";

function CartList({
  items,
  increment,
  decrement,
  deleteItem,
}) {
  return (
    <div className={styles.cartList}>
      {items.map((item) => (
        <div key={item.id} className={styles.card}>
          {/* Product Image */}
          <div className={styles.imageContainer}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.image}
            />
          </div>

          {/* Product Details */}
          <div className={styles.details}>
            <h3>{item.name}</h3>

            <p className={styles.category}>
              {item.category}
            </p>

            <p className={styles.weight}>
              {item.weight}
            </p>

            <h4 className={styles.price}>
              ${item.price.toFixed(2)}
            </h4>
          </div>

          {/* Right Side */}
          <div className={styles.actions}>
            <button
              className={styles.deleteBtn}
              onClick={() => deleteItem(item.id)}
            >
              <Trash2 size={18} />
            </button>

            <div className={styles.quantity}>
              <button
                className={styles.qtyBtn}
                onClick={() => decrement(item.id)}
              >
                <Minus size={16} />
              </button>

              <span>{item.quantity}</span>

              <button
                className={styles.qtyBtn}
                onClick={() => increment(item.id)}  >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cartlist;