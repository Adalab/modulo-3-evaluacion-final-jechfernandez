import React, {Fragment} from 'react';
import '../../stylesheets/filters/FilterBySelect.scss';
import PropTypes from 'prop-types';

const FilterBySpecies = props => {
  const handleChange = ev => {
    props.handleFilter ({
      key: 'species',
      value: ev.target.value,
    });
  };
  return (
    <Fragment>
      <label className="form__label hidden " htmlFor="species">Species:</label>
      <select
        className="form__select hidden"
        value={props.species}
        name="species"
        id="species"
        onChange={handleChange}
      >
        <option value="all">All species</option>
        <option value="Alien">Alien</option>
        <option value="Human">Human</option>
      </select>
    </Fragment>
  );
};

FilterBySpecies.propTypes = {
  handleFilter: PropTypes.func,
  species: PropTypes.string,
};

export default FilterBySpecies;
