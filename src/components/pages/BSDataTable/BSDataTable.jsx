import React, { useState } from 'react'
import MainWrapper from '../../layout/MainWrapper'
import SideBar from '../../layout/SideBar'
import Header from '../../layout/Header'
import DataMainSection from './BSDatableMain'

const BSDataTable = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <MainWrapper isToggled={isToggled}>
        <SideBar />
        <div id="page-content-wrapper">
          <Header onToggle={handleToggle} title ={"Data Table"} />

          <DataMainSection />      
          

        </div>

      </MainWrapper>


    </>
  )
}

export default BSDataTable