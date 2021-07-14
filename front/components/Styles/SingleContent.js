import { css } from 'styled-components';

export const SingleContentContainer = css`
  background: rgb(72, 72, 72) !important;
  display: block !important;
  position: relative !important;
  height: auto !important;
  width: 100% !important;
  overflow: clip !important;
  z-index: 0 !important;
  border: 0px none !important;
  border-radius: 16px !important;
  text-align: left !important;
  text-decoration: none !important;
`;

export const SingleContentLink = css`
  cursor: pointer !important;
  position: relative !important;
  touch-action: manipulation !important;
  border-radius: 0px !important;
  outline: none !important;
  background: transparent !important;
  border: none !important;
  display: block !important;
  margin: 0px !important;
  padding: 0px !important;
  text-decoration: none !important;
  height: 100% !important;
  width: 100% !important;
`;

export const SingleContentImageContainer = css`
  position: absolute !important;
  inset: -1px 0px !important;
  > div {
    display: inline-block !important;
    vertical-align: bottom !important;
    min-height: 1px !important;
    position: relative !important;
    background-position: 50% 50% !important;
    background-repeat: no-repeat !important;
    img {
        height: 100% !important;
        width: 100% !important;
        position: absolute, 
        left: 0px, 
        right: 0px, 
        objectFit: cover, 
        objectPosition: 50% 50%, 
        verticalAlign: bottom
      }
    }
  }
`;

export const SingleContentButton = css`
  cursor: pointer !important;
  touch-action: manipulation !important;
  display: inline-block !important;
  position: relative !important;
  margin: 0px !important;
  padding: 9px 16px !important;
  width: auto !important;
  line-height: 18px !important;
  border: 0px !important;
  border-radius: 8px !important;
  text-align: center !important;
  text-decoration: none !important;
  color: rgb(72, 72, 72) !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  letter-spacing: normal !important;
`;

export const SingleContentTextContainer = css`
  position: absolute !important;
  top: 0px !important;
  display: flex !important;
  flex-flow: column !important;
  align-items: center !important;
  text-align: center !important;
  width: 100% !important;
  padding-top: 32px !important;
  padding-left: 32px !important;
  padding-right: 32px !important;
  z-index: 1 !important;
  @media only screen and (max-width: 743px) {
    position: absolute !important;
    inset: -1px 0px !important;
  }
  
  > div {
    &:nth-child(1) {
      white-space: pre-wrap !important;
      font-weight: 600 !important;
      font-size: 20px !important;
      line-height: 24px !important;
    }
    &:nth-child(2) {
      font-size: 14px !important;
      line-height: 16px !important;
      padding-top: 8px !important;
      white-space: pre-line !important;
    }
    &:nth-child(3) {
      margin-top: 16px !important;
      > button {
        ${SingleContentButton}
      }
    }
  }
`;
