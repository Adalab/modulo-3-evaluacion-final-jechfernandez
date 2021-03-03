import React from 'react';
import FilterByGender from './FilterByGender';
import FilterBySpecies from './FilterBySpecies';

const Filter = props => {
    return(
        <>
        <section>
            <ul>
                <li>
                    <Character />
                </li>
            </ul>
        </section>
        </>
    )
}

export default Filter;