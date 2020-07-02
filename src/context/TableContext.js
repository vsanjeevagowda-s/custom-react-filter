import  React, { useState }  from 'react';

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

const TableContextProvider = ({ children }) => {

const [conditions, setConditions] = useState(filterObj.conditions)

const tableContextFun = () => {
  debugger
}

  return (
    <TableContext.Provider value={{ conditions, tableContextFun }}>
      {children}
    </TableContext.Provider>
  );
}

export default TableContextProvider;

