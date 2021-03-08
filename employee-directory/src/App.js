import React, { Component } from 'react';
import Table from "./components/Table";
import employee from "./employee.json";

  
class App extends Component {
  
  state = {
    employee
  };
  
  render() {
    return (
      <div>
        {this.state.employee.map(employee => (
          <Table
            // removeFriend={this.removeFriend}
            // id={employee.id}
            // key={friend.id}
            name={employee.name}
            occupation={employee.occupation}
            sign={employee.sign}
            food={employee.food}
          />
        ))}
      </div>
    );
  }
}

export default App;
