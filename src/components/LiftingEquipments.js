import React from "react";
import BlackButton from "./BlackButton";
import ProductsListCard from "./ProductsListCard";
import wheel_loaders from "../assets/images/png/wheel_loaders.png";
import diesel_boom_lifts from "../assets/images/png/diesel_boom_lifts.png";
import scissor_lifts from "../assets/images/png/scissor_lifts.png";
import spider_lifts from "../assets/images/png/spider_lifts.png";
import boom_trucks from "../assets/images/png/boom_trucks.png";
import "./LiftingEquipments.css";

const LiftingEquipments = ({headText}) => {
  return (
    <div className="lifting-equipments-container">
      <div className="lifting-equipments">
        <h4>{headText}</h4>
        <div className="lifting-equipments-button">
          <BlackButton title="View All Products" />
        </div>
        <div className="lifting-equipments-list">
          <ProductsListCard
            image={wheel_loaders}
            title="Wheel Loaders"
          />
          <ProductsListCard
            image={diesel_boom_lifts}
            title="Diesel Boom Lifts"
          />
          <ProductsListCard
            image={scissor_lifts}
            title="Scissor Lifts"
          />
          <ProductsListCard
            image={spider_lifts}
            title="Spider Lifts"
          />
          <ProductsListCard
            image={boom_trucks}
            title="Boom Trucks "
          />
          <ProductsListCard
            image={wheel_loaders}
            title="Wheel Loaders"
          />
        </div>
      </div>
    </div>
  );
};

export default LiftingEquipments;
