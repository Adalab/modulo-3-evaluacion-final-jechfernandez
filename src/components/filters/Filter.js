import React from 'react';
import '../../stylesheets/filters/Filter.scss';
import PropTypes from 'prop-types';
import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';
import FilterBySpecies from './FilterBySpecies';
import FilterByStatus from './FilterByStatus'
import ResetButton from '../ResetButton';

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
                <FilterByName handleFilter={props.handleFilter} handleReset={props.handleReset}/>
                <FilterByGender handleFilter={props.handleFilter}/>
                <FilterBySpecies handleFilter={props.handleFilter}/>
                <FilterByStatus handleFilter={props.handleFilter}/>
            </form>
            <ResetButton handleReset={props.handleReset} />
        </section>
        </>
    )
}

Filter.propTypes = {
    name: PropTypes.string,
    handleFilter: PropTypes.func.isRequired,
  };

export default Filter;