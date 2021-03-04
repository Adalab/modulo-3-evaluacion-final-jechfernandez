import React from 'react';

const FilterByStatus = props => {

    const handleChange = (ev) =>{
        props.handleFilter({
            key: 'status', 
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
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
        </select>
        </>
    )
}

export default FilterByStatus;
