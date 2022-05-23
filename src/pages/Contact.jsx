import React from 'react';

export default function Contact() {
  return (
    <div className="section-container">
      <div className="about-container__content">
        <h3 className='main_item'>Contacto</h3>
        <ul>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/jcarrion28/">
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/george28cs">
              <img src="https://img.icons8.com/color/48/000000/github.png" alt="github" />
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:jorge_28cs@hotmail.com"
              ><img src="https://img.icons8.com/color/48/000000/gmail.png" alt="gmail" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
