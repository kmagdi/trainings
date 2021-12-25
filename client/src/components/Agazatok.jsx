import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Tanfolyamok} from './Tanfolyamok'
import './Agazatok.css'

export const Agazatok = () => {
  const [agazat,setAgazat]=useState([])
  const [tanfolyamok,setTanfolyamok]=useState([]) 
  const [filter,setFilter]=useState(0)


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
        <div className="row items">
          {agazat ? agazat.map((obj) => (
                <div key={obj.id} className='col-lg-2 col-md-3 col-sm-4 col-6'>
                  {' '}
                 
                  <div className="font-awesome" > <i className={obj.icon + (filter===obj.id? " piros":" feher")   }  onClick={()=>setFilter(obj.id)} ></i></div>
                  <div className='service-desc'><h3>{obj.name}</h3></div>
                </div>
              ))
            : 'loading'}
             <div  className='col-lg-2 col-md-3 col-sm-4 col-6 all'> 
                <div className="font-awesome "> <i className={"fas fa-school" + (filter===0? " piros":" feher") } onClick={()=>setFilter(0)}></i></div>
                <div className='service-desc '><h3>Minden ágazat</h3></div>
              </div>
          </div>
      </div>
    </div>
    <div className="container" id="tanfolyam-list">
    
      <div className="row ">
        <div className="col-auto" >
           <Tanfolyamok data={tanfolyamok} filter={filter}/>
        </div>
        
      </div>
      
    </div>
   
    </div>
  )
}
