import React, { Component } from 'react';
import Table from "./components/Table";
import Header from "./components/Header";
import Rows from "./components/Rows";
import SearchForm from "./components/SearchForm";
import Button from "./components/Button";
import MainList from "./employee.json";

  
class App extends Component {
  
  state = {
    employee: MainList,
    search: ""
  };

  searchPerson = (search) => {
    const results = MainList.filter(employee =>
      employee.name.toLowerCase().includes(search.toLowerCase())
    );
    this.setState({ employee: results });
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchPerson(this.state.search)
  };

  aries = () => {
    const aries = MainList.filter(employee => employee.sign === 'Aries');
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
