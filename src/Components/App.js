import React from 'react';
import Header from './Header';
import Body from './Body';
import Legend from './Legend';
import Footer from './Footer';
import "./App.css";
import { Provider } from 'react-redux';
import store from "../utilities/store"

const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <Legend />
            <Body />
        </Provider>
    );
}

export default App;