import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import getVisibleExpenses from './selectors/expenses';
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

store.dispatch(addExpense({ description: 'Water Bill', amount: 1200, createdAt: 123 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 5500, createdAt: 23 }));
store.dispatch(addExpense({ description: 'Water Bill', amount: 109500, createdAt: -9 }));

ReactDOM.render(jsx, document.getElementById('app'));
