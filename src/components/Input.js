import React from 'react';
import PropTypes from 'prop-types';

const style = {

    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        border: "solid 1px black",
        letterSpacing: "2px",
        fontFamily: "Arial",
        fontSize: "25px",
    },
    btn: {
        border: "solid 1px black",
        letterSpacing: "1px",
        fontFamily: "Arial",
        background: "white",
        cursor: "pointer",
        fontSize: "25px",
    },

};

const Input = ({ value, handleChange, searchFunc }) => (
    <div style={style.row}>
        <input style={style.input} type="text" value={value} onChange={handleChange}/>
        <button style={style.btn} onClick={searchFunc}>Search</button>
    </div>
);

Input.propTypes = {
    value: PropTypes.string,
    handleChange: PropTypes.func,
    searchFunc: PropTypes.func,
};

export default Input; 