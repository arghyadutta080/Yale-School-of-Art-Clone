import React from 'react'
import Navbar from '../Navbar'
import Home from './Home'
import HomeHeader from './HomeHeader'
import CommunityBoard from './CommunityBoard'
import CalenderNews from './CalenderNews'
import Footer from '../Footer'
import Soa from './Soa'

function MainHome() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <HomeHeader/>
      <Soa/>
      <CommunityBoard/>
      <CalenderNews/>
      <Footer/>
    </div>
  )
}

export default MainHome
