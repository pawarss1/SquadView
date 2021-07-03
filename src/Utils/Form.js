import "./utility.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";
import CheckboxMultiValued from "./CheckboxMultiValued";
import CheckboxSingleValued from "./CheckboxSingleValued";
import { leadSources, sources } from "../../config/development.json";

export default function Form(props) {
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    phoneNo: null,
    leadsGeneratedPerMonth: null,
    totalLeads: null,
    crm: null,
    numOfAgents: null,
    biggestLeadSources: {}, // Can have multiple acceptable values. As the question is in Plural state.
    hearAboutUs: null
  });

  const [checkedIndex, setCheckedIndex] = useState(null);

  const updateFormData = (fieldName, value) => {
    const curFormData = { ...formData };
    curFormData[fieldName] = value;
    setFormData(curFormData);
  };

  const updateLeadSources = (index) => {
    const curFormData = { ...formData };
    const biggestLeadSourcesTemp = { ...curFormData.biggestLeadSources };
    if (biggestLeadSourcesTemp[leadSources[index]]) {
      delete biggestLeadSourcesTemp[leadSources[index]];
      // Remove the source from the list, as it already exists and the user has unchecked it.
    } else {
      biggestLeadSourcesTemp[leadSources[index]] = true;
    }
    curFormData.biggestLeadSources = biggestLeadSourcesTemp;
    setFormData(curFormData);
  };

  return (
    // Assumption 1.0- All the fields are required on the Form.

    <form
      onSubmit={(event) => {
        event.preventDefault();
        alert(JSON.stringify(formData));
      }}
    >
      <div>
        <Container>
          <h5>Plan Selected: {props.planSelected}</h5>
          <Row>
            <Col>
              <Label text="Name" />
              <Input
                required={true}
                updateFormData={updateFormData}
                fieldName="name"
                type="text"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label text="E-mail Address" />
              <Input
                required={true}
                fieldName="email"
                updateFormData={updateFormData}
                type="email"
              />
            </Col>
            <Col>
              <Label text="Phone No." />
              <Input
                required={true}
                fieldName="phoneNo"
                updateFormData={updateFormData}
                type="number"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label text="Number of leads you generate in a month" />
              <Select
                listOfOptions={["-", "0+", "20+", "40+", "60+", "100+"]}
                required={true}
                fieldName="leadsGeneratedPerMonth"
                updateFormData={updateFormData}
              />
            </Col>
            <Col>
              <Label text="Total leads in your CRM" />
              <Select
                listOfOptions={["-", "0+", "20+", "40+", "60+", "100+"]}
                required={true}
                fieldName="totalLeads"
                updateFormData={updateFormData}
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
                required={true}
                fieldName="crm"
                updateFormData={updateFormData}
              />
            </Col>
            <Col>
              <Label text="No. of Agents" />
              <Select
                listOfOptions={["-", "0+", "20+", "40+", "60+", "100+"]}
                required={true}
                fieldName="numOfAgents"
                updateFormData={updateFormData}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label text="What are your biggest lead sources?" />
              <div>
                {leadSources.map((leadSource, index) => {
                  return (
                    <CheckboxMultiValued
                      key={`${leadSource}${index}`}
                      text={leadSource}
                      fieldName="biggestLeadSources"
                      index={index}
                      updateSelectedItem={updateLeadSources}
                    />
                  );
                })}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Label text="How did you hear about us" />
              <div>
                {sources.map((source, index) => {
                  return (
                    <CheckboxSingleValued
                      key={`${source}${index}`}
                      text={source}
                      fieldName="hearAboutUs"
                      index={index}
                      checkedFlag={checkedIndex === index}
                      updateFormData={updateFormData}
                      setCheckedIndex={setCheckedIndex}
                    />
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
        <input type="submit" />
      </div>
    </form>
  );
}
