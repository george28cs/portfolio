import React from 'react';
import '../styles/Projects.css';

export default function Projects() {
  return (
    <div className="section-container">
      <div className="projects-container__content">
        <h3 className='main_item'>Mi experiencia en proyectos</h3>
        <p>
        A continuación, te presento algunos de los proyectos y módulos en los que he
        trabajado. Dado el caracter privado de algunos de ellos, no se muestran todos
        los detalles, sin embargo, dejo como refencia la
        información que la empresa ha decidido hacer pública.
        <br />
        <br />
        </p>
        <div>
          <ul>
            <li>
              <h3>NoBot</h3>
              <a target="_blank" href="https://www.eleconomista.com.mx/arteseideas/NoBot-un-droide-ideal-para-atencion-al-publico-20210629-0083.html">
                Robot interactivo para atención al público.
              </a>
              Participé como desarrollador backend.
            </li>
            <li>
              <h3>Intel Robot</h3>
              <a target="_blank" href="https://www.xataka.com.mx/robotica-e-ia/palacio-hierro-tendra-robot-tecnologia-intel-que-te-ayudara-a-elegir-laptop">
                Robot: Asistente inteligente para elegir una computadora.
              </a>
              Participé como desarrollador backend y API master.
            </li>
            <li>
              <h3>Display inteligente</h3>
              <a target="_blank" href="https://www.contrareplica.mx/nota-Atienden-locales-de-abarrotes-con-TOTEMS-roboticos-20221424">
                Dispositivo para compras digitales e indicadores de consumo.
              </a>
              Participé como desarrollador backend y API master.

            </li>
            <li>
              <h3>NPM module: spawn_rfid_module</h3>
              <a target="_blank" href="https://www.npmjs.com/package/spawn_rfid_module">
                Módulo de npm para la lectura de tarjetas RFID, desarrrollado en Node.js.
              </a>
            </li>
            <li>
              <h3>controllogix-simple-dashboard </h3>
              <a target="_blank" href="https://github.com/george28cs/controllogix-simple-dashboard">
                Dashboard para la gestión de variables de PLCs (controllogix).
              </a>
              Desarrollado con Node.js, Express con ejs como motor de plantillas, MQTT y MySQL.
            </li>
            <li>
              <h3>Mi portafolio </h3>
              <a target="_blank" href="https://github.com/george28cs/portfolio">
                Mi primer proyecto en React.js. 
              </a>
              Este proyecto me dio la oportunidad de aprender a utilizar React.js, webpack y Babel.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
