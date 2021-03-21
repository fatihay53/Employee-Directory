import React from "react";
// import OmdbContainer from "./componentd/OmdbContainer";
import employe from "./employee.json"
import * as ReactBootstrap from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
// import EmployeeDetail from "./componentd/EmployeeDetail"
// import Contaier from "./component/Container"
import Header from "./components/Header"

function App() {
  const [SearchTerm, setsearchTerm] = useState("")
  // const [filterredUsers,setFilteredUsers]=useState({})
  // const renderingEmployee = (employee, index) => {

  //   return (
    
     
  //       <tr key ={index}>
  //         <img src={employee.picture.medium}/>
  //         <td>{employee.name.first}</td>
  //         <td>{employee.phone}</td>
  //         <td>{employee.email}</td>
  //         <td>{employee.dob.date}</td>
  //       </tr>
   
  //   )
  // }
  return (
    <div className="App">
      <Header></Header>
      <div style={{ alignItems: "center" }}>
        <input style={{ alignSelf: "center" }} type="text" onChange={event => { setsearchTerm(event.target.value) }} />
      </div>

      {employe.filter((val) => {
        if (SearchTerm == "") {
          return val
        } else if (val.name.first.toLocaleLowerCase().includes(SearchTerm.toLocaleLowerCase())) {
          return val
        }
      }).map((employee, key) => {

        return (
            <ReactBootstrap.Table striped bordered hover>
            <tdead>
            <tr>
              <img src={employee.picture.medium}></img>
              <td>{employee.name.first}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.dob.date}</td>
            </tr>
            </tdead>

            </ReactBootstrap.Table>

        )
      })
      }
    </div >


  );
}

export default App;
