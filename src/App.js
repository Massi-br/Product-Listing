// import { useState } from "react";
import { Input } from "./forms/search";
import { CheckBox } from "./forms/caseCocher.jsx";
import { CategoryRow } from "./produits/productCategory.jsx";
import { ProduitRow } from "./produits/product.jsx";
import { useState } from "react";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  const [isChecked, setisChecked] = useState(false);
  const [search, setSearch] = useState("");

  const visibleProducts = PRODUCTS.filter((produit) => {
    if (isChecked && !produit.stocked) {
      return false;
    }
    if (search && !produit.name.includes(search)) {
      return false;
    }
    return true;
  });
  return (
    <>
      <SearchBar
        search={search}
        onsetSearch={setSearch}
        showStockedOnly={isChecked}
        onStockedOnly={setisChecked}
      />
      <ProductTable products={visibleProducts} />
    </>
  );
}

function SearchBar({ search, onsetSearch, showStockedOnly, onStockedOnly }) {
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
          onChange={onStockedOnly}
          checked={showStockedOnly}
          label="n'afficher que les produits en stock"
        />
      </div>
    </>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;
  for (let prod of products) {
    if (prod.category !== lastCategory) {
      rows.push(<CategoryRow name={prod.category} key={prod.category} />);
    }
    lastCategory = prod.category;
    rows.push(<ProduitRow product={prod} key={prod.name} />);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default App;
