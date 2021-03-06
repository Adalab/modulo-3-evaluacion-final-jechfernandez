import React from 'react';
import '../../stylesheets/filters/Filter.scss';
import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';
import FilterBySpecies from './FilterBySpecies';
import FilterByStatus from './FilterByStatus'
import Reset from '../Reset'

const Filter = props => {

    const handleSubmit = (ev) => {
        ev.preventDefault();
    };    
    
    return(
        <>
        <section>
            <form 
            className="form__container"
            onSubmit={handleSubmit}>
                <FilterByName handleFilter={props.handleFilter}/>
                <FilterByGender handleFilter={props.handleFilter}/>
                <FilterBySpecies handleFilter={props.handleFilter}/>
                <FilterByStatus handleFilter={props.handleFilter}/>
                <Reset />
            </form>
        </section>
        </>
    )
}

export default Filter;