import React, { useState } from "react";
import { Input } from "./forms/search";
import { CheckBox } from "./forms/checkBox";
import { Category } from "./products/productCat";
import { Produit } from "./products/productRow";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(false);

  const inStockProducts = PRODUCTS.filter((prod) => {
    if (checked && !prod.stocked) {
      return false;
    }
    if (search && !prod.name.includes(search)) {
      return false;
    }
    return true;
  });

  return (
    <>
      <SearchBar
        checked={checked}
        onsetChecked={setChecked}
        search={search}
        onsetSearch={setSearch}
      />
      <ProductTable produits={inStockProducts} />
    </>
  );
}

function SearchBar({ search, onsetSearch, checked, onsetChecked }) {
  return (
    <>
      <div>
        <Input
          value={search}
          onChange={onsetSearch}
          placeholder="Rechercher...."
        />
        <CheckBox
          id="stocked"
          checked={checked}
          onChange={onsetChecked}
          label="n'afficher que les produits en stock."
        />
      </div>
    </>
  );
}

function ProductTable({ produits }) {
  const rows = [];
  let lastCategorie = null;

  for (let prod of produits) {
    if (prod.category !== lastCategorie) {
      rows.push(<Category name={prod.category} key={prod.category} />);
    }
    lastCategorie = prod.category;
    rows.push(<Produit produit={prod} key={prod.name} />);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}

export default App;
