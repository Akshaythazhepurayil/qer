import React from "react";
import "./ProductType.css";

const ProductType = ({head, subHead}) => {
  return (
    <div className="product-type">
      <h6>{head}</h6>
      <p>{subHead}</p>
    </div>
  );
};

export default ProductType;
