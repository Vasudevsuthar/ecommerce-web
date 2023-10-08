import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AutoLayoutExample() {
  return (
    <>
      <Container >
        <h1 style={{ textAlign: "center", fontFamily:"Metal Mania", margin: "50px", fontSize: "3rem", fontWeight: "bold" }}>Music</h1>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Title style={{ textAlign: "center" }}>Album 1</Card.Title>
              <Card.Img
                variant="top"
                src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
              />
              <Card.Body>
                $ 12.99
                <Button variant="primary" style={{float: 'right'}}>Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Title style={{ textAlign: "center" }}>Album 2</Card.Title>{" "}
              <Card.Img
                variant="top"
                src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
              />
              <Card.Body>
                $ 14.99
                <Button variant="primary" style={{float: 'right'}}>Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Title style={{ textAlign: "center" }}>Album 3</Card.Title>{" "}
              <Card.Img
                variant="top"
                src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
              />
              <Card.Body>
                $ 9.99
                <Button variant="primary" style={{float: 'right'}}>Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Title style={{ textAlign: "center" }}>Album 4</Card.Title>{" "}
              <Card.Img
                variant="top"
                src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
              />
              <Card.Body>
                $ 19.99
                <Button variant="primary" style={{float: 'right'}}>Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 style={{ textAlign: "center", fontFamily:"Metal Mania", margin: "50px", fontSize: "3rem", fontWeight: "bold" }}>MERCH</h1>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Title style={{ textAlign: "center" }}>T-Shirt</Card.Title>
              <Card.Img
                variant="top"
                src="https://prasadyash2411.github.io/ecom-website/img/Shirt.png"
              />
              <Card.Body>
                $ 19.99
                <Button variant="primary" style={{float: 'right'}}>Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Title style={{ textAlign: "center" }}>Coffee Cup</Card.Title>{" "}
              <Card.Img
                variant="top"
                src="https://prasadyash2411.github.io/ecom-website/img/Cofee.png"
              />
              <Card.Body>
                $ 6.99
                <Button variant="primary" style={{float: 'right'}}>Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AutoLayoutExample;
