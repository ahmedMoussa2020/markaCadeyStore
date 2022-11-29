import styles from "../styles/Banner.css";

function Banner() {
  return (
    <div className="banner">
      
      <img className="banner" src="/images/back.png" alt="hero-img" />

      <div className="center__text">
        <div>
          <h3 className="title">Welcome to MK Store </h3>
          <h1>Contunie from banner</h1>
          <p className="info-title"> Spicy Sauce That Travel All Over The World </p>
        </div>
      </div>
    </div>
  );
}
export default Banner;