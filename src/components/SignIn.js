import axios from "axios";
import React, { useState } from "react";
import { accountService } from "../_service/account.service";
import { Navigate } from "react-router-dom";
import { Alert } from '@mui/material';
import { Navbar } from "react-bootstrap";
function SignInForm(props) {
  const [navigate, setNavigate] = useState(false);

  const [error, setError] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [state, setState] = React.useState({
    username: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    console.log(state)
    evt.preventDefault();

    axios.post("http://localhost:8080/login",state)
    .then(response =>{console.log(response)
    accountService.saveToken(response.headers.authorization);
      const token = response.headers.get("Authorisation");
    if (accountService.isLogged(response.headers.authorization)){
      setIsAuth(true);
      sessionStorage.setItem("jwt",token);
      //console.log(!isAuth)
      setNavigate(true);

    }
    } 
    )
    .catch(error=>console.log(error))
    setError("Username ou password incorrect");
  };

  const logout=()=>{
    sessionStorage.removeItem("jwt");
    setIsAuth(false);
  }

  if (navigate){
    return <Navigate to={"/events"} />
  }
  return (
    <div className="form-contain sign-in-contain">
      
      <div>
        {error && (
          <Alert severity="error" className="alert">
            {error}
          </Alert>
        )}
      </div>
      <form onSubmit={handleOnSubmit}>

        <h1>Connexion</h1>
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
        <span>or use your account</span>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
          placeholder="UserName"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Mot de passe oublié ?</a>
        <button className="My-btn">Se connecter</button>
      </form>
    </div>
  );
}

export default SignInForm;
