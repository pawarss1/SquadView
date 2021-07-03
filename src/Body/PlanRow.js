import "./body.css";
import configData from "../../config/development.json";
import { Container, Row, Col } from "react-bootstrap";
import Plan from "./Plan";
import Enterprise from "./Enterprise";

export default function PlanRow(props) {
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
            <Enterprise data={configData.enterprisePlan} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
