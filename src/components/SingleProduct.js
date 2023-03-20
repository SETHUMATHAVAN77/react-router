import React from "react";

import { Link, useParams } from "react-router-dom";

import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  const { img, name } = product;
  return (
    <section className="section product">
      <img src={img} alt={name} />
      <h5>{name}</h5>
      <Link to="/products">Back to Products</Link>
    </section>
  );
};
export default SingleProduct;
