import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client';
import {Provider} from "react-redux";
import store from "./redux/store/store";
import {CssBaseline} from "@mui/material";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <CssBaseline/>
            <App/>
        </Provider>
    </React.StrictMode>
);
