import { React, useState } from 'react';

const FormClient = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
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
        evt.preventDefault();
    
        const { name, email, password } = state;
        alert(
          `You are sign up with name: ${name} email: ${email} and password: ${password}`
        );
    
        for (const key in state) {
          setState({
            ...state,
            [key]: ""
          });
        }
      };
    return (
        <div className="form-contain sign-up-contain">
            <form onSubmit={handleOnSubmit}>
                <h1>Crée ton compte Client !</h1>
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
                name="name"
                value={state.name}
                onChange={handleChange}
                placeholder="Name"
                />
                <input
                type="email"
                name="email"
                value={state.email}
                onChange={handleChange}
                placeholder="Email"
                />
                <input
                type="password"
                name="password"
                value={state.password}
                onChange={handleChange}
                placeholder="Password"
                />
                <button className="My-btn">S'inscrire</button>
            </form>
        </div>
    );
};

export default FormClient;