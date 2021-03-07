import React, {Fragment} from 'react';
import '../../stylesheets/filters/FilterBySelect.scss';

const FilterByGender = props => {
  const handleChange = ev => {
    props.handleFilter ({
      key: 'gender',
      value: ev.target.value,
    });
  };
  return (
    <Fragment>
      <label className="form__label" htmlFor="gender">
        Gender:
      </label>
      <select
        className="form__select"
        value={props.gender}
        name="gender"
        id="gender"
        onChange={handleChange}
      >
        <option value="all">All genders</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </Fragment>
  );
};

export default FilterByGender;
