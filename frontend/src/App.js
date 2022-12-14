import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import { LinkContainer } from "react-router-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Banner from "./components/Banner";
import { useContext } from "react";
import { Store } from "./Store";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SignupScreen from "./screens/SignupScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardScreen from "./screens/DashboardScreen";
import AdminRoute from "./components/AdminRoute";
import ProductListScreen from "./screens/ProductListScreen";
import Footer from "./components/Footer";
import FooterTasty from "./components/FooterTasty";
import Sambusa from "./components/Sambusa";
import Contact from "./components/Contact";
import About from "./components/About";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrdersListScreen";
import UserListScreen from "./screens/UserListScreen";
import SpicySauce from "./components/HomeScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ServicesScreen from "./components/ServicesScreen";
import ContactScreen from "./components/ContactScreen";
import TopNav from "./components/TopNav";
import SambusaScreen from "./components/SambusaScreen";
// import Banner from "./screens/Banner";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/signin";
  };
  return (
    <BrowserRouter>
    <TopNav />

      <div className="site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header className="sticky-nav">
          <Navbar bg="black" variant="dark" expand="lg">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Marka Cadey Store</Navbar.Brand>
              </LinkContainer>

              <Navbar.Toggle aria-container="basic-navbar-nav" />
              <Navbar.Collapse
                id="basic-navbar-nac"
                className="justify-content-center"
              >
                <Nav className="text-center">
                  <Nav.Link as={Link} to={"/"}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={"spicysauce"}>
                    Spicy Sauce
                  </Nav.Link>
                  <Nav.Link as={Link} to={"sambusa"}>
                    Sambusa
                  </Nav.Link>
                  <Nav.Link as={Link} to={"about"}>
                    About Us
                  </Nav.Link>
                  <Nav.Link as={Link} to={"contactscreen"}>
                    Contact Us
                  </Nav.Link>
                </Nav>

                <Nav className="nav_right">
                  <Nav.Link
                    as={Link}
                    to={"http://www.markacadeyrestaurant.com/"}
                    className="me-auto"
                  >
                    <StorefrontIcon />
                  </Nav.Link>

                  <Nav.Link as={Link} to={"cart"} className="me-auto">

                    <ShoppingCartIcon />
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Nav.Link>

                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/signin">
                      Sign In
                    </Link>
                  )}

                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown title="Admin" id="admin-nav-dropdown">
                      <LinkContainer to="/admin/dashboard">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/products">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orders">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/users">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        {/* <main> */}
          {/* <Container> */}
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="contactscreen" element={<ContactScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/servicesscreen" element={<ServicesScreen />} />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/shipping" element={<ShippingAddressScreen />} />
              <Route path="/payment" element={<PaymentMethodScreen />} />
              <Route path="/sambusa" element={<Sambusa />} />
              <Route path="/contactscreen" element={<ContactScreen />} />
              
              <Route path="/about" element={<About />} />
              <Route path="/spicysauce" element={<SpicySauce />} />

              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardScreen />
                  </AdminRoute>
                }
              ></Route>

              <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                }
              ></Route>

              <Route
                path="/admin/orders"
                element={
                  <AdminRoute>
                    <OrderListScreen />
                  </AdminRoute>
                }
              ></Route>

              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserListScreen />
                  </AdminRoute>
                }
              ></Route>

              <Route
                path="/admin/products"
                element={
                  <AdminRoute>
                    <ProductListScreen />
                  </AdminRoute>
                }
              ></Route>

              <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEditScreen />
                  </AdminRoute>
                }
              ></Route>

              <Route
                path="/admin/user/:id"
                element={
                  <AdminRoute>
                    <UserEditScreen />
                  </AdminRoute>
                }
              ></Route>

              <Route path="/sambusa/:slug" element={<SambusaScreen />} />
              <Route path="/" element={<HomeScreen />} />
              
            </Routes>
            <Footer />


          {/* </Container> */}
        {/* </main> */}
      </div>
    </BrowserRouter>
  );
}
export default App;
