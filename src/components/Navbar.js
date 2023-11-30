import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import "../css/style.css";
import { FaUserCircle } from "react-icons/fa";
import { accountService } from '../_service/account.service';
import { Button } from '@mui/material';
import { Logout } from '@mui/icons-material';
import FadeMenu from './FadeMenu';

const Navbar = () => {

    const token = accountService.getToken("jwt");
    console.log(token);

    

    return (
        <div className="container-fluid nav-bar">
            <div className="container">
                <nav className="navbar navbar-light navbar-expand-lg py-4">
                    {token ? (
                        <>
                            <Link to="/" className="navbar-brand">
                                <h1 className="text-primary fw-bold mb-0">
                                    Sama <span className="text-dark">Bëss</span>
                                </h1>
                            </Link>
                            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="fa fa-bars text-primary"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav mx-auto">
                                    <NavLink to="/" className="nav-item nav-link">Accueil</NavLink>
                                    <NavLink to="/events" className="nav-item nav-link">Events</NavLink>
                                    <NavLink to="/prestataires" className="nav-item nav-link">Prestataires</NavLink>
                                    <NavLink to="/about" className="nav-item nav-link">A propos</NavLink>
                                </div>
                            </div>
                            <FadeMenu />
                        </>
                    ) : (
                        <>
                            <Link to="/" className="navbar-brand">
                                <h1 className="text-primary fw-bold mb-0">
                                    Sama <span className="text-dark">Bëss</span>
                                </h1>
                            </Link>
                            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="fa fa-bars text-primary"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav mx-auto">
                                    <NavLink to="/" className="nav-item nav-link">Accueil</NavLink>
                                    <NavLink to="/events" className="nav-item nav-link">Events</NavLink>
                                    <NavLink to="/prestataires" className="nav-item nav-link">Prestataires</NavLink>
                                    <NavLink to="/about" className="nav-item nav-link">A propos</NavLink>
                                </div>
                            </div>
                            <Link to="/login">
                                <button className="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-lg-inline-flex">
                                    <FaUserCircle />
                                </button>
                            </Link>    
                        </>
                    )}
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
