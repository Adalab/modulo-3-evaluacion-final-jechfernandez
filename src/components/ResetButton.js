import React from 'react';
import '../stylesheets/filters/ResetButton.scss';
import PropTypes from 'prop-types';

const ResetButton = props => {
  const handleResetClick = () => {
    props.handleReset ();
  };
  return (
    <div className="reset">
      <button className="reset__button" onClick={handleResetClick}>
        <i className="reset__button--icon fas fa-reply" />
      </button>
    </div>
  );
};

export default ResetButton;

ResetButton.propTypes = {
  ResetButton: PropTypes.func,
};

