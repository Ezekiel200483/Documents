
import "./App.css";
import React from "react";

import products from "./product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import {Container, Card, Row, Col} from "react-bootstrap";
import myImage from './robot.png';







function App() {
  let firstName = '';
  const handleSubmit = (e) => {
    e.preventDefault();

   
  };

  return (
    <div className="main-container">
      {/* Form container */}

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstNameInput">Enter your first name:</label>
          <input  onChange= {(e)=>firstName=e.target.value}  type="text" id="firstNameInput" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Cards container */}
      <Container>
        <div className="cards-container">
          {products.map((product, index) => (
            <Card key={index} className="mb-3">
              <Row>
                <Col md={6}>
                  <Image image={product.image} />
                </Col>
                <Col md={6}>
                  <Card.Body>
                    <div className="product-details">
                      <Name name={product.name} />
                      <Price price={product.price} />
                      <Description description={product.description} />
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </div>
      </Container>

      {/* Greeting section */}
      <div className="greeting text-center mt-3">
        {firstName && (
          <>
            <h3>
              <strong>Hello, {firstName}!</strong>
            </h3>
            {/* Display image if first name is provided */}
            <img src={myImage} alt="My Image" className="myImage" />
          </>
        )}
        {!firstName && <strong>Hello, there!</strong>}
      </div>
    </div>
  );
}

export default App;
