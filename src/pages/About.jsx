import React from 'react';
import '../styles/About.css';
import sideImg from '../images/IoT.png';
const About = () => {
  return (
    <div className="section-container">
      <div className="about-container__content">
        <div className="main_item">
          Apasionado por la tecnología, el desarrollo de software y la creación
          de productos digitales.
        </div>
        <div className="flex-about-container">
          <ul className="ul-about-container">
            <li className="about-container__content__item">
              Titulado como ingeniero mecánico electricista en la Universidad
              Veracruzana.
              <br />
              Actualmente vivo en Coatzacoalcos, Veracruz, México, donde trabajo
              como desarrollador backend.
              <br />
            </li>
            <li className="about-container__content__item">
              Desde pequeño me ha interesado la tecnología, y la resolución de
              problemas.
              <br />
            </li>
            <li className="about-container__content__item">
              Durante mis casi 8 años de trabajar en la industria del aceite y
              gas, fui descubriendo como hasta los más pequeños dispositivos
              necesitan estar conectados, de ahí nace mi pasión por el IIoT, y
              poco a poco aprendí como muchas soluciones pueden ser
              desarrolladas en plataformas de código abierto.
              <br />
            </li>
            <li className="about-container__content__item">
              Después de mucho esfuerzo por aprender a programar, me
              enfoqué 100% en el mundo del desarrollo de software, donde me
              especializé en el desarrollo backend.
              <br />
            </li>
            <li className="about-container__content__item">
              Me gusta aprender nuevas tecnologías, y resolver los problemas que
              se presentan día a día en los proyectos que realizo. Actualmente
              mi objetivo profesional es ser un desarrollador fullstack.
              <br />
              <br />
            </li>
            <li className="about-container__content__item">
              Además del desarrollo de software, también me gusta la naturaleza,
              el ajedrez y animar a los niños y jóvenes a que se interesen por
              la tecnología.
              <br />
              <br />
              <br />
            </li>
          </ul>
          <div className='about-container__content__img'>
            <img
              src={sideImg}
              alt="foto de perfil"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
