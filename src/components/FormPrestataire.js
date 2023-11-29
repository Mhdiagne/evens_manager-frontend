import React, { useState } from 'react';
import { prestataireService } from '../_service/prestataire.service';
import { Alert } from '@mui/material';
import { accountService } from "../_service/account.service";
//import { Link, Navigate  } from 'react-router-dom';
import axios from "axios";
import { Navigate } from 'react-router-dom';
const FormPrestataire = ({ onGetTkn }) => {
  const [statePrestataire, setStatePrestataire] = useState({
    username: '',
    email: '',
    password: '',
    password1: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [navigate, setNavigate] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [tkn, setTkn] = useState(null);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setStatePrestataire((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    if (
      statePrestataire.email === "" ||
      statePrestataire.username === "" ||
      statePrestataire.password === "" ||
      statePrestataire.password1 === "" ||
      statePrestataire.password !== statePrestataire.password1)
    {
      setSuccess('');
      setError('Veuillez saisir correctement les champs.');
      setStatePrestataire({
        username: '',
        email: '',
        password: '',
        password1: ''
      });
    } else if (statePrestataire.password.length < 6) {
    setSuccess('');
    setError('6 caractere au moins pour le mot de passe.');
  }else if (!/\d{4,}/.test(statePrestataire.password)) {
    setSuccess('');
    setError('Le mot de passe doit contenir au moins 4 chiffres.');
  }
    else {
      try {

        await prestataireService.addUser(statePrestataire);
        axios.post("http://localhost:8080/login",statePrestataire)
        .then(response =>{setTkn(response.headers.authorization)
        accountService.saveToken(response.headers.authorization);
        if (tkn !==null){
          setIsAuth(true);
        }
    } 
    )
    .catch(error=>console.log(error))
        setSuccess('Utilisateur ajouté avec succès!');
        setStatePrestataire({
          username: '',
          email: '',
          password: '',
          password1: ''
        });
        setError('');
        setNavigate(true)
      } catch (error) {

        setError('Une erreur s\'est produite lors de l\'ajout de l\'utilisateur.');
        setSuccess('');
      }
    }
  };


  if (navigate){
    alert("Inscription reussi! Cliquez sur OK pour continuer")
    return <Navigate to={"/prestataires"}/>
  }
  return (
    <div className="pres-contain">
      <div>
        {error && (
          <Alert severity="error" className="alert">
            {error}
          </Alert>
        )}
      </div>
      <div className='success'>
        {success && (
          <Alert severity="success">{success}</Alert>
        )}
      </div>
      <form onSubmit={handleOnSubmit}>
        <h3>Crée ton compte Prestataire!</h3>
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
          value={statePrestataire.username}
          onChange={handleChange}
          placeholder="UserName"
        />
        <input
          type="email"
          name="email"
          value={statePrestataire.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={statePrestataire.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="password1"
          value={statePrestataire.password1}
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
export default FormPrestataire;
