import React from 'react';
import '../stylesheets/filters/Reset.scss';
import PropTypes from 'prop-types';

const ResetButton = (props) => {
    const handleReset = () => {
      props.handleReset();
    };
    return (
        <div>
            <button className='reset__button' onClick={handleReset}>
            <i className="reset__button--icon fas fa-reply"></i>
            </button>
        </div>
    )
};

export default ResetButton;

ResetButton.propTypes = {
  handleReset: PropTypes.func.isRequired,
};