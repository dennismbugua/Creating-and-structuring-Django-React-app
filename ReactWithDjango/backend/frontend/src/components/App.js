import React from 'react'
import ReactDOM from "react-dom/client";
import { Routes, Route, Switch, Redirect, HashRouter, BrowserRouter } from 'react-router-dom';
import Home from './home/Home';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);