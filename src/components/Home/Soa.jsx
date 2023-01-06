import React from 'react'
import { Link } from 'react-router-dom'
import SoaList from './SoaList'
import soa_bg from '../Images/carosoul_1.jpeg'

function Soa() {
  return (
    <div id='soa' style={{ backgroundImage: `url(${soa_bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderBottom: "1px solid black" }}>
      <h1 className='p-4 text-center' style={{ fontStyle: "oblique", color: "#00004d" }}>HAPPENING AT SOA</h1>
      <div className='container d-flex flex-wrap flex-row align-items-center justify-content-center'>
        <div className="p-2 mb-3 rounded-3 flex-wrap shadow mx-2" style={{ backgroundColor: "#fff2e6" }}>
          <div className="container-fluid py-3">
            <b className='text-danger'>LATEST</b>
            <p>Fall 2022 exhibitions are ongoing :</p>
            <Link to="/exhibition">Full info here</Link>          
          </div>
        </div>
      </div>
      <SoaList/>
    </div>
  )
}

export default Soa
