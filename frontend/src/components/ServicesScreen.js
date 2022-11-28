import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import styles from "../styles/ServiesScreen.css";

function ServicesScreen() {
  return (
    <div class="flex-container">
      <div className="service_title">
        {" "}
        <h1>Our Services</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have
        </p>
      </div>

      <div className="flex_container2">
        <div class="flex-child">
          <img src="/images/home.png" alt="hero-img" />
          <h5> Flex Column 1</h5>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>

        <div class="flex-child">
          <img src="/images/home.png" alt="hero-img" />
          <h5> Flex Column 1</h5>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>

        <div class="flex-child">
          <img src="/images/home.png" alt="hero-img" />
          <h5> Flex Column 1</h5>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
      </div>
      <div className="button">
      <Link to="/spicysauce">
      <Button>Try it yourself</Button>
      </Link>
      </div>
    </div>
  );
}
export default ServicesScreen;
