import React from "react";

export default function StuffForm({ setStuffs, stuffs }) {
  const handle = (event) => {
    event.preventDefault();
    const Name_stuff = document.querySelector('#nameStuff').value;
    const Price_stuff = document.querySelector('#priceStuff').value;
    const newStuff = { name: Name_stuff, price: parseFloat(Price_stuff) }; // Convert price to a number
    setStuffs([newStuff, ...stuffs]); // Add new stuff to the beginning of the list
  };

  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" id="nameStuff" />

      <p>Stuff price</p>
      <input type="search" placeholder="15" id="priceStuff" />

      <button onClick={handle}>Add Stuff</button>
    </form>
  );
}