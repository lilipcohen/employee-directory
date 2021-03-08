import React, { Component } from 'react';
import Table from "./components/Table";
import Header from "./components/Header";
import Rows from "./components/Rows";
import employee from "./employee.json";

  
class App extends Component {
  
  state = {
    employee
  };
  
  render() {
    return (
      <div>
          <Table>
            <Header />
          {this.state.employee.map(employee => (
          <Rows
            name={employee.name}
            occupation={employee.occupation}
            sign={employee.sign}
            food={employee.food}
            />
          ))}
          </Table>
      </div>
    );
  }
}

export default App;
