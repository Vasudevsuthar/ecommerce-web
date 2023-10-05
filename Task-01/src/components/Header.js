import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Badge, Dropdown } from "react-bootstrap";



const Header = () => {
  
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

          <Dropdown >
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
    </div>
  );
};

export default Header;
