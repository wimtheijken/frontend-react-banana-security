import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import { useForm } from 'react-hook-form';
import InputField from "../components/InputField";

function SignIn() {
    const { login } = useContext(AuthContext)
    const userName = "Wim" // default username

    function handleFormSubmit( { email, password }  ) {
        login( userName, email, password )
    }

    const { register, handleSubmit } = useForm()

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
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
        <button type="submit">Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;