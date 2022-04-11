import React from 'react';

export default function SlideCard(props) {
  return (
    <div className="slide-card">
      {props.icon}
      <h3> {props.title}</h3>
      <ul>
        {props.items.map((item, index) => {
          return (
            <li className="slide-card_skills__items" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
