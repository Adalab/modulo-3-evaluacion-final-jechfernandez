import React from 'react';

const FilterBySpecies = props => {
    const handleChange = (ev) => {
      props.handleFilter({
        key: 'species',
        value: ev.target.value,
      });
    };
    return (
      <>
        <label>Species:</label>
        <select
          className="form__input-text"
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