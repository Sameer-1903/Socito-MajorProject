import React from 'react'
import './HomePage.css'
import Nabvar from '../../Components/Navbar/Nabvar'
import Feed from '../../Components/Home/FeedSection/Feed'
import SuggestedUser from '../../Components/Home/SuggestedUsers/SuggestedUsers'
import HomeNav from '../../Components/Home/HomeNavigation/HomeNav'
const HomePage = () => {
  return (

    <div>
       <Nabvar/>
   
    <div className='home-page-container'>

    <section className='middle-section'><Feed/></section>
    <section className='right-section'><SuggestedUser/></section>
    </div>
    </div>
  )
}

export default HomePage