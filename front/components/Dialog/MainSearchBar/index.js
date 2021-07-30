import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  DialogContainer, DialogListContainer, List, TitleBox, TitleText, Box,
  ButtonWapper, ButtonBox, ButtonText,
  Wapper, ImgBox, Img, TextBox, TextTitle, TextSubtitle,
} from './style';

import LocationCategories from '../../../data/mainLocationCategories.json';

const IconStyle = {
  display: 'block',
  height: '28px',
  width: '24px',
  overflow: 'visible',
  color: 'rgb(111, 1, 156)',
};

const DialogMainSearchBar = () => {
  const LocationCategoriesData = LocationCategories.data;

  return (
    <DialogContainer>
      <DialogListContainer aria-label="검색 제안" tabIndex="-1">
        <List>
          <TitleBox>
            <TitleText>언제 어디로든 떠나는 여행</TitleText>
          </TitleBox>
          <Box buttonBox tabIndex="-1">
            <ButtonWapper>
              <div>
                <FontAwesomeIcon icon={faChevronRight} style={IconStyle} />
              </div>
              <ButtonBox>
                <ButtonText>유연한 검색</ButtonText>
              </ButtonBox>
            </ButtonWapper>
          </Box>
        </List>
        <List>
          <TitleBox>
            <TitleText>근처의 인기 여행지</TitleText>
          </TitleBox>
          {LocationCategoriesData?.map((content, idx) => (
            <Box buttonBox={false} role="option" aria-selected="false" tabIndex="-1">
              <Wapper>
                <ImgBox>
                  <Img alt="" src={content.img.concat('?im_w=240&amp;im_q=lowq')} />
                </ImgBox>
                <TextBox>
                  <TextTitle>{content.name}</TextTitle>
                  <TextSubtitle>{content.desc}</TextSubtitle>
                </TextBox>
              </Wapper>
            </Box>
          ))}
        </List>
      </DialogListContainer>
    </DialogContainer>
  );
};

export default DialogMainSearchBar;
