import "./body.css";
import { useEffect } from "react";
import configData from "../../config/development.json";
import { Container, Row, Col } from "react-bootstrap";
import Plan from "./Plan";

export default function PlanRow(props) {
  return (
    <div>
      <br />
      <Container>
        <Row>
          {configData[configData.priceRanges[props.selectedIndex]].map(
            (data, index) => (
              <Col key={index}>
                <Plan data={data} />
              </Col>
            )
          )}
        </Row>
      </Container>
    </div>
  );
}
