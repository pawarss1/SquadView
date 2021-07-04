import "./body.css";
import { useState } from "react";
import ModalComponent from "../Utils/ModalComponent";
import configData from "../../config/development.json";
import { Container, Row, Col } from "react-bootstrap";
import Plan from "./Plan";

export default function PlanRow(props) {
  /*  Assumption 1.2- In the screenshot there is misisng plan, for "Qualified 60"
      I did read the FAQ's but was still confused, so reached out to Meenakshi and Bhavya,
      but got no response about the clarification. 
      I was confused about that which plan was supposed to be skipped. For eg- In screenshot, 
      for $100k-$200k, plan 60 was missing, so was it intensional or there is some logic behind it. 
      As there was no response and the deadline was nearing, so I displayed all the 4 plans (20, 40, 60, 80) along with the enterprise plan, 
      resulting in 5 plans total. 
      But yes it can be easily implemented by skipping one of the plans too, if I get appropriate suggestion/ clarification from the team.
  */

  const [showModal, setShowModal] = useState(false);
  const [curDataPlan, setCurDataPlan] = useState(null);

  const handleShowModal = (dataPlan) => {
    setCurDataPlan(dataPlan);
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <div>
      <br />
      <Container>
        <Row>
          {configData[configData.priceRanges[props.selectedIndex]].map(
            (data, index) => (
              <Col key={index}>
                <Plan
                  data={data}
                  index={index}
                  handleShowModal={handleShowModal}
                />
              </Col>
            )
          )}
          <Col>
            <Plan
              data={configData.enterprisePlan}
              handleShowModal={handleShowModal}
              index="-999"
            />
          </Col>
        </Row>
      </Container>
      <ModalComponent
        showModal={showModal}
        setShowModal={setShowModal}
        planSelected={curDataPlan}
        text="Get Started with SquadVoice"
      />
    </div>
  );
}
