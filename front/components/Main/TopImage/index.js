import React, { useState, useEffect, useCallback } from 'react';
import {
  Container, WapperContainer, ImageContainer, ImagePosition, TitleImage,
  ContextContainer, ContextPosition, ContextWapper, ContextTextContainer, ContextText,
  ContextButtonContainer, ContextButton, ContentButtonText,
} from './style';

import TopImages from '../../../data/TopImages.json';

const TopImage = (windowSize) => {
  const topImages = TopImages.data;

  return (
    <div>
      <Container>
        <WapperContainer>
          <ImageContainer>
            <ImagePosition>
              <picture>
                <source srcSet={`${topImages.img1440} + ' 1x, ' + ${topImages.img2560} + '  2x'`} media="(min-width: 1440px)" />
                <source srcSet={`${topImages.img720} + ' 1x, ' + ${topImages.img1440} + '  2x'`} media="(min-width: 744px)" />
                <source srcSet={`${topImages.img320} + ' 1x, ' + ${topImages.img720} +  ' 2x'`} />
                <TitleImage aria-hidden="true" alt="" src={topImages.img} />
              </picture>
            </ImagePosition>
          </ImageContainer>
          <ContextContainer>
            <ContextPosition>
              <ContextWapper>
                <span>
                  <ContextTextContainer>
                    <ContextText>
                      어딘가로 떠나고 싶을 때
                      {' '}
                      <br />
                      {' '}
                      ReactBNB가 도와드립니다!
                    </ContextText>
                  </ContextTextContainer>
                </span>
                <span>
                  <ContextButton href="/">
                    <ContextButtonContainer style={{ background: '#FFFFFF' }}>
                      <ContentButtonText>지금 둘러보기</ContentButtonText>
                    </ContextButtonContainer>
                  </ContextButton>
                </span>
              </ContextWapper>
            </ContextPosition>
          </ContextContainer>
        </WapperContainer>
      </Container>
    </div>
  );
};

export default TopImage;
