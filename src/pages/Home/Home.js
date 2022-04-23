import React from 'react';
import headerImg from '../../images/header-img.jpg';
import './Home.css';

function Home() {
  return (
    <div className='app-wrapper' id='home'>

      <div className='app-wrapper_info'>
          <p className='header-p'>Express food to raise your mood</p>
          <h1 className='app-header_h1'>African Cafe</h1>
          <p className='menu-info' style={{ margin: '2rem 0'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p className='price-tag'>$14.99</p>
          <button type='button' className='header-btn'>Explore Menu</button>
      </div>

      <div className='app-wrapper_img'>
        <img src={headerImg} alt='any thing' className='app-header_img'/>
      </div>

    </div>
  );
}

export default Home;