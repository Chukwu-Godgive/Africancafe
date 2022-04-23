import React from 'react';
import sectImg from '../../images/header-img-preview.png';
import './HeaderSect.css';

function HeaderSect() {
  return (
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
  );
}

export default HeaderSect;