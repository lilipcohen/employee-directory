import React, { Component } from 'react';
import Table from "./components/Table";
import Header from "./components/Header";
import Rows from "./components/Rows";
import SearchForm from "./components/SearchForm";
import Button from "./components/Button";
import employee from "./employee.json";

  
class App extends Component {
  
  state = {
    employee,
    search: ""
  };

  searchPerson = (employee) => {
    const results = employee.filter(employee =>
      employee.toLowerCase().includes(employee.name.toLowerCase())
    );
    this.setState(results);// API.search(query)
      // .then(res => this.setState({ result: res.data }))
      // .catch(err => console.log(err));
  };


  aries = () => {
    const aries = this.state.employee.filter(employee => employee.sign === 'Aries');
    // Set this.state.friends equal to the new friends array
    this.setState({ employee: aries });
  }
  
  render() {
    return (
      <div>
          <Table>
            <Header />
          {this.state.employee.map(employee => (
            <Rows
            key={employee.id}
            name={employee.name}
            occupation={employee.occupation}
            sign={employee.sign}
            food={employee.food}
            />
          ))}
        </Table>
        <br />
        <br />
        <SearchForm
        value={this.state.search}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
        />
        <Button
          aries={this.aries}
        />
      </div>
    );
  }
}

export default App;
