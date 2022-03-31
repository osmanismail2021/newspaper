import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Home"
import Footer from "./components/Layout/Footer";
import './App.css';
import Belgiumnews from "./components/Belgiumnews";
import Worldnews from "./components/Worldnews";
import Weathernews from "./components/Weathernews";
import { Database } from './components/context/index';
import { React, useState, useEffect } from 'react';




export default function App() {
  
  const [articles, setArticles] = useState([])

  useEffect(() => {
   const fetchIt = async ()=>{
    await fetch('https://newsapi.org/v2/everything?q=news&apiKey=a85abafdd40249398d40a7794a9506a1')
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles)
      })
   }

   fetchIt()
  }, [])
  return (
    <Database.Provider value={articles}>
      <BrowserRouter>
        
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/belgiumnews" element={<Belgiumnews />} />
            <Route path="/worldnews" element={<Worldnews />} />
            <Route path="/weathernews" element={<Weathernews />} />

          </Routes>
          <Footer />

      </BrowserRouter>
    </Database.Provider>


  );
}


