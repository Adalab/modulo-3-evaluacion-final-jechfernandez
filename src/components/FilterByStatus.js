import React from 'react';

const FilterByStatus = props => {
    return(
        <>
        <label htmlFor="status">
            Status:
        </label>
        <select name="status" id="status">
            <option value="all">All statuses</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
        </>
    )
}

export default FilterByStatus;