import React from 'react';
import '../../stylesheets/filters/Filter.scss';

export default function Reset() {
    const reset = () => {
        Reset();
      };

    return (
        <div>
            <button className='reset__button' onClick={reset}>
            <i className="reset__button--icon fas fa-reply"></i>
            </button>
        </div>
    )
};
