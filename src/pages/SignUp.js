import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import { useForm } from 'react-hook-form';
import InputField from "../components/InputField";

function SignUp() {
    const { login } = useContext(AuthContext)

    function handleFormSubmit( { name, email, password } ) {
        login( name, email, password )
    }

    const { register, handleSubmit } = useForm()

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <InputField
                label="Gebruikersnaam"
                id="name"
                inputType="text"
                name="name"
                register={register}
                placeholdeer="Uw naam"
            />
            <InputField
                label="Email"
                id="email"
                inputType="email"
                name="email"
                register={register}
                placeholdeer="Uw email"
            />
            <InputField
                label="Wachtwoord"
                id="password"
                inputType="password"
                name="password"
                placeholdeer="Uw wachtwoord"
                register={register}
            />
            <button type="submit">Registreren</button>
        </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;