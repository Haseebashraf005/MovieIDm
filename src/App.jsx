import React, { useState } from 'react';
import MainWrapper from './components/layout/MainWrapper';
import SideBar from './components/layout/SideBar';
import Header from './components/layout/Header';

const App = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <MainWrapper isToggled={isToggled}>
      <SideBar />
      <div id="page-content-wrapper">
        <Header onToggle={handleToggle} />
       
        

      </div>     

    </MainWrapper>
  );
};

export default App;
