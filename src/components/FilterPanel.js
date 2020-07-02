import React, { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";

// ================CUSTOM COMPONENT
import { TableContext } from '../context/TableContext';
import FilterField from './FilterField'
// ================CUSTOM COMPONENT - END

const FilterPanel = () => {

  const { conditions, tableContextFun } = useContext(TableContext);
  console.log('frontend','tableContextFun', tableContextFun)
  console.log('frontend','conditions', conditions)
  const addConditionField = () => {
    debugger
  }
  
  return (
    <Row>
      <Col>
        <div className="p-4 border my-4">
          {/* {filterObj.conditions.map((condition, i) => { */}
          {conditions.map((condition, i) => {
            return <FilterField key={i} index={i} condition={condition} />;
          })}
          <Button onClick={() => addConditionField()}>+ Add Filter</Button>
        </div>
      </Col>
    </Row>
  );
};


export default FilterPanel;