import React from 'react';
import headerImg from '../../images/header-img.jpg';
import './Home.css';
import sectImg from '../../images/header-img-preview.png';
import '../Home/HeaderSect.css';
import {Link} from 'react-router-dom'
// import HeaderSect from '../Home/HeaderSect'

function Home() {
  return (
    <div>
    <div className='app-wrapper' id='home'>

      <div className='app-wrapper_info'>
          <p className='header-p'>Express food to raise your mood</p>
          <h1 className='app-header_h1'>African Cafe</h1>
          <p className='menu-info' style={{ margin: '2rem 0'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p className='price-tag'>$14.99</p>
          <Link to='/Products'><button type='button' className='header-btn'>Explore Menu</button></Link>
      </div>

      <div className='app-wrapper_img'>
        <img src={headerImg} alt='any thing' className='app-header_img'/>
      </div>
    </div>

    {/* // HeaderSection Start from here */}
    <div className='wrapper'>
        <div className='delivery-wrapper'>
            <h1 className='title'>Free Shipping</h1>
            <p>Free shipping on all order</p>
            <p>Call: <span>+234 814 654 9830</span></p>
        </div>

        <div className='time-wrapper'>
            <h2 className='title'>Opening Hours</h2>
            <p>Monday - Sunday</p>
            <p><span>9.00a.m - 7.00p.m</span></p>  
        </div>

        <div className='img-wrapper'>
            <img src={sectImg} alt='any thing' className='sect-img'/>
        </div>

    </div>
    </div>

  );
}

export default Home;