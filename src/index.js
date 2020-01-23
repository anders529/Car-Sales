import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'bulma/css/bulma.css';
import './styles.scss';
const rootElement = document.getElementById('root');
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, rootElement);
