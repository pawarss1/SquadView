import "./body.css";
import configData from "../../config/development.json";
import { Container, Row, Col } from "react-bootstrap";
import Plan from "./Plan";

export default function PlanRow(props) {
  /*  Assumption 1.2- In the screenshot there is misisng plan, for "Qualified 60"
      I did read the FAQ's but was still confused, so reached out to Meenakshi and Bhavya,
      but got no response about the clarification. 
      I was confused about that which plan was supposed to be skipped. For eg- In screenshot, 
      for $100k-$200k, plan 60 was missing, so was it intensional or there is some logic behind it. 
      As there was no response, so I displayed all the 4 plans (20, 40, 60, 80) along with the enterprise plan, 
      resulting in 5 plans total.
  */
  return (
    <div>
      <br />
      <Container>
        <Row>
          {configData[configData.priceRanges[props.selectedIndex]].map(
            (data, index) => (
              <Col key={index}>
                <Plan data={data} index={index} />
              </Col>
            )
          )}
          <Col>
            <Plan data={configData.enterprisePlan} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
