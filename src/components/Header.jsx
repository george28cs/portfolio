import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaHome,
  FaUserAlt,
  FaTools,
  FaPhoneAlt,
  FaTimes,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';

import '../styles/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const [activeId, setActiveId] = useState(1);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    const listener = () => {
      if (!isDesktop && media.matches !== isDesktop) setShowMobileMenu(false);
      setIsDesktop(media.matches);
    };
    listener();
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [isDesktop]);

  const items = [
    { id: 1, value: 'Inicio', link: '/', icon: <FaHome /> },
    { id: 2, value: 'Quien soy', link: '/about', icon: <FaUserAlt /> },
    { id: 3, value: 'Proyectos', link: '/projects', icon: <FaTools /> },
    { id: 4, value: 'Contacto', link: '/contact', icon: <FaPhoneAlt /> },
  ];
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);
  const setDefault = () => (showMobileMenu ? setShowMobileMenu(false) : null);

  return (
    <div className="header" onClick={() => setDefault()}>
      <p className="logo">Jorge Carrión</p>
      <div className="mobile-menu" onClick={toggleMobileMenu}>
        {showMobileMenu ? <FaTimes /> : <FaBars />}
      </div>
      <IconContext.Provider
        value={{ style: { fontSize: '20px', marginRight: '5px' } }}
      >
        <ul className={showMobileMenu ? null : 'hide-mobile-menu'}>
          {items.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => {
                  setActiveId(item.id);
                  toggleMobileMenu();
                }}
              >
                <Link to={item.link}> {item.icon} {item.value}</Link>
                <div
                  className={item.id === activeId ? 'line-active' : 'line-hide'}
                ></div>
              </li>
            );
          })}
        </ul>
      </IconContext.Provider>
    </div>
  );
}
