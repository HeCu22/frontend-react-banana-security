import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    const [inputEmail, setInputEmail] = useState("");
    const [inputUser, setInputUser] = useState("");
    const [inputPw, setInputPw] = useState("");
  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form>
        <p>*Invoervelden*
            <legend>
                <label htmlFor="input-email">
                    <span>Email adres:</span>

                    <input type="tekst"
                           id="input-email"
                           name="email-adres"
                           value={inputEmail}
                           onChange={(e) => setInputEmail(e.target.value)}
                    />
                </label>
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

      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;