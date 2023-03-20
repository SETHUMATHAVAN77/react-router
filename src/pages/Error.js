import React from "react";

import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <h2>404</h2>
      <p>page not Found</p>
      <Link to="/">Back to Home Page</Link>
    </section>
  );
};

export default Error;
