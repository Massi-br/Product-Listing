import React, { useState } from "react";
import { Input } from "./forms/search";
import { CheckBox } from "./forms/check";
import { CategorieProd } from "./products/categorie";
import { ProductRows } from "./products/rows";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  const [searchTerm, setsearchTerm] = useState("");
  const [checked, setChecked] = useState(false);

  const isAvailable = PRODUCTS.filter((prod) => {
    if (checked && !prod.stocked) {
      return false;
    }
    if (searchTerm && !prod.name.includes(searchTerm)) {
      return false;
    }
    return true;
  });

  return (
    <div className="container my-3">
      <SearchBar
        search={searchTerm}
        onsearch={setsearchTerm}
        checked={checked}
        onChecked={setChecked}
      />
      <ProductTable products={isAvailable} />
    </div>
  );
}

function SearchBar({ search, onsearch, checked, onChecked }) {
  return (
    <>
      <div className="mb-3">
        <Input
          placeholder="entrer un produit..."
          value={search}
          onChange={onsearch}
        />
      </div>
      <div>
        <CheckBox
          id="stocked"
          checked={checked}
          label="n'afficher que les produits en stock"
          onChange={onChecked}
        />
      </div>
    </>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCat = null;
  for (let prod of products) {
    if (prod.category != lastCat) {
      rows.push(<CategorieProd key={prod.category} name={prod.category} />);
      lastCat = prod.category;
    }
    rows.push(<ProductRows key={prod.name} product={prod} />);
  }

  return (
    <table className="table">
      <thead>
        <tr className="text-center">
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default App;
