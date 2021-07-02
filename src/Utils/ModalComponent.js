import "./utility.css";
import { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";

export default function ModalComponent(props) {
  const handleClose = () => props.setShowModal(false);

  return (
    <>
      <Modal show={props.showModal} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Modal.Title>Get Started with SquadVoice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5>Plan Selected: "Qualified 40"</h5>
            Name
            <Container>
              <Row>
                <Col>
                  <input className="nameInput" />
                </Col>
              </Row>
              <Row>
                <Col sm="6" md="6">
                  E-mail Address
                  <input />
                </Col>
                <Col sm="6" md="6">
                  Phone No.
                  <input />
                </Col>
              </Row>
            </Container>
          </div>
          <Button>Submit</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
