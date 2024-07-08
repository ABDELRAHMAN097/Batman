import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact/index";
import Nav from "./components/Nav";
import Notfound from './Pages/Notfound'
import ParticlesComponent from './components/ParticlesComponent/ParticlesComponent'
import Services from "./components/Services/Services";
export default function App() {
  return (
    <div className="col-12">
      <BrowserRouter>
      
        <Nav/>
        <Routes>
          <Route path="/">
          <Route path="/particles" element={<ParticlesComponent id="Particles" />} />
          <Route index element={<HomePage/>} />
          <Route path="Services" element={<Services/>} />
          <Route path="About" element={<About/>} />
          <Route path="Contact" element={<Contact/>} />
         
          <Route path="*" element={<Notfound/>} />
         </Route>
        </Routes>
        
        <Outlet />
      </BrowserRouter>
    </div>
  );
}
