import React from 'react';

import {
  Container, ContentContainer, ContentLink, ContentImageContainer, ContentTextContainer,
} from './style';

import TripIdeaImages from '../../../data/TripIdeaData.json';

const TripIdea = (windowSize) => {
  const TripIdeaData = TripIdeaImages.data;

  return (
    <div>
      <Container>
        <ContentContainer>
          <ContentLink href="/">
            <div style={{ paddingTop: '125%' }} />
            <ContentImageContainer>
              <div style={{ height: '100%', width: '100%', backgroundSize: 'cover' }}>
                <picture>
                  <source srcSet={`${TripIdeaData.img1440} + ' 1x, ' + ${TripIdeaData.img2560} + '  2x'`} media="(min-width: 1440px)" />
                  <source srcSet={`${TripIdeaData.img720} + ' 1x, ' + ${TripIdeaData.img1440} + '  2x'`} media="(min-width: 744px)" />
                  <source srcSet={`${TripIdeaData.img320} + ' 1x, ' + ${TripIdeaData.img720} +  ' 2x'`} />
                  <img aria-hidden="true" alt="" src={TripIdeaData.img} />
                </picture>
              </div>
            </ContentImageContainer>
            <ContentTextContainer role="presentation">
              <div>
                <span>편안한 자연생활</span>
              </div>
              <div>
                <span>리엑트비앤비가 엄선한 위시리스트</span>
              </div>
              <div>
                <button type="button">
                  <span>여행 아이디어 얻기</span>
                </button>
              </div>
            </ContentTextContainer>
          </ContentLink>
        </ContentContainer>
      </Container>
    </div>
  );
};

export default TripIdea;
