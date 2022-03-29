import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Layout/Home"
import './App.css';


function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" elenment={<Home/>} />
      <Route/>
      <Route/>

    </Routes>
    
   
    </Router>
  );
}

export default App;
