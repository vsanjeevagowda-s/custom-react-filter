import React, { useContext } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import { TableContext } from "../context/TableContext";

const UsersList = () => {
  const { usersList } = useContext(TableContext);

  console.log("frontend", "usersList:", usersList);
  return (
    <Row>
      <Col>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Screen Name</th>
                <th>Followers</th>
                <th>Followers</th>
                <th>Location</th>
                <th>Verified</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((user = {}, i) => {
                const {
                  name = "",
                  screen_name = "",
                  followers = "-",
                  following = "-",
                  location = "",
                  verified = "-"
                } = user;
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{name}</td>
                    <td>{screen_name}</td>
                    <td>{followers}</td>
                    <td>{following}</td>
                    <td>{location}</td>
                    <td>
                      {verified ? (
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-success"
                        />
                      ) : (
                        <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Col>
    </Row>
  );
};

export default UsersList;
