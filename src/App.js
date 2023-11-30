import { Routes, Route } from "react-router-dom";
import Acceuil from './pages/Acceuil';
import Evens from './pages/Events';
import Prestataires from "./pages/Prestataires";
import About from "./pages/About";
import Login from "./pages/Login";
import ListEvents from "./pages/ListEvents";
import SignInForm from "./components/SignIn";
import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { AuthProvider } from "./components/AuthProvider";
import { accountService } from "./_service/account.service";



function App() {
  return (
    <AuthProvider>
        <div className="App"> 
        <Routes>
        <Route path = '/' element ={<Acceuil />} />
        <Route path = '/events' element ={<Evens />} />
        <Route path = '/prestataires' element ={<Prestataires />} />
        <Route path = '/about' element ={<About />} />
        <Route path = '/login' element ={<Login/>}/>
        <Route path = '/listEvents' element ={<ListEvents/>}/>
      </Routes>
    </div>
    </AuthProvider>
    
  );
}

export default App;
