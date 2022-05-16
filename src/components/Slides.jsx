import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  FaDatabase,
  FaBuffer,
  FaHtml5,
  FaLaptopCode,
  FaConnectdevelop,
  FaCube,
  FaTools,
} from 'react-icons/fa';

import '../styles/Slide.css';
import SlideCard from './Slide.Card';
import MoreInfo from './MoreInfo';

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
      items: ['JavaScript', 'TypeScript', 'Python 3 básico'],
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
      title: 'Frontend',
      items: ['React (Básico)', 'HTML5', 'CSS3'],
      icon: <FaHtml5 />,
    },
    {
      title: 'ORM',
      items: ['TypeORM', 'Mongoose', 'Sequelize'],
      icon: <FaCube />,
    },
  ];
  const settings = {
    centerMode: true,
    infinite: true,
    variableWidth: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
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
