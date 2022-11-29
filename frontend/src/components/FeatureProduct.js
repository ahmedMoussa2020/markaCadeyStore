import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import styles from "../styles/FeatureProduct.css";

function FeatureProduct() {
  return (
    <div class="feature_container">
      <h2 className="home_title">Fresh Spicy Sauce</h2>
      <p className="home_description">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have
      </p>

      <div className="feature_div">
        <div class="feature_title">
          <h3>Best Fresh Orange</h3>
          <p>
            but the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be
          </p>
          {/* <div class="green">Float Column 1</div> */}
          <Link to="/spicysauce">
            <Button>Buy Now</Button>
          </Link>
        </div>

        <div class="feature_image">
          <img src="images/sambusa.png" />
        </div>
      </div>

      <div className="feature_div">
        <div class="feature_title">
          <h3>Best Fresh Orange</h3>
          <p>
            but the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be
          </p>
          {/* <div class="green">Float Column 1</div> */}
          <Link to="/spicysauce">
            <Button>Buy Now</Button>
          </Link>
        </div>

        <div class="feature_image">
          <img src="images/sambusa.png" />
        </div>
      </div>
    </div>
  );
}

export default FeatureProduct;
