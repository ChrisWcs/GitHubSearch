import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, handleChange, searchFunc }) => (
    <div>
        <input type="text" value={value} onChange={handleChange}/>
        <button onClick={searchFunc}>Search</button>
    </div>
);

Input.propTypes = {
    value: PropTypes.string,
    handleChange: PropTypes.func,
    searchFunc: PropTypes.func,
};

export default Input;