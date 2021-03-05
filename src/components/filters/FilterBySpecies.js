import React from 'react';
import '../../stylesheets/filters/FilterBySelect.scss';

const FilterBySpecies = props => {
    const handleChange = (ev) => {
      props.handleFilter({
        key: 'species',
        value: ev.target.value,
      });
    };
    return (
      <>
        <label
        className="form__label hidden "
        htmlFor="species">Species:</label>
        <select
          className="form__select hidden"
          name="species"
          id="species"
          onChange={handleChange}
        >
          <option value="all">All species</option>
          <option value="Alien">Alien</option>
          <option value="Human">Human</option>
        </select>
      </>
    );
  };
  export default FilterBySpecies;