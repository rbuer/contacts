import React, { useEffect, useRef } from 'react';
import PropType from 'prop-types';
import { Input } from 'react-rainbow-components';

const GlobalSearch = (props) => {
    const searchInput=useRef(null);;

    useEffect(() => {
        searchInput.current.focus();   
    });

    const handleSearchKeyUp = (e) => {
        if(e.key==='Enter'){
            props.onSearch(e.target.value);
        }
    }

    return (
            <Input
                label="Input Search"
                placeholder="Search"
                type="search"
                className="rainbow-p-around_medium"
                id='globalSearch'
                ref={searchInput}
                onKeyDown={handleSearchKeyUp}
            />
    );
}

GlobalSearch.propType = {
    onSearch: PropType.func.isRequired,
}

export default GlobalSearch;