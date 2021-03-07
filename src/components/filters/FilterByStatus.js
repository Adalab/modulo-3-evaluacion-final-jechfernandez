import React, {Fragment} from 'react';
import '../../stylesheets/filters/FilterBySelect.scss';
import PropTypes from 'prop-types';

const FilterByStatus = props => {
  const handleChange = ev => {
    props.handleFilter ({
      key: 'status',
      value: ev.target.value,
    });
  };

  return (
    <Fragment>
      <label className="form__label hidden" htmlFor="status">
        Status:
      </label>
      <select
        className="form__select hidden"
        value={props.status}
        name="status"
        id="status"
        onChange={handleChange}
      >
        <option value="all">All statuses</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </Fragment>
  );
};

FilterByStatus.propTypes = {
  handleFilter: PropTypes.func,
};

export default FilterByStatus;
