import { Routes, Route } from "react-router-dom";
import Acceuil from './pages/Acceuil';
import Evens from './pages/Events';
import Prestataires from "./pages/Prestataires";
import About from "./pages/About";
import Login from "./pages/Login";
import CreateEvents from "./pages/CreateEvents";



function App() {
  return (
    <div className="App">    
      <Routes>
        <Route path = '/' element ={<Acceuil />} />
        <Route path = '/events' element ={<Evens />} />
        <Route path = '/prestataires' element ={<Prestataires />} />
        <Route path = '/about' element ={<About />} />
        <Route path = '/login' element ={<Login/>}/>
        <Route path = '/createEvents' element ={<CreateEvents />} />
      </Routes>
    </div>
  );
}

export default App;
