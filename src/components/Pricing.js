import React from "react";
import { Button } from "./Button";
import { FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { BsXDiamondFill } from "react-icons/bs";
// import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";

import "./Pricing.css";

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div>
        <div className="pricing--section">
          <div className="pricing-wrapper">
            <h1 className="pricing--heading">
              <div className="pricing--container">
                <Link to="/signup" className="pricing--container-card">
                  <div className="pricing--container-cardInfo">
                    <div className="icon">{/* <GiCrystalize /> */}</div>
                    <h3>Coffee</h3>
                    <h4>Image</h4>
                    <p>Desc</p>
                    <ul className="pricing--container-features">
                      <li>Cost</li>
                      <li>Weight</li>
                      <li></li>
                    </ul>
                    <Button buttonSize="btn--wide" buttonColor="primary">
                      Add to cart
                    </Button>
                  </div>
                </Link>
                <Link to="/signup" className="pricing--container-card">
                  <div className="pricing--container-cardInfo">
                    <div className="icon">{/* <BsXDiamondFill /> */}</div>
                    <h3>Pepper</h3>
                    <h4>Image</h4>
                    <p>Desc</p>
                    <ul className="pricing--container-features">
                      <li>Cost</li>
                      <li>Weight</li>
                      <li></li>
                    </ul>
                    <Button buttonSize="btn--wide" buttonColor="blue">
                      Add to Cart
                    </Button>
                  </div>
                </Link>
                <Link to="/signup" className="pricing--container-card">
                  <div className="pricing--container-cardInfo">
                    <div className="icon">{/* <GiCrystalize /> */}</div>
                    <h3>Coffee</h3>
                    <h4>Image</h4>
                    <p>Desc</p>
                    <ul className="pricing--container-features">
                      <li>Cost</li>
                      <li>Weight</li>
                      <li></li>
                    </ul>
                    <Button buttonSize="btn--wide" buttonColor="primary">
                      Add to cart
                    </Button>
                  </div>
                </Link>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};
export default Pricing;
