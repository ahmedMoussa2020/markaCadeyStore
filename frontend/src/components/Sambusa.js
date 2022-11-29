import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import logger from "use-reducer-logger";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SambusaView from "./SambusaView";
import { Helmet } from "react-helmet-async";
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

// import data from "../data.js";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, sambusas: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Sambusa() {
  // const [sambusas, setSambusas] = useState([]);
  const [{ loading, error, sambusas }, dispatch] = useReducer(logger(reducer), {
    sambusas: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("api/sambusas");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
      // setSambusas(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Marka Cadey Store</title>
      </Helmet>
      <h1>Sambusa</h1>
      <div className="products">
        {loading ? (
         <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
          {sambusas.map((sambusa) => (
            <Col key={sambusa.slug} sm={6} md={4} lg={3} className="mb-3">
              <SambusaView sambusa={sambusa}></SambusaView>
            </Col>
          ))}
          </Row>
        )}
      </div>
    </div>
  );
}
export default Sambusa;
