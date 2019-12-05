import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Ldap from '../../util/Ldap';
import GlobalSearch from '../GlobalSearch/GlobalSearch';
import ContactsList from '../ContactsList/ContactsList';


const App = () => {
    const [contacts, setContacts] = useState([]);
    const [sortedBy, setSortedBy] = useState("");
    const [sortDirection, setSortDirection] = useState("asc");

    // getContacts() {
    //     this.setState({ contacts: Ldap.getContacts() });
    // }

    const searchData = (searchString) => {
        const ldapConntacts = (Ldap.getContacts());
        const filteredContacts = [];
        ldapConntacts.forEach(contact => {            
            if(JSON.stringify(contact).includes(searchString)){
                filteredContacts.push(contact);
            };            
        })   
        setContacts(filteredContacts); 
    }   

    const sortData = (field, nextSortDirection)  => {
        let newData = [...contacts];

        const key = x => x[field];
        const reverse = nextSortDirection === 'asc' ? 1 : -1;

        const sortedData = newData.sort((a, b) => {
            a = key(a);
            b = key(b);
            return reverse * ((a > b) - (b > a));
        });

        setContacts(sortedData);
        setSortedBy(field);
        setSortDirection(nextSortDirection);
    }      
    
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to
                reload.
            </p>
            <GlobalSearch onSearch={searchData} />
            <ContactsList
                contacts={contacts}
                onSort={sortData}
                sortedBy={sortedBy}
                sortDirection={sortDirection}
            />
        </div>
    );
}

export default App;
