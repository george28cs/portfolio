import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="section-container">
      <ul className="about-container__content">
        <li className="about-container__content__item">
          <i
            className="em em-computer"
            aria-label="PERSONAL COMPUTER"
          />
          &nbsp;Apasionado por la tecnología, el desarrollo de software y la
          creación de productos digitales...
          <br />
          <br />
        </li>

        <li className="about-container__content__item">
          <i
            className="em em-male-student"
            aria-label=""
          />
          &nbsp; Titulado como ingeniero mecánico electricista en la Universidad
          Veracruzana.
          <br />
          <br />
        </li>
        <li className="about-container__content__item">
          <i
            className="em em-passenger_ship"
            aria-label=""
          ></i>
          &nbsp; Actualmente vivo en Coatzacoalcos, Veracruz, México, donde
          trabajo como desarrollador backend.
          <br />
          <br />
        </li>
        <li className="about-container__content__item">
          <i
            className="em em-male-technologist"
            aria-label=""
          ></i>
          &nbsp; Desde pequeño me ha interesado la tecnología, y la resolución
          de problemas.
          <br />
          <br />
        </li>
        <li className="about-container__content__item">
          <i className="em em-oil_drum" aria-label=""></i>
          &nbsp; Después de casi 8 años de trabajar en la industria del aceite y
          gas, decidí dar un giro en mi carrera profesional y me convertí en
          desarrollador backend. Hacer dicho giro me ha permitido expandir mis
          conocimientos en diversas áreas.
          <br />
          <br />
          <br />

        </li>
        <li className="about-container__content__item">
          <i
            className="em em-thinking_face"
            aria-label="THINKING FACE"
          ></i>
          &nbsp; Me gusta aprender nuevas tecnologías, y resolver los problemas
          que se presentan día a día en los proyectos que realizo.
          <br />
          <br />
        </li>
        <li className="about-container__content__item">
          <i
            className="em em-chess_pawn"
            aria-label=""
          ></i>
          &nbsp; Además del desarrollo de software, también me gusta la
          naturaleza, el ajedrez y animar a los niños y jóvenes a que se
          interesen por la tecnología.
          <br />
          <br />
          <br />

        </li>
      </ul>
    </div>
  );
};

export default About;
