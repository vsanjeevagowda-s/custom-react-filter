import React, { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";

// ================CUSTOM COMPONENT
import { TableContext } from '../context/TableContext';
import FilterField from './FilterField'
// ================CUSTOM COMPONENT - END

const FilterPanel = () => {

  const { conditions, tableContextFun } = useContext(TableContext);
  return (
    <Row>
      <Col>
        <div className="p-4 border my-4">
          {conditions.map((condition, i) => {
            return <FilterField key={i} index={i} condition={condition} />;
          })}
          <Button onClick={() => tableContextFun({
            type: "ADD_FILTER_TEMPLATE_TO_CONDITIONS"
          })}>+ Add Filter</Button>
        </div>
      </Col>
    </Row>
  );
};


export default FilterPanel;