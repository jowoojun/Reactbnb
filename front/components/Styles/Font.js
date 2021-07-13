import styled, { css } from 'styled-components';
import { VarFontTitle, VarFontSubtitle } from './Variable';

export const ContentTitle = styled.span`
  ${VarFontTitle}
  white-space: pre-line !important;
  max-width: 100% !important;
  font-size: var(--tl-font-size, 32px) !important;
  font-weight: var(--tl-font-weight, 800) !important;
  letter-spacing: var(--tl-letter-spacing, 0em) !important;
  line-height: var(--tl-line-height, 36px) !important;
  color: var(--tl-color, #222222) !important;
  -webkit-line-clamp: var(--tl-line-clamp) !important;
`;

export const ContentSubTitle = styled.span`
  ${VarFontSubtitle}
  white-space: pre-line !important;
  max-width: 100% !important;
  font-size: var(--tl-font-size, 14px) !important;
  font-weight: var(--tl-font-weight, 400) !important;
  letter-spacing: var(--tl-letter-spacing, 0em) !important;
  line-height: var(--tl-line-height) !important;
  color: var(--tl-color, #717171) !important;
  -webkit-line-clamp: 2 !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  display: -webkit-box !important;
`;
