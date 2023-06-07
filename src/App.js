import React, {useContext} from 'react';
import {useNavigate, Route, Routes, Navigate} from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import {AuthContext} from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    const { isAuth } = useContext(AuthContext);
    return (
        <>
            <NavBar/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<PrivateRoute isAuth={isAuth.isAuth}><Profile/></PrivateRoute>} />
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
