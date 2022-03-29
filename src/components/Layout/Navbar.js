import React from 'react'
import { Link } from "react-router-dom";
import {BsCloudSun} from "react-icons/bs";
import {GiBelgium} from "react-icons/gi";
import {BiWorld} from "react-icons/bi";
import {BiSearchAlt} from "react-icons/bi"; 
import "./navbar.css"

export default function Navbar() {
  return (
    <nav className='navbar'>
    <Link to="/">
        <img className='navbar_logo' src="./images/logo_newspaper.jpg" alt="" />
    </Link>
    <div className='itemsContainer'>
        <GiBelgium className='icon' />
        <span>Belgium News</span>

        <BiWorld className='icon' />
        <span>World News</span>
        
        
        <BsCloudSun className='icon'/>
        <span>Weather News</span>
</div>

    <div className='searchBar'>
      <input className='inputSearch' type="text" />
      <BiSearchAlt className='searchGlass' />
    </div>
    </nav>
  )
}
