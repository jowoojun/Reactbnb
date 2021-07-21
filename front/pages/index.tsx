import React, { useState, useEffect, useCallback } from 'react';

import { SearchBarContainer, ContentsContainer } from '../components/Main/style';
import SearchBar from '../components/Main/SearchBar';
import TopImage from '../components/Main/TopImage';
import NearbyTrip from '../components/Main/NearbyTrip';
import RecommnedTrip from '../components/Main/RecommnedTrip';
import TripIdea from '../components/Main/TripIdea';
import ExperienceRecommendation from '../components/Main/ExperienceRecommendation';
import StartHosting from '../components/Main/StartHosting';

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
    <main>
      <SearchBarContainer>
        <SearchBar windowSize={windowSize} />
      </SearchBarContainer>
      <ContentsContainer>
        <TopImage windowSize={windowSize} />
        <NearbyTrip windowSize={windowSize} />
        <RecommnedTrip windowSize={windowSize} />
        <TripIdea windowSize={windowSize} />
        <ExperienceRecommendation windowSize={windowSize} />
        <StartHosting windowSize={windowSize} />
      </ContentsContainer>
    </main>
  );
};

export default Home;
