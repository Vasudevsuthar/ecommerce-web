import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    
    <div className="productContainer" >
      <Card>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Img variant="top" src={prod.imageUrl} alt={prod.title} />
        <Card.Body>
          <span>₹{prod.price}</span>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              style={{ float: "right" }}
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              style={{ float: "right" }}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
            >
              Add To Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
