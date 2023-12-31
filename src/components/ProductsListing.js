import React from "react";
import BlackButton from "./BlackButton";
import "./ProductsListing.css";
import ProductsListCard from "./ProductsListCard";
import dozers_img from "../assets/images/png/dozers_img.png";
import articulated_trucks from "../assets/images/png/articulated_trucks.png";
import motor_grader_two from "../assets/images/png/motor_grader_two.png";
import wheel_loaders from "../assets/images/png/wheel_loaders.png";
import compactor_two from "../assets/images/png/compactor_two.png";
import excavator_two_img from "../assets/images/png/excavator_two_img.png";
import mining_truck_two from "../assets/images/png/mining_truck_two.png";
import backhoe_loader_two from "../assets/images/png/backhoe_loader_two.png";
import road_pavers from "../assets/images/png/road_pavers.png";
import skid_steers from "../assets/images/png/skid_steers.png";

const ProductsListing = ({ headText, subHead }) => {
  return (
    <div className="product-listing-container">
      <div className="product-listing">
        <h4>{headText}</h4>
        <div className="products-button">
          <BlackButton path="/products-for-rent" title="View All Products" />
        </div>
      </div>
      <div className="products-list">
        <ProductsListCard
          path="/product-details"
          image={excavator_two_img}
          title="Excavators"
        />
        <ProductsListCard
          path="/product-details"
          image={dozers_img}
          title="Dozers"
        />
        <ProductsListCard
          path="/product-details"
          image={articulated_trucks}
          title="Articulated Trucks"
        />
        <ProductsListCard
          path="/product-details"
          image={mining_truck_two}
          title="Mining Trucks"
        />
        <ProductsListCard
          path="/product-details"
          image={skid_steers}
          title="Skid Steers"
        />
        <ProductsListCard
          path="/product-details"
          image={motor_grader_two}
          title="Motor Graders"
        />
        <ProductsListCard
          path="/product-details"
          image={wheel_loaders}
          title="Wheel Loaders"
        />
        <ProductsListCard
          path="/product-details"
          image={compactor_two}
          title="Compactors"
        />
        <ProductsListCard
          path="/product-details"
          image={backhoe_loader_two}
          title="Backhoe Loaders"
        />
        <ProductsListCard
          path="/product-details"
          image={road_pavers}
          title="Road Pavers"
        />
        <ProductsListCard
          path="/product-details"
          image={skid_steers}
          title="Skid Steers"
        />
        <ProductsListCard
          path="/product-details"
          image={mining_truck_two}
          title="Mining Trucks"
        />
      </div>
    </div>
  );
};

export default ProductsListing;
