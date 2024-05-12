import React, { useState, useEffect } from 'react';
import { MainContent } from "./components/mainContent";
import { SideBar } from "./components/sideBar";
import { SidebarProvider } from './utils/useSidebar';

const WebSite = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.screen.width);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex-row'>
      {screenWidth < 700 ? (
        <div className='Is_small_width'>
        <h2>Извините, но адаптива пока нет </h2>
        </div>
      ) : (
        <SidebarProvider>
          <SideBar/>
          <MainContent/>
        </SidebarProvider>
      )}
    </div>
  );
}

export default WebSite;
