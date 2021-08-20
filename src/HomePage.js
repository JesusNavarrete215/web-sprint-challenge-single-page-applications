import React from "react";

export default function HomePage() {
  const routeToForm = () => {};
  <div className="home-container">
    <img
      className="home-image"
      src="https://cdn.pixabay.com/photo/2017/07/25/09/08/pizza-oven-2537308_960_720.jpg"
      alt=""
    />

    <button onClick={routeToForm} className="md-button create-pizza ">
      Create Pizza!
    </button>
  </div>;
}
/*this div will contain the background pic and pizza button */
