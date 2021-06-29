import React from 'react';

import { Container, Wapper } from './style';

import LocationCategoriesData from '../../../data/mainLocationCategories.json';

const NearbyTrip = (windowSize) => {
  const mainLocationCategories = LocationCategoriesData.data;

  return (
    <Container>
      <h2>가까운 여행지 둘러보기</h2>
      <Wapper>
        <section>
          {mainLocationCategories?.map((category, idx) => {
            const mainLocationCategoriesTemplate = (content, num) => (
              <div key={num}>
                <a href="/">
                  <figure>
                    <img src={content.img} alt="" />
                  </figure>
                  <div>
                    <span><b>{content.name}</b></span>
                    <span>{content.desc}</span>
                  </div>
                </a>
              </div>
            );
            return windowSize > 745 && windowSize < 1120
              ? idx < 6 && mainLocationCategoriesTemplate(category, idx)
              : mainLocationCategoriesTemplate(category, idx);
          })}
        </section>
      </Wapper>
      <ul />
    </Container>
  );
};

export default NearbyTrip;
