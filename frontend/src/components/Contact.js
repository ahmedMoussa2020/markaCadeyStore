// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import styles from "../styles/Contact.css";

const Result = () => {
  return (
    <p>Your message has been successfully sent. We will contact you soon.</p>
  );
};
function Contact() {
  const [result, showResult] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qbj49rt",
        "template_j4mnqh9",
        e.target,
        "r79KsagOtrD9_PP-7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div class="float-container">
      <div class="float-child">
        {" "}


      </div>

      <div class="float-child">
        <img src="/images/map.png" alt="hero-img" />
      </div>

      <div className="row">{result ? <Result /> : null}</div>
      
    </div>
  );
}
export default Contact;
