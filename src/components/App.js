import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';

import ConInfo from '../containers/ConInfo';
import ConInput from '../containers/ConInput';

const style = {
    col: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
};

const App = () => (
    <Provider store={createStore( reducer, applyMiddleware(thunk))}>
        <div style={style.col}>
            <ConInput/>
            <ConInfo/>
        </div>
    </Provider>
);

export default App;