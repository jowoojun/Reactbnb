import styled, { css } from 'styled-components';

import theme, {
  flexSet, FontColor, FontWhiteColor, SectionAttr,
} from '../../Styles/Theme';
import {
  WapperVariables, ContextVariables, ContextContainerVariables,
  TextVariables, ButtonVariables,
} from './variables';
import { ButtonText, ContentTitleFrame } from '../../Styles/Font';
import { SingleContentButton } from '../../Styles/SingleContent';

export const Container = styled.section`
  ${SectionAttr}
  padding-left: 0px !important;
  padding-right: 0px !important;
  margin-bottom: 36px;
`;

export const WapperContainer = styled.div`
  ${WapperVariables}
  display: flex !important;
  align-items: stretch !important;
  justify-content: center !important;
  position: relative !important;
  overflow: hidden !important;
  height: calc(var(--hc-sm-height, 4) / var(--hc-sm-width, 3) * 100vw) !important;
`;

export const ImageContainer = styled.div`
  z-index: 0 !important;
  position: absolute !important;
  top: 0px !important;
  right: 0px !important;
  bottom: 0px !important;
  left: 0px !important;
`;

export const ImagePosition = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  display: inline-block !important;
  vertical-align: bottom !important;
  min-height: 1px !important;
  position: relative !important;
  background-position: 50% 50% !important;
  background-repeat: no-repeat !important;
`;

export const TitleImage = styled.img`
  height: 100% !important;
  width: 100% !important;
  position: absolute;
  left: 0px;
  right: 0px;
  object-fit: cover;
  object-position: 50% 50%;
  vertical-align: bottom;
`;

export const ContextContainer = styled.div`
  position: relative !important;
  width: 100% !important;
  max-width: 1760px !important;
  padding: 96px 24px 32px !important;
`;

export const ContextPosition = styled.div`
  ${ContextVariables}
  position: relative !important;
  width: 100% !important;
  height: 100% !important;
  display: flex !important;
  align-items: var(--ac-sm-align-items, center) !important;
  justify-content: var(--ac-sm-justify-content, flex-start) !important;
`;

export const ContextWapper = styled.div`
  ${ContextVariables}  
  display: flex !important;
  z-index: 0 !important;
  flex-direction: column !important;
  align-items: var(--ac-sm-tc-align-items, flex-start) !important;
  text-align: var(--ac-sm-tc-text-align, start) !important;
`;

export const ContextTextContainer = styled.div`
  ${ContextContainerVariables}
  display: flex;
  justify-content: var(--ccv-justify-content, flex-start);
  text-align: var(--ccv-text-align, start);  
  align-items: var(--ccv-align-items, center);
  padding-top: var(--ccv-padding-top, 12px);
  padding-right: var(--ccv-padding-right, 4px);
  padding-bottom: var(--ccv-padding-bottom, 12px);
  padding-left: var(--ccv-padding-left, 4px);
  max-height: var(--ccv-max-height, 100%);
  max-width: var(--ccv-max-width, 100%);
  background-color: var(--ccv-background-color, undefined);
`;

export const ContextText = styled.span`
  ${TextVariables}
  ${ContentTitleFrame}
`;

export const ContextButton = styled.a`
  ${SingleContentButton}
  border-width: 1px !important;
  border-style: solid !important;
  border-color: black !important;
  padding-top: 4px !important;
  padding-bottom: 4px !important;
  padding-left: 8px !important;
  padding-right: 8px !important;
  color: black !important;  
  border: none !important;  
`;

export const ContextButtonContainer = styled.div`
  justify-content: var(--ehcta-justify-content, flex-start) !important;
  align-items: var(--ehcta-align-items, center) !important;
  padding-top: var(--ehcta-padding-top, 8px) !important;
  padding-right: var(--ehcta-padding-trailing, 16px) !important;
  padding-bottom: var(--ehcta-padding-bottom, 8px) !important;
  padding-left: var(--ehcta-padding-leading, 16px) !important;
  max-height: var(--ehcta-max-height, 100%) !important;
  max-width: var(--ehcta-max-width, 100%) !important;
  background-color: var(--ehcta-background-color, #222222) !important;
  border-radius: 8px !important;
`;

export const ContentButtonText = styled.span`
  ${ButtonVariables}
  ${ButtonText}
`;
