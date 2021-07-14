import React from 'react';

import {
  Container, ContentContainer, ContentLink, ContentImageContainer, ContentTextContainer,
} from './style';

import StartHostingImage from '../../../data/StartHosting.json';

const StartHosting = (windowSize) => {
  const StartHostingImageData = StartHostingImage.data;

  return (
    <div>
      <Container>
        <ContentContainer>
          <ContentLink href="/">
            <div style={{ paddingTop: '125%' }} />
            <ContentImageContainer>
              <div style={{ height: '100%', width: '100%', backgroundSize: 'cover' }}>
                <picture>
                  <source srcSet={`${StartHostingImageData.img1440} + ' 1x, ' + ${StartHostingImageData.img2560} + '  2x'`} media="(min-width: 1440px)" />
                  <source srcSet={`${StartHostingImageData.img720} + ' 1x, ' + ${StartHostingImageData.img1440} + '  2x'`} media="(min-width: 744px)" />
                  <source srcSet={`${StartHostingImageData.img320} + ' 1x, ' + ${StartHostingImageData.img720} +  ' 2x'`} />
                  <img aria-hidden="true" alt="" src={StartHostingImageData.img} />
                </picture>
              </div>
            </ContentImageContainer>
            <ContentTextContainer role="presentation">
              <div>
                <span>호스팅 시작하기</span>
              </div>
              <div>
                <span>숙소를 공유하여 부수입을 올리고 새로운 가능성을 만나세요.</span>
              </div>
              <div>
                <button type="button">
                  <span>자세히 알아보기</span>
                </button>
              </div>
            </ContentTextContainer>
          </ContentLink>
        </ContentContainer>
      </Container>
    </div>
  );
};

export default StartHosting;
