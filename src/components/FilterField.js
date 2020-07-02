
import React from "react";
import { Row, Col, Form } from "react-bootstrap";
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

const CustomSelect = ({ options = [], defaultValue = {} }) => {
  return <Select options={options} defaultValue={defaultValue} />;
};


const FirstField = ({ index = 0 }) => {
  if (index === 0) {
    return <Col>Where</Col>;
  } else {
    return (
      <Col>
        <CustomSelect options={options_1} />
      </Col>
    );
  }
};

const SecondField = ({ condition }) => {
  const defaultValue = options_2.filter((opt) => opt.value === condition.id);
  return (
    <Col>
      <CustomSelect options={options_2} defaultValue={defaultValue} />
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
        <CustomSelect options={column_3_options_1} defaultValue={defaultValue} />
      </Col>
    );
  } else if (["followers_count", "following_count"].includes(id)) {
    const defaultValue = column_3_options_2.filter(
      (opt) => opt.value === operator
    );
    return (
      <Col>
        <CustomSelect options={column_3_options_2} defaultValue={defaultValue} />
      </Col>
    );
  } else {
    const defaultValue = column_3_options_3.filter(
      (opt) => opt.value === operator
    );
    return (
      <Col>
        <CustomSelect options={column_3_options_3} defaultValue={defaultValue} />
      </Col>
    );
  }
};

const FourthField = ({ condition = {} }) => {
  const { value } = condition;
  if (["Yes", "No"].includes(value)) {
    const defaultValue = column_4_options_1.filter(
      (opt) => opt.value === value
    );
    return (
      <Col>
        <CustomSelect options={column_4_options_1} defaultValue={defaultValue} />
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

export default FilterField;