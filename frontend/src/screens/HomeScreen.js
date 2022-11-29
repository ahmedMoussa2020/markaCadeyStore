import Banner from "../components/Banner";
import FeatureProduct from "../components/FeatureProduct";
import FooterTasty from "../components/FooterTasty";
import ServicesScreen from "../components/ServicesScreen";


function HomeScreen() {
  return (
    <div class="home_container">
      <Banner />
      <ServicesScreen />
      <FeatureProduct />
      <FooterTasty />
    </div>
  );
}

export default HomeScreen;
