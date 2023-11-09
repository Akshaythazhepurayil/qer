import React from "react";
import BlackButton from "./BlackButton";
import ProductsListCard from "./ProductsListCard";
import satandard_air_compressors from "../assets/images/png/satandard_air_compressors.png";
import high_pressure_air_compressors from "../assets/images/png/high_pressure_air_compressors.png";
import oil_free_air_compressors from "../assets/images/png/oil_free_air_compressors.png";
import "./AirSystems.css";

const AirSystems = ({ headText }) => {
  return (
    <div className="air-system-container">
      <div className="air-systems">
        <h4>{headText}</h4>
        <div className="air-systems-button">
          <BlackButton path="/products-for-rent" title="View All Products" />
        </div>
        <div className="air-systems-list">
          <ProductsListCard
            image={satandard_air_compressors}
            title="Standard Air Compressors"
          />
          <ProductsListCard
            image={high_pressure_air_compressors}
            title="High-pressure Air Compressors"
          />
          <ProductsListCard
            image={oil_free_air_compressors}
            title="Oil-free Air Compressors"
          />
        </div>
      </div>
    </div>
  );
};

export default AirSystems;
