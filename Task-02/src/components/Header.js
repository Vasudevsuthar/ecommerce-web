import React, {useState} from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Badge, Dropdown } from "react-bootstrap";
import Cart from "./cart/Cart";



const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  return (
    <div>
      <Navbar bg="dark" variant="light" expand="lg">
        <Container>
          <Link className="text-white mx-5 justify-content-center"  to="/">
            Home
          </Link>
          <Link className="text-white mx-5 justify-content-center" to="/store">
            Store
          </Link>
          <Link className="text-white mx-5 justify-content-center" to="/about">
            About
         </Link>

          <Dropdown onClick={toggleCart}>
            <Dropdown.Toggle variant="secondary">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>0</Badge>
            </Dropdown.Toggle>
           
          </Dropdown>
        </Container>
      </Navbar>
      <div>
        <header>
      <h1 style={{fontSize:'100px'}}>The Generics</h1>
      </header>
      </div>
      {isCartOpen && <Cart />}
    </div>
  );
};

export default Header;
