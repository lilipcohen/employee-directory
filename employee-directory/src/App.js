import React, { Component } from 'react';
import Table from "./components/Table";
import Header from "./components/Header";
import Rows from "./components/Rows";
import SearchForm from "./components/SearchForm";
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

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState(this.state.search);
  };
  
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
      </div>
    );
  }
}

export default App;
