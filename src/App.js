import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import Select from "react-select";

const options_1 = [
  { value: "and", label: "AND" },
  { value: "or", label: "OR" },
];

const options_2 = [
  { value: "name", label: "Name" },
  { value: "screen_name", label: "Screen Name" },
  { value: "followers_count", label: "Followers" },
  { value: "following_count", label: "Following" },
  { value: "location", label: "Location" },
  { value: "verified", label: "Verified" },
];

const column_3_options_1 = [{ value: "CONTAINS", label: "contains" }];

const column_3_options_2 = [
  { value: "gte", label: ">=" },
  { value: "lte", label: "<=" },
];

const column_3_options_3 = [{ value: "equals", label: "Equals" }];

const column_4_options_1 = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

const filterObj = {
  conditions: [
    {
      id: "name",
      operator: "CONTAINS",
      value: "Redef",
    },
  ],
};

const Filter = ({ options = [], defaultValue = {} }) => {
  return <Select options={options} defaultValue={defaultValue} />;
};

const FirstField = ({ index = 0 }) => {
  if (index === 0) {
    return <Col>Where</Col>;
  } else {
    return (
      <Col>
        <Filter options={options_1} />
      </Col>
    );
  }
};

const SecondField = ({ condition }) => {
  const defaultValue = options_2.filter((opt) => opt.value === condition.id);
  return (
    <Col>
      <Filter options={options_2} defaultValue={defaultValue} />
    </Col>
  );
};

const ThirdField = ({ options = [], condition = {} }) => {
  const { id = "", operator = "" } = condition;
  if (["name", "screen_name", "location"].includes(id)) {
    const defaultValue = column_3_options_1.filter(
      (opt) => opt.value === operator
    );
    return (
      <Col>
        <Filter options={column_3_options_1} defaultValue={defaultValue} />
      </Col>
    );
  } else if (["followers_count", "following_count"].includes(id)) {
    const defaultValue = column_3_options_2.filter(
      (opt) => opt.value === operator
    );
    return (
      <Col>
        <Filter options={column_3_options_2} defaultValue={defaultValue} />
      </Col>
    );
  } else {
    const defaultValue = column_3_options_3.filter(
      (opt) => opt.value === operator
    );
    return (
      <Col>
        <Filter options={column_3_options_3} defaultValue={defaultValue} />
      </Col>
    );
  }
};

const FourthField = ({ condition = {} }) => {
  const { value } = condition;
  debugger;
  if (["Yes", "No"].includes(value)) {
    const defaultValue = column_4_options_1.filter(
      (opt) => opt.value === value
    );
    return (
      <Col>
        <Filter options={column_4_options_1} defaultValue={defaultValue} />
      </Col>
    );
  } else {
    return (
      <Col>
        <Form.Group>
          <Form.Control type="text" value={value} placeholder="Password" />
        </Form.Group>
      </Col>
    );
  }
};

const FilterField = ({ condition, index }) => {
  return (
    <React.Fragment>
      <Row>
        <FirstField index={index} />
        <SecondField condition={condition} />
        <ThirdField condition={condition} />
        <FourthField condition={condition} />
        <Col>
          <span>Delete</span>
        </Col>
      </Row>
    </React.Fragment>
  );
};

const App = () => {

  const addConditionField = () => {
    debugger
  }

  return (
    
    <Container>
      <Row>
        <Col>
          <div className="p-4 border my-4">
            {filterObj.conditions.map((condition, i) => {
              return <FilterField key={i} index={i} condition={condition} />;
            })}
            <Button onClick={() => addConditionField()}>+ Add Filter</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
