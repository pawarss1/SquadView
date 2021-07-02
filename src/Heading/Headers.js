import "./header.css";
import { Container, Row, Col } from "react-bootstrap";
import Tab from "./Tab";
import { headerData } from "./data.js";

export default function Headers(props) {
  const handleTabChange = (tabIndex) => {
    props.setSelectedIndex(tabIndex);
  };
  return (
    <div>
      <br />
      <Container>
        <Row className="g-0">
          {headerData.map((data, index) => (
            <Col key={index}>
              <Tab
                range={data}
                index={index}
                selectedIndex={props.selectedIndex}
                headerDatalength={headerData.length}
                handleTabChange={handleTabChange}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
