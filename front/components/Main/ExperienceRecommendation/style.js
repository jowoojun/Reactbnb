import styled, { css } from 'styled-components';
import theme, {
  flexSet, SectionAttr, FontColor,
} from '../../Styles/Theme';
import {
  MultiContentImgSildeFrame, MultiContentFrame, MultiContentImageFrame,
  MultiContentImagePictureFrame, MultiContentDescFrame,
} from '../../Styles/Content';
import {
  ContentTitleFrame, ContentSubtitleFrame,
} from '../../Styles/Font';

export const TitleVariables = css`
  --tl-color:#222222; 
  --tl-font-size:22px;
  --tl-font-weight:700; 
  --tl-letter-spacing:-0.02em; 
  --tl-line-height:28px;
`;

export const SubtitleVariables = css`
  --tl-color:#222222; 
  --tl-font-size:18px;
  --tl-font-weight:400; 
  --tl-line-height:24px;
`;

export const Container = styled.section`
  ${SectionAttr}
  padding-top: 24px !important;
  padding-bottom: 24px !important;
`;

export const ContentTopic = styled.div`
  ${flexSet('null', 'null', 'column')}
  padding-bottom: 8px !important;
  word-break: keep-all;
  > h1 {
    margin: 0px !important;
    padding: 0px !important;
  }
`;

export const ContentTitle = styled.span`
  ${ContentTitleFrame}
  ${TitleVariables}
`;

export const ContentSubtitle = styled.span`
  ${ContentSubtitleFrame}
  ${SubtitleVariables}
`;

export const ContentWapper = styled.div`
  ${MultiContentImgSildeFrame}
  margin: 0px -24px;
  padding: 4px 24px 8px;
  scroll-padding: 0px 24px;
  > div {
    scroll-snap-align: start !important;
  }
`;

export const Content = styled.a`
  ${MultiContentFrame}
`;

export const ContentImage = styled.div`
  ${MultiContentImageFrame}
  width: 272px;
  height: 100%;
  minWidth: 268px;
`;

export const ContentImagePicture = styled.img`
  ${MultiContentImagePictureFrame}
`;

export const ContentDesc = styled.div`
  ${MultiContentDescFrame}
`;
