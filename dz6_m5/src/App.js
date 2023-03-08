import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store} from "./store/calculatorSlice";
import {Calculator} from "./pages/Calculator";

function App() {
    return (
        <Provider store={store}>
            <Calculator />
        </Provider>
    );
}

export default App;
