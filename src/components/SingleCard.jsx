import React from "react";
import { Card, Button } from "react-bootstrap";

const SingleCard = (props) => {
  return (
    <div>
      <Card border="warning" className="single_card bg-light text-center" style={{ width: "18rem" }}>
        <Card.Img avariant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <p>{props.name}</p>
          </Card.Text>
          <Button variant="btn btn-info" onClick={props.onClick} id={props.id}>
            Ver mas
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleCard;
