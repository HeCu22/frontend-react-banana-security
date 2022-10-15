import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext"

function SignUp() {
    const {userLoginFunction} = useContext(AuthContext);

    const [formState, setFormState] = useState({
        inputUser: "",
        inputPw: "",
        inputEmail: "",
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
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque
                eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur
                deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>

            <form onSubmit={handleSubmit}>
                <p>*Invoervelden*
                    <legend>
                        <label htmlFor="input-email">
                            <span>Email adres:</span>

                            <input type="tekst"
                                   id="input-email"
                                   name="inputEmail"
                                   value={formState.inputEmail}
                                   onChange={handleChange}
                            />
                        </label>
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
                <button
                    type="submit"
                    disabled={(formState.inputUser.length > 0 && formState.inputPw.length > 0 && formState.inputEmail.length > 0) === false ? true : false}
                >
                    Registreer
                </button>

            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;