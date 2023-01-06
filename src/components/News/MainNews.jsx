import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import NewsList from './NewsList'
import news_bg from '../Images/news_bg.jpg'

function MainNews() {
  return (
    <div style={{ backgroundImage: `url(${news_bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', opacity: "0.9", marginBottom: '50px' }}>
            
            <Navbar />
            
            <div className='container d-flex flex-column align-items-center justify-content-center' >
                <h1 className='p-4' style={{ fontStyle: "oblique", color: "#4d004d" }}>NEWS FROM YALE SCHOOL OF ART</h1>
                <NewsList/>
            </div>
            
            <Footer/>
        
        </div>
  )
}

export default MainNews
