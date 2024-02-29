import React from 'react'
import "./Navbar.css"
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { Link } from 'react-router-dom';
const Nabvar = () => {
  return (
    <div>
     
<div className="navigation">
   <div className="logo">
      <a className="no-underline" href="#">
    
      Socito
      </a>
   </div>
   
   <div className="navigation-search-container">
      <i className="fa fa-search"></i>
      <input className="search-field" type="text" placeholder="Search"/>
      <div className="search-container">
         <div className="search-container-box">
            <div className="search-results">
            </div>
         </div>
      </div>
   </div>
   <div className="navigation-icons">

      <Link to="/home" className="navigation-link">
      <HomeIcon/>
      </Link>
      <Link to="/create" className="navigation-link">
      <AddCircleOutlineIcon/>
      </Link>
      <Link to="/explore" className="navigation-link">
      <ExploreOutlinedIcon/>
      </Link>
   </div>
</div>


</div>

    
  )
}

export default Nabvar