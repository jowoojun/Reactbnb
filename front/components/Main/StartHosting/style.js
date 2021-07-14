import styled from 'styled-components';

import { FontColor, FontWhiteColor, SectionAttr } from '../../Styles/Theme';
import {
  SingleContentContainer, SingleContentLink, SingleContentImageContainer,
  SingleContentTextContainer,
} from '../../Styles/SingleContent';

export const Container = styled.section`
  ${SectionAttr}
`;

export const ContentContainer = styled.div`
  ${SingleContentContainer}
`;

export const ContentLink = styled.a`
  ${SingleContentLink}
`;

export const ContentImageContainer = styled.div`
  ${SingleContentImageContainer}
`;

export const ContentTextContainer = styled.div`
  ${SingleContentTextContainer}
  span {
    ${FontWhiteColor}
  }
  button {
    background: #FFFFFF !important;
    > span {
      ${FontColor}
    }
  }
`;
