import React from 'react';

const FilterBySpecies = props => {
    return(
        <>
        <label htmlFor="species">
            Filter by species:
        </label>
        <input type="text" name="species" id="species"/>
        </>
    )
}

export default FilterBySpecies;