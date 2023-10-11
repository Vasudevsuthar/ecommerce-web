import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { Button, Table } from "react-bootstrap";

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const total = cart.reduce((acc, curr) => acc + parseFloat(curr.price), 0);

  const handlePurchase = () => {
    dispatch({ type: "RESET_CART" });
    alert("Thank you for shopping!");

  };

  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" style={{ height: 50 }}>
        <Container>
          <Nav className="me-auto">
            <Link className="text-white mx-5 justify-content-center" to="/">
              Home
            </Link>
            <Link
              className="text-white mx-5 justify-content-center"
              to="/store"
            >
              Store
            </Link>
            <Link
              className="text-white mx-5 justify-content-center"
              to="/about"
            >
              About
            </Link>
          </Nav>
          <nav>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <HiMiniShoppingCart color="white" fontSize="25px" />
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ left: "auto", right: 0 }}>
                {cart.length > 0 ? (
                  <>
                    <div
                      className="card_details"
                      style={{ width: "24rem", padding: "10" }}
                    >
                      <Table>
                        <thead>
                          <tr>
                            <th>ITEM</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((prod) => {
                            return (
                              <>
                                <tr>
                                  <td>
                                    <img
                                      className="cartItemImg"
                                      src={prod.imageUrl}
                                      alt=""
                                      style={{ width: "5rem", height: "5rem" }}
                                    />
                                    <p>{prod.title}</p>
                                  </td>
                                  <td>
                                    <span>₹{prod.price}</span>
                                  </td>
                                  <td>
                                    {prod.qty}
                                  </td>
                                  <td>
                                    <MdDeleteForever
                                      fontSize="20px"
                                      style={{ cursor: "pointer" }}
                                      onClick={() => {
                                        dispatch({
                                          type: "REMOVE_FROM_CART",
                                          payload: prod,
                                        });
                                      }}
                                    />
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                        </tbody>
                      </Table>
                    </div>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty</span>
                )}

                {cart.length > 0 && (
                  <span className="centered-text">
                    Total: ₹{Number(total).toFixed(2)}
                  </span>
                )}
                <div className="buttonItem">
                  {cart.length > 0 ? (
                    <Button onClick={handlePurchase}>
                      Purchase
                    </Button>
                  ) : (
                    <Button disabled>Add items to Cart</Button>
                  )}
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </nav>
        </Container>
      </Navbar>
      <div>
        <header>
      <h1 style={{fontSize:'100px'}}>The Generics</h1>
      </header>
      </div>
    </Fragment>
  );
};

export default Header;
