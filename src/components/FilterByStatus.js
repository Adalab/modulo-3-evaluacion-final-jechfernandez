import React from 'react';

const FilterByStatus = props => {

    const handleChange = (ev) =>{
        props.handleFilter({
            key: 'name', 
            value: ev.target.value});
    }

    return(
        <>
        <label htmlFor="status">
            Status:
        </label>
        <select 
        name="status" 
        id="status"
        onChange={handleChange}>
            <option value="all">All statuses</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
        </>
    )
}

export default FilterByStatus;
