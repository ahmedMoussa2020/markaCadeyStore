// import { useEffect, useReducer, useState } from "react";
// import axios from "axios";
// import logger from "use-reducer-logger";
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Product from "../components/Product";
// import {Helmet} from "react-helmet";
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_REQUEST":
//       return { ...state, loading: true };
//     case "FETCH_SUCCESS":
//       return { ...state, products: action.payload, loading: false };
//     case "FETCH_FAIL":
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// function HomeScreen() {
//   const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
//     products: [],
//     loading: true,
//     error: "",
//   });
//   // const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       dispatch({ type: "FETCH_REQUEST" });
//       try {
//         const result = await axios.get("/api/products");
//         dispatch({ type: "FETCH_SUCCESS", payload: result.data });
//       } catch (err) {
//         dispatch({ type: "FETCH_FAIL", payload: err.message });
//       }

//       // setProducts(result.data);
//     };
//     fetchData();
//   }, []);
//   return (
//     <div>
//       <Helmet>
//         <title>Marka Cadey Store</title>
//       </Helmet>
//       <h1>Featured Products</h1>
//       <div className="products">
//         {loading ? (
//           <LoadingBox />
//         ) : error ? (
//           <MessageBox variant="danger">{error}</MessageBox>
//         ) : (
//           <Row>
//             {products.map((product) => (
//               <Col  key={product.slug}sm={6} md={4} lg={3} className="mb-3">
//                 <Product product={product}></Product>
//               </Col>
//             ))}
//           </Row>
//         )}
//       </div>
//     </div>
//   );
// }
// export default HomeScreen;

import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import styles from "../styles/HomeScreen.css";
// import styles from "../styles/Footer.css";

function HomeScreen() {
  return (
    <div class="home_container">
      <div>
      <h2 className="home_title">Fresh Spicy Sauce</h2>
      <p className="home_description">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have
      </p>

      <div class="home_child">
        <h3>Best Fresh Orange</h3>
        <p>
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be
        </p>
        {/* <div class="green">Float Column 1</div> */}
        <Link to="/spicysauce">
        <Button >Buy Now</Button>
        </Link>
      </div>
      <br/>

      <div class="home_child">
        {/* <div class="blue">Float Column 2</div> */}
        <img src="images/spicy1.png" />
      </div>

      <div>
        <h2 className="home_title1">Fresh Spicy Sauce</h2>
        <p className="home_description1">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have
        </p>
      </div>
      </div>

      <div class="home_child1">
        <h3>Best Fresh Orange</h3>
        <p>
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be
        </p>
        {/* <div class="green">Float Column 1</div> */}
        <Link to="/sambusa">
        <Button>Buy Now</Button>
        </Link>
      </div>

      <div class="home_child1">
        {/* <div class="blue">Float Column 2</div> */}
        <img src="images/sambusa.png" />
      </div>
    </div>
  );
}

export default HomeScreen;
