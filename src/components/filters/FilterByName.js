import React, {Fragment} from 'react';
import '../../stylesheets/filters/FilterByName.scss';
import PropTypes from 'prop-types';

const FilterByName = props => {
  const handleChange = ev => {
    props.handleFilter ({
      key: 'name',
      value: ev.target.value,
    });
  };
  return (
    <Fragment>
      <label className="form__label" htmlFor="name">
        Filter by name:
      </label>
      <input
        className="form__input"
        type="text"
        name="name"
        id="name"
        placeholder="You know what to do"
        onChange={handleChange}
      />
    </Fragment>
  );
};

FilterByName.propTypes = {
  handleFilter: PropTypes.func,
};

export default FilterByName;
