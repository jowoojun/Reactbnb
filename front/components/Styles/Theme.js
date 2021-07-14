import { css } from 'styled-components';

const theme = {
  primaryColor: '#fe5131',
  subColor: '#59C3C3',
  borderColor: '#ddd',
  borderSet: '1px solid #ddd',
  blackText: '#000',
  whiteText: '#fff',
};

export const flexSet = (justifyContent, alignItems, flexDirection) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-direction: ${flexDirection};
`;

export const displayNone = css`
  display: none !important;
`;

export const visibilityHidden = css`
  visibility: hidden !important;
`;

export const SectionAttr = css`
  box-sizing: border-box;
  margin-bottom: 24px;
  padding-left: 24px !important;
  padding-right: 24px !important;
`;

export const FontColor = css`
  color: rgb(34, 34, 34)
`;

export const FontWhiteColor = css`
  color: rgb(255, 255, 255)
`;

export const ButtonColor = css`
  color: rgb(255, 255, 255)
`;

export default theme;
