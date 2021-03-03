import React from 'react';
import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';
import FilterBySpecies from './FilterBySpecies';
import FilterByStatus from './FilterByStatus'

const Filter = props => {

    const handleSubmit = (ev) => {
        ev.preventDefault();
    };    
    
    return(
        <>
        <section>
            <form onSubmit={handleSubmit}>
                <FilterByName handleFilter={props.handleFilter}/>
                <FilterByGender handleFilter={props.handleFilter}/>
                <FilterBySpecies />
                <FilterByStatus />
            </form>
        </section>
        </>
    )
}

export default Filter;