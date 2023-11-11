import React from "react";
import ReactImageMagnify from "react-image-magnify";
import img1 from "../img/Sony.jpg";
import img2 from "../img/Sony 2.jpg";
import Button from 'react-bootstrap/Button';;

function Producs() {
  return (
    <>
      <div className="container">
        <div >
          <div style={{ float: 'left',  padding: '5px', width:'250px' }}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: img1,
                },
                largeImage: {
                  src: img2,
                  width: 1200,
                  height: 1800,
                },
              }}
            />
          </div>
          <h3>SONY Alpha ILCE-7M3 Full Frame Mirrorless Camera Body Only Featuring Eye AF and 4K movie recording  (Black)</h3>
          <p>Special price</p>
          <h2>₹1,27,489</h2>
          <Button variant="primary" style={{margin: '5px'}}>Add To Cart</Button>
      <Button variant="secondary">Buy</Button>
        </div>
      </div>
    </>
  );
}

export default Producs;
