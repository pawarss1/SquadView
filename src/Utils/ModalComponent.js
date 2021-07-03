import "./utility.css";
import { Modal } from "react-bootstrap";
import Form from "./Form";

export default function ModalComponent(props) {
  const handleClose = () => props.setShowModal(false);

  return (
    <>
      <Modal
        show={props.showModal}
        onHide={handleClose}
        dialogClassName="modal-50w"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Get Started with SquadVoice</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form planSelected={props.planSelected} />
        </Modal.Body>
      </Modal>
    </>
  );
}
