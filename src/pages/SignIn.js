import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import Button from "../components/Button";
import {AuthContext} from "../context/AutContext";

function SignIn() {
    // step 6. uitlezen context met usecontext
    // lees de key login uit de AuthContext;
    const {login} = useContext(AuthContext);
    const [inputUser, setInputUser] = useState("");
    const [inputPw, setInputPw] = useState("");

  // stap 10. Als het formulier wordt gesubmit, roep je de login-functie uit de context aan!
    function handleSubmit(e) {
        e.preventDefault();
        login(inputUser);

    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias
                qui quo unde?</p>

            <form onSubmit={handleSubmit}>
                <p>

                        <legend>
                            <label htmlFor="input-user">
                                <span>User:</span>

                                <input type="tekst"
                                       id="input-user"
                                       name="userid"
                                       value={inputUser}
                                       onChange={(e) => setInputUser(e.target.value)}
                                />
                            </label>
                            <br></br>
                            <label htmlFor="input-pw">
                                <span>Password:</span>
                                <input type="tekst"
                                       id="input-pw"
                                       name="password"
                                       value={inputPw}
                                       onChange={(e) => setInputPw(e.target.value)}
                                />
                            </label>
                        </legend>

                </p>
                <button type="submit">Inloggen</button>

            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    )
        ;
}

export default SignIn;