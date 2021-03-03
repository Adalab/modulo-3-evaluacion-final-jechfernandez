import React from 'react';
import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';
import FilterBySpecies from './FilterBySpecies';
import FilterByStatus from './FilterByStatus'

const Filter = props => {
    return(
        <>
        <section>
            <form>
                <FilterByName />
                <FilterByGender />
                <FilterBySpecies />
                <FilterByStatus />
            </form>
        </section>
        </>
    )
}

export default Filter;