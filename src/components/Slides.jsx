import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  FaDatabase,
  FaFileVideo,
  FaNetworkWired,
  FaBuffer,
  FaReact,
  FaLaptopCode,
  FaConnectdevelop,
  FaCubes,
  FaTools,
} from 'react-icons/fa';

import '../styles/Slide.css';
import SlideCard from './Slide.Card';

export default function Slides() {
  const skills = [
    {
      title: 'Bases de datos SQL',
      items: ['MySQL', 'PostgreSQL', 'SQL Server'],
      icon: <FaDatabase />,
    },
    {
      title: 'Bases de datos NoSQL',
      items: ['MongoDB'],
      icon: <FaDatabase />,
    },
    {
      title: 'Lenguajes de programación',
      items: [
        'JavaScript',
        'TypeScript',
        'Python 3 básico',
        'ladder (Rockwell Automation)',
      ],
      icon: <FaLaptopCode />,
    },
    {
      title: 'Frameworks de backend',
      items: ['Express', 'NestJS', 'Django (básico)'],
      icon: <FaConnectdevelop />,
    },
    {
      title: 'Infraestructura',
      items: ['AWS S3', 'Docker', 'AWS RDS', 'Gitlab CI/CD', 'Node AWS Lambda'],
      icon: <FaBuffer />,
    },
    {
      title: 'Herramientas',
      items: ['Git', 'GitHub', 'GitLab', 'Linux Shell'],
      icon: <FaTools />,
    },
    {
      title: 'Frameworks frontend',
      items: ['React (Básico)'],
      icon: <FaReact />,
    },
    {
      title: 'Virtualización',
      items: ['VMware vSphere', 'VirtualBox', 'VMware Workstation'],
      icon: <FaCubes />,
    },
    {
      title: 'Redes',
      items: [
        'Diagnóstico',
        'Diseño',
        'Firewalls: pfSense',
        'Redes industriales: Modbus, Ethernet, ControlNet',
      ],
      icon: <FaNetworkWired />,
    },
    {
      title: 'Otros',
      items: ['Inkscape', 'Gimp', 'Adobe Premiere Pro'],
      icon: <FaFileVideo />,
    },
  ];
  const settings = {
    centerMode: true,
    infinite: true,
    variableWidth: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    accessibility: true,
    focusOnSelect: true,
  };

  return (
    <div className="slide-wrapper">
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <SlideCard
            key={index}
            title={skill.title}
            items={skill.items}
            icon={skill.icon}
          />
        ))}
      </Slider>
    </div>
  );
}
