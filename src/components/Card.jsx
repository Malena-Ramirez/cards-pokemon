import React from "react";
import { Card } from  'react-bootstrap' ;

const Card = () => {
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

export default Card;
