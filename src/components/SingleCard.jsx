import React from "react";
import { Card, Button } from "react-bootstrap";

const SingleCard = (props) => {
  return (
    <div>
      <Card border="warning" className="single_card bg-light text-center" style={{ width: "18rem" }}>
        <Card.Img avariant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Pokemon </Card.Title>
          <Card.Text>
            <p>Nombre</p>
          </Card.Text>
          <Button variant="btn btn-info" onClick={props.onClick}>
            Ver mas
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleCard;
