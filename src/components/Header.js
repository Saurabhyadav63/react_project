import React from 'react'
import Navbar from './Navbar';

const Header = () => {
  return (
    <div class = "banner">
    <Navbar/>
      <div className="banner__content">
        <div className='container'>
            <h3>PizzaDelivery</h3>
            <h1>MAESTRO<br/>PIZINNI</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Quasi culpa ex ipsam consectetur exercitationem, ducimus eius cumque.</p>
            <div className="banner__btn">
                <a href="" className='btn btn-smart'>DEVLERY NOW</a>
            </div>

        </div>
      </div>
      
    </div>
  )
}

export default Header;
