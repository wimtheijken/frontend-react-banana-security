import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {

    const { isAuth, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>
            {isAuth ?
                <div>
                    <span>{isAuth.email}</span>
                    <button
                        type="button"
                        onClick={() => {
                            logout()
                            navigate('/')
                        }}
                    >
                        Uitloggen
                    </button>
                </div>
                :
                <div>
                    <button
                        type="button"
                        onClick={() => navigate('/signin')}
                    >
                        Log in
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/signup')}
                    >
                        Registreren
                    </button>
                </div>
            }

        </nav>
    );
}

export default NavBar;