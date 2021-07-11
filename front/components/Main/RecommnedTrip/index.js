import React from 'react';

import {
  Container, ContentTopic, ContentWapper, Content, ContentImage, ContentDesc, ContentImagePicture,
} from './style';

import LocationCategoriesData from '../../../data/RecommendCategories.json';

const RecommendTrip = (windowSize) => {
  const mainLocationCategories = LocationCategoriesData.data;
  const myTheme = {
    
  }
  return (
    <Container>
      <ContentTopic>
        <h1 tabindex="-1">
          <div>
            <span>어디에서나, 여행은 살아보는&nbsp;거야!</span>
          </div>
        </h1>
      </ContentTopic>
      <ContentWapper>
        <div>
          {mainLocationCategories?.map((category, idx) => {
            const mainLocationCategoriesTemplate = (content, num) => (
              <Content key={num}>
                <a key={num} href="/">
                  <ContentImage>
                    <div>
                      <div>
                        <div>
                          <div>
                            <picture>
                              <source srcSet={`${content.img320} + ' 1x, ' + ${content.img720} + ' 2x'`} media="(max-width: 743px)" />
                              <source srcSet={`${content.img240} + ' 1x, ' + ${content.img480} + ' 2x'`} media="(min-width: 743.1px) and (max-width: 1127px)" />
                              <source srcSet={`${content.img320} + ' 1x, ' + ${content.img720} + ' 2x'`} media="(min-width: 1127.1px) and (max-width: 1439px)" />
                              <source srcSet={`${content.img480} + ' 1x, ' + ${content.img1200} + ' 2x'`}  media="(min-width: 1439.1px)" />
                              <ContentImagePicture aria-hidden="true" alt="" decoding="async" src={content.img720} />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ContentImage>
                  <ContentDesc>
                    <div>
                      <div>
                        <span>{content.desc}</span>
                      </div>
                    </div>
                  </ContentDesc>
                </a>
              </Content>
            );
            return windowSize > 745 && windowSize < 1120
              ? idx < 6 && mainLocationCategoriesTemplate(category, idx)
              : mainLocationCategoriesTemplate(category, idx);
          })}
          <div style={{ width: '12px' }} />
        </div>
      </ContentWapper>
    </Container>
  );
};

export default RecommendTrip;
