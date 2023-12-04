import React from 'react';

import './Icon.css';

/**
 * Hamburger menu icon.
 * @param {Object} props
 * @param {String} props.className - Additional class(es) for SVG icon
 */
export default function Hamburger(props) {
  const { className } = props;

  return (
    <svg
      className={`mdb-icon ${className || ''}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
    >
      <line x1="4" y1="8" x2="28" y2="8"/>
      <line x1="4" y1="16" x2="28" y2="16"/>
      <line x1="4" y1="24" x2="28" y2="24"/>
    </svg>
  );
}