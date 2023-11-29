import React, { useState } from 'react';
import axios from 'axios';
import { userService } from '../_service/user.service';
import { accountService } from '../_service/account.service';
import { Alert } from '@mui/material';
import { Navigate } from 'react-router-dom';

const FormClient = () => {
  const [error, setError] = useState("");
  const [navigate, setNavigate] = useState(false);
  const [stateClient, setStateClient] = useState({
    username: "",
    mail: "",
    password: "",
    password1: ""
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setStateClient((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    if (
      stateClient.mail === "" ||
      stateClient.username === "" ||
      stateClient.password === "" ||
      stateClient.password1 === "" ||
      stateClient.password !== stateClient.password1
    ) {
      setError('Oups! Veuillez saisir correctement les informations');
      setStateClient({
        username: '',
        mail: '',
        password: '',
        password1: ''
      });
    } else if (stateClient.password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères.');
    }else if (!/\d{4,}/.test(stateClient.password)) {
      setError('Le mot de passe doit contenir au moins 4 chiffres.');}
    else {
      try {
        await userService.addUser(stateClient);
        const response = await axios.post("http://localhost:8080/login", stateClient);
        console.log(response);
        accountService.saveToken(response.headers.authorization);
        setNavigate(true);
      } catch (error) {
        setError('Une erreur s\'est produite lors de l\'ajout de l\'utilisateur.');
      }
    }
  };

  if (navigate) {
    alert("Inscription reussi! Cliquez sur OK pour vous connecter");
    return <Navigate to={"/events"} />;
  }

  return (
    <div className="client-contain">
      <div className='error'>
        {error && (
          <Alert severity="error" className="alert">
            {error}
          </Alert>
        )}
      </div>
      <form onSubmit={handleOnSubmit}>
        <h3>Crée ton compte Client !</h3>
        <div className="social-contain">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="username"
          value={stateClient.username}
          onChange={handleChange}
          placeholder="UserName"
        />
        <input
          type="email"
          name="mail"
          value={stateClient.mail}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={stateClient.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="password1"
          value={stateClient.password1}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <button className="My-btn" type="submit">
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default FormClient;
