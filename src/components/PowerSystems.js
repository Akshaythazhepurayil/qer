import React from 'react'
import BlackButton from "./BlackButton";
import "./PowerSystems.css"
import ProductsListCard from './ProductsListCard';
import diesel_generators from "../assets/images/png/diesel_generators.png";
import synchronization_panels from "../assets/images/png/synchronization_panels.png";


const PowerSystems = ({headText}) => {
  return (
    <div className="power-systems-container">
    <div className="power-systems">
      <h4>{headText}</h4>
      <div className="power-systems-button">
      <BlackButton title="View All Products"/>
      </div>
      <div className="power-systems-list">
      <ProductsListCard image={diesel_generators} title="Diesel Generators" />
      <ProductsListCard image={synchronization_panels} title="Synchronization Panels" />
      </div>
    </div>
  </div>
  )
}

export default PowerSystems