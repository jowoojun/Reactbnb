import React from 'react';

import {
  Container, Content, ContentImage, ContentImagePicture, ContentTopic, ContentWapper, ContentDesc,
  ContentTitle, ContentSubtitle
} from './style';

import ExperienceCategories from '../../../data/ExperienceCategories.json';

const ExperienceRecommendation = (windowSize) => {
  const ExperienceCategoriesData = ExperienceCategories.data;

  return (
    <div>
      <Container>
        <section>
          <ContentTopic>
            <h1 tabIndex="-1">
              <div>
                <ContentTitle>체험 둘러보기</ContentTitle>
              </div>
            </h1>
            <div>
              <ContentSubtitle>현지 전문가와 함께하는 독특한 액티비티에 오프라인이나 온라인으로 참여해&nbsp;보세요.</ContentSubtitle>
            </div>
          </ContentTopic>
        </section>
        <div>
          <ContentWapper>
            {ExperienceCategoriesData?.map((content, idx) => (
              <div key={idx}>
                <Content target="_blank" href="/">
                  <ContentImage>
                    <div>
                      <div>
                        <div>
                          <picture>
                            <source srcSet={`${content.img320} + ' 1x, ' + ${content.img720} + ' 2x'`} media="(max-width: 743px)" />
                            <source srcSet={`${content.img240} + ' 1x, ' + ${content.img480} + ' 2x'`} media="(min-width: 743.1px) and (max-width: 1127px)" />
                            <source srcSet={`${content.img320} + ' 1x, ' + ${content.img720} + ' 2x'`} media="(min-width: 1127.1px) and (max-width: 1439px)" />
                            <source srcSet={`${content.img480} + ' 1x, ' + ${content.img1200} + ' 2x'`}  media="(min-width: 1439.1px)" />
                            <ContentImagePicture aria-hidden="true" alt="" src={content.img720} />
                          </picture>
                        </div>
                      </div>
                    </div>
                    <ContentDesc>
                      <div>
                        <div>
                          <span>{content.title}</span>
                        </div>
                        <div>
                          <span>{content.desc.split('&nbsp;')[0]}&nbsp;{content.desc.split('&nbsp;')[1]}</span>
                        </div>
                      </div>
                    </ContentDesc>
                  </ContentImage>
                </Content>
              </div>
            ))}
            <div style={{ width: '12px' }} />
          </ContentWapper>
        </div>
      </Container>
    </div>
  );
};

export default ExperienceRecommendation;
