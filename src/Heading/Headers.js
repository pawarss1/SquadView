import "./header.css";
import { Container, Row, Col } from "react-bootstrap";
import Tab from "./Tab";
import { priceRanges } from "../../config/development.json";

export default function Headers(props) {
  const handleTabChange = (tabIndex) => {
    props.setSelectedIndex(tabIndex);
  };
  return (
    <div>
      <br />
      <Container>
        <Row className="g-0">
          {priceRanges.map((data, index) => (
            <Col key={index}>
              <Tab
                range={data}
                index={index}
                selectedIndex={props.selectedIndex}
                headerDatalength={priceRanges.length}
                handleTabChange={handleTabChange}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
