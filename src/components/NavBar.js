import React, {useContext} from 'react';
import {AuthContext} from "../context/AuthContext";
import logo from '../assets/banana-01.png';
import {useHistory, Link} from 'react-router-dom';


function NavBar() {
    const history = useHistory();

   // step 12. Maak de uitlog knop in de navigatie (NavBar.js) functioneel. Als erop wordt geklikt, roep je de logout-functie uit de context aan!

    // step 5. Lees de context data keys uit in het component dat deze contextdata gebruikt. kan dus llok een functie zijn zoals login en logout
    // const watisdit = useContext(AuthContext);
    // console.log(watisdit);

    const {isAuth, userLogoutFunction, email} = useContext(AuthContext);

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
                <div className="user">
                    <h5>{email}</h5>
                    <button
                        type="button"
                        onClick={userLogoutFunction}
                    >
                        Log out
                    </button>
                </div>
                :
                <div>
                    <button
                        type="button"
                        onClick={() => history.push('/signin')}
                    >Log In
                    </button>
                    <button
                        type="button"
                        onClick={() => history.push('/signup')}
                    >
                        Registreren
                    </button>
                </div>
            }

        </nav>
    )
        ;
}

export default NavBar;