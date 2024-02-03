// import { useState } from "react";
import { Input } from "./forms/search";
import { CheckBox } from "./forms/caseCocher.jsx";

// const PRODUCTS = [
//   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
// ];

function App() {
  return (
    <>
      <SearchBar />
    </>
  );
}

function SearchBar() {
  return (
    <>
      <div>
        <Input value="" onChange={() => null} placeholder="Rechercher...." />
        <CheckBox
          onChange={() => null}
          checked={false}
          label="n'afficher que les produits en stock"
        />
      </div>
    </>
  );
}

export default App;
