import React, { Component } from 'react';
import PropType from 'prop-types';
import { Table, Column } from 'react-rainbow-components';

class ContactsList extends Component {
    constructor(props){
        super(props);
        this.handleOnSort = this.handleOnSort.bind(this);
    }


    handleOnSort(event, field, nextSortDirection){
        this.props.onSort(event, field, nextSortDirection);
    }

    render(){
        return (
            <Table
                keyField="id"
                data={this.props.contacts}
                onSort={this.handleOnSort}
                sortDirection={this.props.sortDirection}
                sortedBy={this.props.sortedBy}
            >
                <Column header="Vorname" field="firstname"  sortable />
                <Column header="Nachmane" field="lastname"  sortable />
                <Column header="Büro" field="office" sortable />
                <Column header="Org" field="organisation" sortable />
            </Table>
        );
    }



}

ContactsList.propType = {
    contacts: PropType.array.isRequired,
    sortedBy: PropType.string.isRequired,
    sortDirection: PropType.string.isRequired,
    onSort: PropType.func.isRequired,
}

export default ContactsList;