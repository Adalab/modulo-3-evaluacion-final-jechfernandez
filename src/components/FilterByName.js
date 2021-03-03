import React from 'react';

const FilterByName = props => {
    return(
        <>
        <label htmlFor="name">
            Filter by name:
        </label>
        <input type="text" name="name" id="name"/>
        </>
    )
}

export default FilterByName;