import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

import About from "./Pages/About";
import Nav from "./components/Nav";
import Notfound from './Pages/Notfound'
export default function App() {
  return (
    <div className="col-12">
      <BrowserRouter>
      
        <Nav/>
        <Routes>
          <Route path="/">
          <Route index element={<HomePage/>} />
          <Route path="About" element={<About/>} />
         
          <Route path="*" element={<Notfound/>} />
         </Route>
        </Routes>
        
        <Outlet />
      </BrowserRouter>
    </div>
  );
}
