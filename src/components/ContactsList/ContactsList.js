import React, {  } from 'react';
import PropType from 'prop-types';
import { Table, Column } from 'react-rainbow-components';

const ContactsList = (props) => {
    const handleOnSort = (event, field, nextSortDirection) => {
        props.onSort(field, nextSortDirection);
    }

    return (
        <Table
            keyField="id"
            data={props.contacts}
            onSort={handleOnSort}
            sortDirection={props.sortDirection}
            sortedBy={props.sortedBy}
        >
            <Column header="Vorname" field="firstname"  sortable />
            <Column header="Nachmane" field="lastname"  sortable />
            <Column header="Büro" field="office" sortable />
            <Column header="Org" field="organisation" sortable />
        </Table>
    );

}

ContactsList.propType = {
    contacts: PropType.array.isRequired,
    sortedBy: PropType.string.isRequired,
    sortDirection: PropType.string.isRequired,
    onSort: PropType.func.isRequired,
}

export default ContactsList;