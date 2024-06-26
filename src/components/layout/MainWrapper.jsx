import React from 'react';


const MainWrapper = ({ isToggled, children }) => {
  // console.log(isToggled)
  return (
    <div className={`d-flex ${isToggled ? 'toggled' : ''}`} id="wrapper">
      {children}
    </div>
  );
};

export default MainWrapper;

