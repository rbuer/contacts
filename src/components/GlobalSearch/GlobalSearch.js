import React, { Component } from 'react';
import PropType from 'prop-types';
import { Input } from 'react-rainbow-components';

class GlobalSearch extends Component {

    constructor(props){
        super(props);
        this.searchInput=React.createRef();
        this.handleSearchContacts=this.handleSearchContacts.bind(this);
        this.handleSearchKeyUp=this.handleSearchKeyUp.bind(this);
    }

    componentDidMount(){
        this.searchInput.current.focus();
    }

    handleSearchContacts(e){
        this.props.onSearch(e.target.value);
    }

    handleSearchKeyUp(e){
        if(e.key==='Enter'){
            this.handleSearchContacts(e);
        }
    }

    render() {
        return (
                <Input
                    label="Input Search"
                    placeholder="Search"
                    type="search"
                    className="rainbow-p-around_medium"
                    id='globalSearch'
                    ref={this.searchInput}
                    onKeyDown={this.handleSearchKeyUp}
                />
        );
    }
}

GlobalSearch.propType = {
    onSearch: PropType.func.isRequired,
}


export default GlobalSearch;