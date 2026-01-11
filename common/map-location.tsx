import React from 'react';

export default function MapLocation() {
  return (
    <div className='-mb-54 z-50 relative'>
      <iframe
        src='https://www.google.com/maps?q=10.0162221,77.9681626&z=18&output=embed'
        width='100%'
        height='500'
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
      ></iframe>
    </div>
  );
}
