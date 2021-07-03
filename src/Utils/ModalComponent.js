import "./utility.css";
import { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";
import Checkbox from "./Checkbox";

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
          <Modal.Title>Get Started with SquadVoice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Container>
              <h5>Plan Selected: {props.planSelected}</h5>
              <Row>
                <Col>
                  <Label text="Name" />
                  <Input />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label text="E-mail Address" />
                  <Input />
                </Col>
                <Col>
                  <Label text="Phone No." />
                  <Input />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label text="Number of leads you generate in a month" />
                  <Select
                    listOfOptions={["-", "0+", "20+", "40+", "60+", "100+"]}
                  />
                </Col>
                <Col>
                  <Label text="Total leads in your CRM" />
                  <Select
                    listOfOptions={["-", "0+", "20+", "40+", "60+", "100+"]}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label text="Which CRM do you use?" />
                  <Select
                    listOfOptions={[
                      "-",
                      "Salesforce",
                      "Zendesk",
                      "Pipedrive",
                      "Zoho",
                      "Nutshell",
                      "Other"
                    ]}
                  />
                </Col>
                <Col>
                  <Label text="No. of Agents" />
                  <Select
                    listOfOptions={["-", "0+", "20+", "40+", "60+", "100+"]}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label text="What are your biggest lead sources?" />
                  <Checkbox />
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
