import React from 'react';
import '../../stylesheets/filters/FilterBySelect.scss';

const FilterByStatus = props => {

    const handleChange = (ev) =>{
        props.handleFilter({
            key: 'status', 
            value: ev.target.value});
    }

    return(
        <>
        <label 
        className= "form__label"
        htmlFor="status">
            Status:
        </label>
        <select 
        className= "form__select"
        name="status" 
        id="status"
        onChange={handleChange}>
            <option value="all">All statuses</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
        </>
    )
}

export default FilterByStatus;
