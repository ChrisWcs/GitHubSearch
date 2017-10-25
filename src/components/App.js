import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';

import ConInfo from '../containers/ConInfo';
import ConInput from '../containers/ConInput';

const App = () => (
    <Provider store={createStore( reducer, applyMiddleware(thunk))}>
        <div>
            <ConInput/>
            <ConInfo/>
        </div>
    </Provider>
);

export default App;