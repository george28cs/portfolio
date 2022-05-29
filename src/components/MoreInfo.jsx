import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MoreInfo.css';
import AppContext from '../context/AppContext';

export default function MoreInfo() {
  const { setSelectedId } = useContext(AppContext);

  return (
    <div className="more-info-wrapper">
      <Link
        className="more-info"
        to="/portfolio/about"
        onClick={() => setSelectedId(2)}
      >
        Más información
      </Link>
    </div>
  );
}
