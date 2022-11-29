import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import styles from "../styles/ContactScreen.css";

const Result = () => {
  return (
    <p>Your message has been successfully sent. We will contact you soon.</p>
  );
};
function ContactScreen() {
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
  // function ContactScreen() {
  return (
    <div class="float-container">
      <div class="float-child">
      <h2>Contact Us</h2>
        <p>Swing by for a cup of coffee, or leave us a message:</p>
        <div class="green"></div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Your first name.."
          />

          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <input type="text" name="user_email" placeholder="Your Email.." />
          <textarea
            name="message"
            id="subject"
            placeholder="Write something.."
          />
          <input type="submit" value="Send" />
        </form>
      </div>

      <div class="float-child">
        <div class="blue">
        <img  src="/images/spicy1removed.png"  alt="hero-img" />
        </div>
        <div><br/></div>
        <div><br/></div>
      </div>


      <div className="row">{result ? <Result /> : null}</div>

    </div>
  );
}

export default ContactScreen;
