import React from "react";
import { Modal, Button, Image, Container, Row } from "react-bootstrap";

const CardDetail = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Nombre pokemon</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Image src="https://via.placeholder.com/350X150" fluid />
          </Row>
          <Row>texto</Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardDetail;
