import React, { useState } from "react";

// ================CUSTOM COMPONENT

import usersList from './data.json';
export const TableContext = React.createContext();

const filterObj = {
  conditions: [
    {
      id: "name",
      operator: "CONTAINS",
      value: "Redef",
    },
  ],
};

// ================CUSTOM COMPONENT - END

const onSecondFieldSelect = ({ conditions, action, setConditions }) => {
  const conditionsCpy = JSON.parse(JSON.stringify(conditions));
  const cond = conditionsCpy[action.index];
  cond.id = action.opt.value;
  cond.operator = '';
  setConditions(conditionsCpy);
};

const onThirdFieldSelect = ({ conditions, action, setConditions }) => {
  const conditionsCpy = JSON.parse(JSON.stringify(conditions));
  const cond = conditionsCpy[action.index];
  cond.operator = action.opt.value;
  setConditions(conditionsCpy);
};

const onFourthFieldSelect = ({ conditions, action, setConditions }) => {
  const conditionsCpy = JSON.parse(JSON.stringify(conditions));
  const cond = conditionsCpy[action.index];
  cond.value = action.opt.value;
  setConditions(conditionsCpy);
};

const onFourthFieldChange = ({ conditions, action, setConditions }) => {
  const conditionsCpy = JSON.parse(JSON.stringify(conditions));
  const cond = conditionsCpy[action.index];
  cond.value = action.target.value;
  setConditions(conditionsCpy);
}

const addFilterField = ({ conditions, action, setConditions }) => {
  const conditionsCpy = JSON.parse(JSON.stringify(conditions));
  const filterFieldTemplate = {
    id: "name",
    operator: "CONTAINS",
    value: "",
  }
  conditionsCpy.push(filterFieldTemplate)
  setConditions(conditionsCpy);
}

const removeCondition = (props = {}) => {
  const { conditions = {}, action = {}, setConditions } = props;
  const { index = 0 } = action;
  const conditionsCpy = JSON.parse(JSON.stringify(conditions));
  const newCopy = conditionsCpy.filter((cond, i) => {
    if(index !== i) return cond;
  })
  console.log('frontend','newCopy', newCopy);
  setConditions(newCopy);
}

const TableContextProvider = ({ children = {} }) => {
  const [conditions = [], setConditions] = useState(filterObj.conditions);

  const tableContextFun = (props = {}) => {
    const { type = '', action = {} } = props
    switch (type) {
      case "ON_SECOND_FIELD_SELECT":
        onSecondFieldSelect({ conditions, action, setConditions });
        return;
      case "ON_THIRD_FIELD_SELECT":
        onThirdFieldSelect({ conditions, action, setConditions });
        return;
      case "ON_FOURTH_FIELD_SELECT":
        onFourthFieldSelect({ conditions, action, setConditions })
        return;
      case 'ON_FOURTH_FIELD_CHANGE':
        onFourthFieldChange({ conditions, action, setConditions })
        return;
      case 'ADD_FILTER_TEMPLATE_TO_CONDITIONS':
        addFilterField({ conditions, action, setConditions });
      return;
      case 'REMOVE_CONDITION_OBJECT_FROM_CONDITIONS_ARRAY':
        removeCondition({ conditions, action, setConditions })
      return;
      default:
        console.log("unknown type");
    }
  };

  return (
    <TableContext.Provider value={{ conditions, tableContextFun, usersList }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableContextProvider;
