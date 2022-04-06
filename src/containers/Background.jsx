import React, { Fragment } from 'react';
import '../styles/Background.css';

export default function Background() {
  return (
    <Fragment>
      <div className="mask--circle" />
      <div className="mask--trasparency" />
    </Fragment>
  );
}
