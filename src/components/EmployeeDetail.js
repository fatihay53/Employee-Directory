import React from "react";
import * as ReactBootstrap from "react-bootstrap"
import employe from "./../employee.json"

function EmployeeDetail(props) {
  return (
    <ReactBootstrap.Table striped bordered hover variant="dark">
      <thead>
        <tr key={props.key}>
          <img src={props.Image}/>
          <td>{props.name}</td>
          <td>{props.LastName}</td>
          <td>{props.Phone}</td>
          <td>{props.Email}</td>
          <td>{props.DOB}</td>
        </tr>
      </thead>
      <tbody>
        {/* {employe.map()} */}
      </tbody>
    </ReactBootstrap.Table>
  );
}

export default EmployeeDetail;
