import React from 'react';
import './MainWrapper.css'; // Ensure you have the styles

const MainWrapper = ({ isToggled, children }) => {
  return (
    <div className={`d-flex ${isToggled ? 'toggled' : ''}`} id="wrapper">
      {children}
    </div>
  );
};

export default MainWrapper;

