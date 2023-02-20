import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
// import Game from "./Game";
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable";
import PRODUCTS from "./components/FilterableProductTable/products";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <Game /> */}
    <FilterableProductTable products={PRODUCTS} />
  </StrictMode>
);
