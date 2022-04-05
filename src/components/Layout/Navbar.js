import React from 'react'
import { Link } from "react-router-dom";
import { BsCloudSun } from "react-icons/bs";
import { GiBelgium } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineSportsSoccer } from "react-icons/md"
import { GiTrafficLightsReadyToGo } from "react-icons/gi"
import "./style/navbar.css"

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/">
        <img className='navbar_logo' src="./images/logo_newspaper.jpg" alt="" />
      </Link>
      <div className='itemsContainer'>
        <Link className='icon' to="/belgiumnews">
          
        <span>Belgium News</span>
          <GiBelgium/>
          
          </Link>
        <Link className='icon' to="/worldnews">
          
        <span>World News</span>  
          <BiWorld/>
        </Link>
        <Link className='icon' to="/weathernews">
          
        <span>Weather News</span>
          <BsCloudSun/>
          
        </Link>
        <Link className='icon' to="/sportnews">
          
        <span>Sport News</span>
          <MdOutlineSportsSoccer/>
          
        </Link>
        <Link className='icon' to="/trafficnews">
          
          <span>Traffic News</span>
            <GiTrafficLightsReadyToGo/>
            
          </Link>
      </div>

      <div className='searchBar'>
        <input className='inputSearch' type="text" />
        <BiSearchAlt className='searchGlass' />
      </div>
    </nav>
  )
}

/*
https://medium.com/@pradityadhitama/simple-search-bar-component-functionality-in-react-6589fda3385d
*/
