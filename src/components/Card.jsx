import React from "react";
import { Card, Button } from  'react-bootstrap' ;

const SingleCard = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Pokemon </Card.Title>
          <Card.Text>
          <p>Nombre</p>
          </Card.Text>
          <Button variant="primary">Ver mas</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleCard;
