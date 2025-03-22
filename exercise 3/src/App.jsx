import React from "react";
import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  // Function to update the quantity of an order
  const updateQuantity = (index, newQuantity) => {
    const updatedOrders = [...orders];
    updatedOrders[index].quantity = newQuantity;
    setOrders(updatedOrders);
  };

  // Calculate the total based on the updated orders
  const total = orders.reduce((acc, order) => acc + order.price * order.quantity, 0);

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard
            key={index}
            order={order}
            index={index}
            updateQuantity={updateQuantity} // Pass the function to update quantity
          />
        ))}
      </div>

      <CheckoutButton total={total.toFixed(2)}></CheckoutButton>
    </>
  );
}