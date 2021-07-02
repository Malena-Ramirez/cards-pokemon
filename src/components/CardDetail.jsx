import React from "react";
import { Modal, Button, Image, Container, Row } from "react-bootstrap";

const CardDetail = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">{props.pokemon.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Image src={props.pokemon.img} fluid />
          </Row>
          <Row>
            Habilidades: {props.pokemon.abilities}. Experiencia: {props.pokemon.experience}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardDetail;
