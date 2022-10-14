import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";

//stap1. Maak context aan
export const AuthContext = createContext({});

// stap 2. custom Provider-component definieren die we om applicatie kunnen wikkelen in index.js
// stap 3. Zorg ervoor datwe dit om de applicatie kunnen wikkelen door de children property te implementeren
function AuthContext({children}) {
    // stap 7. state aanmaken in het custom Provider-component. Noem deze state-variabele isAuth
    const [isAuth, toggleIsAuth] = useState({isAuth: false, user: ''});
    const history = useHistory();
    // verschillende handelingen met context data kun je mbv gewone functies hier definieren
    // zo blijft de logica in een component en kunnen andere componenten hier gebruik van maken
    // stap 9. Schrijf een inlog-functie in het custom Provider-component
    function login(usercode) {
        console.log(usercode);
        toggleIsAuth({isAuth: true, user: usercode, });
        console.log("gebruiker is ingelogd");
        history.push('/profile');
    }

    // stap 11. Schrijf een uitlog-functie in het custom Provider-component
    function logout() {
        toggleIsAuth({isAuth: false, user: '',});
        console.log("gebruiker is uitgelogd");
        history.push('/')
    }

    // stap 4a. Maak een data-object aan die je meegeeft aan de value-property en zet daar de keys in die je wil gebruiken
  // step 8: hier kun je ook rechtstreeks functies inzetten, zoals login en logout
    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        userLogin: login,
        userLogout: logout
    };
    console.log('gebruiker', isAuth);
    return (
    //stap 4b. geeft het data-object mee via de value-property van de provider
        <AuthContext.Provider
            value={contextData}>
           // stap6. verplaats/geeft data door met children. NB. igv statische data zet je hier rechtstreeks App/> componenet in
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;