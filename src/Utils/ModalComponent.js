import "./utility.css";
import { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import Input from "./Input";

export default function ModalComponent(props) {
  const handleClose = () => props.setShowModal(false);

  return (
    <>
      <Modal
        show={props.showModal}
        onHide={handleClose}
        dialogClassName="modal-40w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Get Started with SquadVoice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Container>
              <h5>Plan Selected: "Qualified 40"</h5>
              <Row>
                <Col>
                  Name
                  <Input />
                </Col>
              </Row>
              <Row>
                <Col>
                  E-mail Address
                  <Input />
                </Col>
                <Col>
                  Phone No.
                  <Input />
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
