import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import { LinkContainer } from "react-router-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Banner from "./components/Banner";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Store } from "./Store";
// import Banner from "./screens/Banner";

function App() {

  const {state } = useContext(Store);
  const {cart } = state;

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Marka Cadey Store</Navbar.Brand>
              </LinkContainer>

              {/* <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
                    </Badge>
                  )}
                </Link>
              </Nav> */}


              <Nav className=" text-center">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#Spicy">Spicy Sauce</Nav.Link>
                <Nav.Link href="#sambusa">Sambusa</Nav.Link>
                <Nav.Link href="#aboutUs">About Us</Nav.Link>
                <Nav.Link href="#contactUs">Contact Us</Nav.Link>
              </Nav>
              <Nav>

                <Nav.Link href="#deets" className="me-auto">
                  <StorefrontIcon />
                  {/* {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
                    </Badge>
                  )} */}
                </Nav.Link>

                <Nav.Link  href="/cart" className="me-auto">
                  <ShoppingCartIcon />
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
                    </Badge>
                  )}
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <main>
          <Banner />
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>

        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
