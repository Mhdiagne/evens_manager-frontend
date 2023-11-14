import React from 'react';

const Fonction = () => {
    return (
        <div className=" rounded service-item" >
        <div className="service-content">
            <Link to="/prestataires" className="service-content-icon">
            <h6 className="animation">{props.serviceName}</h6>
            </Link>
        </div>
        </div>  
    );
};

export default Fonction;