import {Routes, Route, Link} from 'react-router-dom';
import React from 'react';

import Home from './features/home';
import Users from './features/users';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="App-header">
                <nav className="App-nav">
                    <Link className="App-link" to="/">
                        Home
                    </Link>
                    <Link className="App-link" to="/users">
                        Users
                    </Link>
                </nav>
            </div>
            <div className="App-body">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="users" element={<Users />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
