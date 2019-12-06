//var ldapper = require('ldapjs');

const Ldap={
    contacts: [],
    loadContacts(){
        return [
            {
            id: '1',
            firstname: "bla6",
            lastname: "blubb",
            office: "fuzz",
            organisation: "SPD",
            },
            {
                id: '2',
                firstname: "bla1",
                lastname: "blubb1",
                office: "fuzz1",
                organisation: "SPD1",
            },
            {
                id: '3',
                firstname: "bla2",
                lastname: "blubb2",
                office: "fuzz2",
                organisation: "SPD2",
            },
            {
                id: '4',
                firstname: "bl3a",
                lastname: "blubb3",
                office: "fuzz3",
                organisation: "SPD3",
            },
        ];
    },
    getContacts(){    
        if(this.contacts.length === 0){        
            this.contacts = this.loadContacts();
        }
        return this.contacts;
    }
}

export default Ldap;