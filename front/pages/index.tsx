import React, { useState, useEffect, useCallback } from 'react';

import { MainContainer } from '../components/Main/style';
import TopImage from '../components/Main/TopImage';
import NearbyTrip from '../components/Main/NearbyTrip';

const Home = () => {
  const [windowSize, setWindowSize] = useState(null);

  const getWindowSize = useCallback(() => {
    const width = document.body.clientWidth;
    setWindowSize(width);
  }, []);

  useEffect(() => {
    getWindowSize();
  });

  useEffect(() => {
    window.addEventListener('resize', getWindowSize);
    return () => {
      window.removeEventListener('resize', getWindowSize);
    };
  }, [windowSize]);

  return (
    <MainContainer>
      <TopImage windowSize={windowSize} />
      <NearbyTrip windowSize={windowSize} />
    </MainContainer>
  );
};

export default Home;
