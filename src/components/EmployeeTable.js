import React from 'react';
import * as ReactBootstrap from "react-bootstrap"

const EmployeeTable = (props) => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <ReactBootstrap.Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th scope="col">Picture</th>
                            <th onClick={() => props.sortBy("first")} scope="col">Full Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.map(elem => {
                                return (
                                    <tr>
                                        <td><img src={elem.picture.medium} /></td>
                                        <td>{elem.name.first} {elem.name.last}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.phone}</td>
                                        <td>{elem.dob.date}</td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </ReactBootstrap.Table >
            </div>
        </div>


    );

}

// const clickLine = (props, elem) => {
//     props.clickLine(elem)
// }
export default EmployeeTable;