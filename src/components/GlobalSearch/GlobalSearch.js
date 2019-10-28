import React, { Component } from 'react';
import { Input } from 'react-rainbow-components';

class GlobalSearch extends Component {

    constructor(){
        super();
        this.searchInput=React.createRef();
    }

    componentDidMount(){
        this.searchInput.current.focus();
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
                />
        );
    }
}

export default GlobalSearch;