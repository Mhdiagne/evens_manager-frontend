import React from 'react';
import "../css/bootstrap.min.css";
import "../css/style.css";
import BoxEvens from './BoxEvens';
import mariage from "../assets/img/mariage.jpg";
import magal from "../assets/img/magal.jpeg";
import menu3 from "../assets/img/menu3.jpg";
import conference from "../assets/img/conference.jpg";
import seminaire from "../assets/img/seminaire.jpg";
import ramadan from "../assets/img/ramadan.jpg"


import hbd2 from "../assets/img/hbd2.jpg";
import gamou from "../assets/img/gamou.jpg";

import { FaPlus } from "react-icons/fa";
import { HiViewList } from "react-icons/hi";
import { Link } from 'react-router-dom';

const PreEvens = () => {
    return (
        <div className="container-fluid event py-6">
            <div className="container">
                <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                   <Link to = "/login">
                        <contain className='new'><FaPlus /> New Event </contain>
                   </Link>
                   <Link to = "/login">
                        <Link to = "/createEvents">
                             <contain className='myevent'><HiViewList /> My Event</contain>
                        </Link> 
                   </Link>
                    <h1 className="display-5 mb-3 mt-5">Différents types d'événement</h1>
                </div>
                <div className="tab-class text-center">
                    {/* ... (votre code de la liste des onglets) ... */}
                    <ul className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp" data-wow-delay="0.1s">
                        <li class="nav-item p-2">
                            <a class="d-flex mx-2 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                <span class="text-dark" style={{width: '150px'}}>Tous</span>
                            </a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="d-flex py-2 mx-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                <span class="text-dark" style={{width: '200px'}}>Cérémonie Familliale</span>
                            </a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="d-flex py-2 mx-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                <span class="text-dark" style={{width: '200px'}}>Evénements Religieux</span>
                            </a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="d-flex py-2 mx-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                <span class="text-dark" style={{width: '150px'}}>Fêtes</span>
                            </a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div class="col-lg-12">
                                    <div class="row g-5">
                                        <BoxEvens nom="Mariage" image={mariage}/>
                                        <BoxEvens nom="Magal Touba" image={magal}/>
                                       
                                        <BoxEvens nom="Gamou" image={gamou}/>
                                        <BoxEvens nom="Seminaire" image={seminaire}/>
                                        <BoxEvens nom="Conférence" image={conference}/>                 
                                        <BoxEvens nom="Ndogou" image={ramadan}/>
                                        <BoxEvens nom="Anniversaire" image={hbd2}/>
                                       
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreEvens;
