// type rafce for basic boiler plate
import React from 'react';
import { useSelector } from 'react-redux';
import { Blogs } from './components/Blogs';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import { selectSignedIn } from './features/userSlice';

import "./style/app.css";

const App = () => {
const isSignedIn=useSelector(selectSignedIn)

    return (
        <div className="app">
            <Navbar />
            <HomePage/>
            {isSignedIn && <Blogs/>}
        </div>
    );
};

export default App;
