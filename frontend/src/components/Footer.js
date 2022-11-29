import styles from "../styles/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer_container ">
      {/* <div> */}
        <div className="footer_row">
          <div className="col-md-3">
            <h5 className="title_item">GET IN TOUCH</h5>
            <ul>
              <p>
                <i class="fa fa-map-marker-alt mr-2"> Persborftorget 1C</i>
              </p>
              <p>
                <i class="fa fa-phone-alt mr-2"> +46700604243</i>
              </p>
              <p>
                <i class="fa fa-envelope mr-2"></i>{" "}
                <strong>markacadeyab@gmail.com</strong>
              </p>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="title_item">OPEN HOURS</h5>
            <ul>
              <h6>Monday - Friday</h6>
              <h7>11:00 - 21:00</h7>
              <h6>Sunday - Satuday</h6>
              <h7>11:00 - 20:00</h7>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="title_item">FOLLOW US</h5>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>

          <div className="social_media">
            <h5 className="title_item">FOLLOW US</h5>
            <ul>
              <p>
                <i class="fab fa-instagram"></i>
                <a href="#">
                  <strong> Instagram</strong>
                </a>
              </p>
              <p>
                <i class="fab fa-facebook"></i>
                <a href="#">
                  <strong> Instagram</strong>
                </a>
              </p>
              <p>
                <i class="fab fa-tiktok"></i>
                <a href="#">
                  <strong> Instagram</strong>
                </a>
              </p>
            </ul>
          </div>
        </div>

        <div className="footer_bottom">
          <p>
            Copyright © 2019 All Rights &nbsp;
            {/* <Link to="/">CoderBakers</Link> */}
            <a href="google.com">CoderBakers</a>
          </p>
        </div>
      {/* </div> */}
    </div>
  );
}
export default Footer;
