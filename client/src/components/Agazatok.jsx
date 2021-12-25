import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Tanfolyamok} from './Tanfolyamok'

export const Agazatok = () => {
  const [agazat,setAgazat]=useState([])
  const [tanfolyamok,setTanfolyamok]=useState([]) 

  useEffect(() => {
    axios.get(`http://localhost:5000/api/agazatok`).then(res =>setAgazat(res.data))
    axios.get(`http://localhost:5000/api/tanfolyamok`).then(res =>setTanfolyamok(res.data))
  },[])

  return (
    <div>
    <div id='agazatok' className='text-center'>
      <div className='container-fluid'>
        <div className='section-title'>
          <h2>Tanfolyamok felnőtteknek</h2>
          <p>Válassz egy ágazatot !</p>
        </div>
        <div className="row">
          {agazat ? agazat.map((obj) => (
                <div key={obj.id} className='col-md-4 col-sm-6 col-12'>
                  {' '}
                  <div className="font-awesome "> <i className={obj.icon}></i></div>
                  <div className='service-desc'><h3>{obj.name}</h3></div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row ">
        <div className="col-auto ">
           <Tanfolyamok data={tanfolyamok}/>
        </div>
        
      </div>
      
    </div>
   
    </div>
  )
}
