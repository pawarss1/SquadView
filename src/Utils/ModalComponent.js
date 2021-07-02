import "./utility.css";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ModalComponent(props) {
  const handleClose = () => props.setShowModal(false);

  return (
    <>
      <Modal show={props.showModal} onHide={handleClose}>
        <Modal.Header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Modal.Title>Get Started with SquadVoice</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
