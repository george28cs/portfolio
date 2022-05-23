import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MoreInfo.css';

export default function MoreInfo(){
  return(
    <div className='more-info-wrapper'>
      <Link className="more-info" to='/portfolio/about'>
        Más información
      </Link>
    </div>
  )
};
