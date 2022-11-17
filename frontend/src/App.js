import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Marka Cadey Store</Navbar.Brand>
              </LinkContainer>
              <Nav className=" text-center">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Spicy">Spicy Sauce</Nav.Link>
                <Nav.Link href="#sambusa">Sambusa</Nav.Link>
                <Nav.Link href="#aboutUs">About Us</Nav.Link>
                <Nav.Link href="#contactUs">Contact Us</Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link href="#deets"><ShoppingCartIcon/></Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <StorefrontIcon/>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <main>
          <Container>
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
