import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool,faLink } from '@fortawesome/free-solid-svg-icons'
import "./Kozpontok.css"

export const Kozpontok = () => {
  const [kozpont,setKozpont]=useState([])
  useEffect(() => {
    axios.get(`http://localhost:5000/api/intezmenyek`).then(res =>setKozpont(res.data))
  },[])
    return (
      <div id='intezmenyek' className='text-center '>
        <div className='container'>
          <div className='section-title'>
            <h2> Képzési központjaink</h2>
            <p>Felnőttképzés </p>
          </div>
          <div className='row'>
            {kozpont.length>0 ? kozpont.map((obj) => (
                  <div key={`${obj.id}`} className='col-md-4'>
                    {' '}
                    <span className="icon"><FontAwesomeIcon icon={faSchool} /></span>
                    <div className='service-desc '>
                      <h3><a  href={obj.webpage_url}>{obj.name} <span className="icon"><FontAwesomeIcon className="icon-link" icon={faLink} /></span></a></h3>
                    </div>
                  </div>
                ))
            : 'loading'}
          </div>
        </div>
      </div>
    )
  }
  