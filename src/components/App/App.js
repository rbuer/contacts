import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ldap from '../../util/Ldap'
import GlobalSearch from '../GlobalSearch/GlobalSearch';
import ContactsList from '../ContactsList/ContactsList'

class App extends Component {
   constructor(props){
       super(props);
       this.state = {
           contacts:[],
           sortedBy: undefined,
           sortDirection: 'asc',
       };
       this.searchContacts = this.searchContacts.bind(this);
       this.sortData = this.sortData.bind(this);
   }

   searchContacts(searchString){
        this.setState({ contacts:Ldap.search() });
   }

    sortData(event, field, nextSortDirection) {
        const { contacts } = this.state;

        let newData = [...contacts];

        const key = x => x[field];
        const reverse = nextSortDirection === 'asc' ? 1 : -1;

        const sortedData = newData.sort((a, b) => {
            a = key(a);
            b = key(b);
            return reverse * ((a > b) - (b > a));
        });

        this.setState({ contacts: sortedData, sortedBy: field, sortDirection: nextSortDirection });
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <GlobalSearch onSearch={this.searchContacts}/>
          <ContactsList contacts={this.state.contacts} onSort={this.sortData} sortedBy={this.state.sortedBy} sortDirection={this.state.sortDirection} />
      </div>
    );
  }
}

export default App;
