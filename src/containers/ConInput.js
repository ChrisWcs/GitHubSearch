import { connect } from 'react-redux';
import { createFieldChange, createSearchAsync } from '../actions/actionCreators';

import Input from '../components/Input';

const mapStateToProps = ({field}) => ({
    value: field
});

const mapDispatchToProps = (dispatch) => ({
    searchFunc: () => {
        dispatch(createSearchAsync());
    },
    handleChange: (event) => {
        const {value} = event.target;
        dispatch(createFieldChange(value));
    },
});

const ConInput = connect(mapStateToProps, mapDispatchToProps)(Input);

export default ConInput;