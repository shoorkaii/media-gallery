/**
 * Created by reza on 2/4/17.
 */

import ReactDOM from 'react-dom';
import React from 'react';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>, document.getElementById('root')
);
