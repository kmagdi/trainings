import './navigation.css'
import { NavLink } from "react-router-dom";


export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
    
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <img  className='logo' src='img/logo.jpg'/>
          <a className='navbar-brand page-scroll' href='#page-top'> KSZC </a>{' '}
        </div>

        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1' >  
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#page-top' className='page-scroll' onClick={() =>window.location = '/#page-top'}><i style={{color:"blue"}} className="fas fa-home"></i></a>
            </li>
            <li>
              <NavLink  className='page-scroll' to="/agazatok">Tanfolyamok</NavLink>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll' onClick={() =>window.location = '/#portfolio'}>Galéria</a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll' onClick={() =>window.location = '/#testimonials'}>Rólunk írták</a>
            </li>
            
            <li>
              <NavLink  className='page-scroll' to="/kapcsolat">Kapcsolat</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
