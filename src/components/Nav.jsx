import React from 'react';
import './Nav.css';
import Logo from "../Logo/Logo";



import { Button ,MenuItem} from '@mui/material';


function Nav() {
  return (
    <nav className="navbar">
    <MenuItem className="navbar__menuIcon" />
    
      <Logo />
    
    <ul className="navbar__list">
      <li className="navbar__buttonWrapper">
        <Button className="navbar__button">
        <i class="fa-solid fa-house"></i>&nbsp;  Home
        </Button>
      </li>
      <li className="navbar__buttonWrapper">
        
          <Button className="navbar__button">
          <i class="fa-solid fa-magnifying-glass"></i>&nbsp;Search
          </Button>
        
      </li>
      <li className="navbar__buttonWrapper">
        <Button className="navbar__button" >
        <i class="fa-solid fa-plus"></i>&nbsp; Watchlist
        </Button>
      </li>
      <li className="navbar__buttonWrapper">
        <Button className="navbar__button" >
        <i class="fa-solid fa-star"></i>&nbsp;Originals
        </Button>
      </li>
      <li className="navbar__buttonWrapper">
        <Button className="navbar__button">
         <i class="fa-solid fa-film"></i>&nbsp; Movies
        </Button>
      </li>
      <li className="navbar__buttonWrapper">
        <Button className="navbar__button">
        <i class="fa-solid fa-tv"></i>&nbsp;Series
        </Button>
      </li>
      <li className="navbar__buttonWrapper">
        <Button className="navbar__button">
        <i class="fa-regular fa-user"></i>&nbsp;  My Space
        </Button>
      </li>
    </ul>
  </nav>
  )
}

export default Nav