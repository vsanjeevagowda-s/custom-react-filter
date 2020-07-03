import React, { useContext } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Select from "react-select";

import { TableContext } from "../context/TableContext";

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
  { value: true, label: "Yes" },
  { value: true, label: "No" },
];

const FirstField = ({ index = 0 }) => {
  const { tableContextFun } = useContext(TableContext);
  if (index === 0) {
    return <Col>Where</Col>;
  } else {
    return (
      <Col>
        <Select
          onChange={() => {
            tableContextFun();
          }}
          options={options_1}
        />
      </Col>
    );
  }
};

const SecondField = ({ condition = {}, index = 0 }) => {
  const { tableContextFun } = useContext(TableContext);

  const defaultValue = options_2.filter((opt) => opt.value === condition.id);
  return (
    <Col>
      <Select
        onChange={(opt) => {
          tableContextFun({
            type: "ON_SECOND_FIELD_SELECT",
            action: { opt, index },
          });
        }}
        options={options_2}
        value={defaultValue}
      />
    </Col>
  );
};

const ThirdField = ({ options = [], condition = {}, index = 0 }) => {
  const { id = "", operator = "" } = condition;
  const { tableContextFun } = useContext(TableContext);
  if (["name", "screen_name", "location"].includes(id)) {
    const defaultValue = column_3_options_1.filter(
      (opt) => opt.value === operator
    );
    return (
      <Col>
        <Select
          onChange={(opt) => {
            tableContextFun({
              type: "ON_THIRD_FIELD_SELECT",
              action: { opt, index },
            });
          }}
          options={column_3_options_1}
          value={defaultValue}
        />
      </Col>
    );
  } else if (["followers_count", "following_count"].includes(id)) {
    const defaultValue = column_3_options_2.filter(
      (opt) => opt.value === operator
    );
    return (
      <Col>
        <Select
          onChange={(opt) => {
            tableContextFun({
              type: "ON_THIRD_FIELD_SELECT",
              action: { opt, index },
            });
          }}
          options={column_3_options_2}
          value={defaultValue}
        />
      </Col>
    );
  } else {
    const defaultValue = column_3_options_3.filter(
      (opt) => opt.value === operator
    );
    return (
      <Col>
        <Select
          onChange={(opt) => {
            tableContextFun({
              type: "ON_THIRD_FIELD_SELECT",
              action: { opt, index },
            });
          }}
          options={column_3_options_3}
          value={defaultValue}
        />
      </Col>
    );
  }
};

const FourthField = ({ condition = {}, index = 0 }) => {
  const { tableContextFun } = useContext(TableContext);
  const { id = "", value = "" } = condition;
  if (["name", "screen_name", "location"].includes(id)) {
    return (
      <Col>
        <Form.Group>
          <Form.Control
            onChange={(e) =>
              tableContextFun({
                type: "ON_FOURTH_FIELD_CHANGE",
                action: e,
              })
            }
            type="text"
            value={value}
            placeholder="value"
          />
        </Form.Group>
      </Col>
    );
  } else if (["followers_count", "following_count"].includes(id)) {
    return (
      <Col>
        <Form.Group>
          <Form.Control
            onChange={(e) =>
              tableContextFun({
                type: "ON_FOURTH_FIELD_CHANGE",
                action: e,
              })
            }
            type="number"
            value={value}
            placeholder="value"
          />
        </Form.Group>
      </Col>
    );
  } else {
    const defaultValue = column_4_options_1.filter(
      (opt) => opt.value === value
    );
    return (
      <Col>
        <Select
          onChange={(opt) => {
            tableContextFun({
              type: "ON_FOURTH_FIELD_SELECT",
              action: { opt, index },
            });
          }}
          className="mb-3"
          value={defaultValue}
          options={column_4_options_1}
        />
      </Col>
    );
  }
};

const FilterField = ({ condition = {}, index = 0 }) => {
  const { tableContextFun } = useContext(TableContext);
  return (
    <React.Fragment>
      <Row>
        <FirstField index={index} />
        <SecondField index={index} condition={condition} />
        <ThirdField index={index} condition={condition} />
        <FourthField index={index} condition={condition} />
        <Col>
          <div className="h-75 d-flex flex-row align-items-center">
            <i
              class="fa fa-trash cursor-pointer"
              onClick={() =>
                tableContextFun({
                  type: "REMOVE_CONDITION_OBJECT_FROM_CONDITIONS_ARRAY",
                  action: { index },
                })
              }
            ></i>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FilterField;
