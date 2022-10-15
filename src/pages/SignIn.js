import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import Button from "../components/Button";
import {AuthContext} from "../context/AuthContext";

function SignIn() {

    // step 6. uitlezen context met usecontext
    // lees de key login uit de AuthContext;
    const {userLoginFunction} = useContext(AuthContext)
    const [formState, setFormState] = useState({
        inputUser: "",
        inputPw: "",
    })


    // stap 10. Als het formulier wordt gesubmit, roep je de login-functie uit de context aan!
    function handleSubmit(e) {
        e.preventDefault();
        userLoginFunction(formState.inputUser);


    }

    function handleChange(evt) {
        evt.preventDefault()
        const value = evt.target.value;
        setFormState({...formState, [evt.target.name]: value});

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
                                   name="inputUser"
                                   value={formState.inputUser}
                                   onChange={handleChange}/>

                        </label>
                        <br></br>
                        <label htmlFor="input-pw">
                            <span>Password:</span>
                            <input type="tekst"
                                   id="input-pw"
                                   name="inputPw"
                                   value={formState.inputPw}
                                   onChange={handleChange}/>


                        </label>
                    </legend>

                </p>
                <button type="submit"
                        disabled={(formState.inputUser.length > 0 && formState.inputPw.length > 0) === false ? true : false}>
                    Inloggen
                </button>

            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    )
        ;
}

export default SignIn;