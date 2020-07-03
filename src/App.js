import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import { Container } from "react-bootstrap";

// ================CUSTOM COMPONENT

import FilterPanel from "./components/FilterPanel";
import UsersList from './components/UsersList';
import TableContextProvider from "./context/TableContext";

// ================CUSTOM COMPONENT - END
const App = () => {
  return (
    <TableContextProvider>
      <Container>
        <FilterPanel />
        <UsersList />
      </Container>
    </TableContextProvider>
  );
};

export default App;
