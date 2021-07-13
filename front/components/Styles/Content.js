import styled, { css } from 'styled-components';

export const MultiContentImgSildeFrame = css`
  display: grid !important;
  grid-auto-flow: column !important;
  overflow: auto hidden !important;
  scroll-snap-type: x mandatory !important;
  gap: 12px !important;
`;

export const MultiContentFrame = css`
  cursor: pointer !important;
  position: relative !important;
  touch-action: manipulation !important;
  font-family: inherit !important;
  font-size: inherit !important;
  line-height: inherit !important;
  font-weight: inherit !important;
  border-radius: 0px !important;
  outline: none !important;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
  background: transparent !important;
  border: none !important;
  color: inherit !important;
  display: block !important;
  margin: 0px !important;
  padding: 0px !important;
  text-align: inherit !important;
  text-decoration: none !important;
  height: 100% !important;
  width: 100% !important;
`;

export const MultiContentImageFrame = css`
  border-top-left-radius: 16px !important;
  border-top-right-radius: 16px !important;
  > div:first-child {
    overflow: clip !important;
    background: rgb(221, 221, 221) !important;
    position: relative !important;
    border-radius: 8px !important;
    > div {
      padding-top: 100% !important;
      position: relative !important;
      flex: 1 1 0% !important;
      background-position: 50% 50% !important;
      background-repeat: no-repeat !important;
      > div {
        position: absolute !important;
        inset: 0px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }
    }
  }
`;

export const MultiContentImagePictureFrame = css`
  object-fit: cover;
  height: 100% !important;
  width: 100% !important;
  inset: 0px !important;
  position: absolute !important;
`;

export const MultiContentDescFrame = css`
  width: 100%;
  word-break: keep-all;
  > div {
    white-space: normal !important;
    > div {
      &:nth-child(1) {
        padding-top: 8px !important;
        font-size: 18px !important;
        line-height: 22px !important;
        max-height: 44px !important;
        text-overflow: ellipsis !important;
        color: rgb(34, 34, 34) !important;
        font-weight: 600 !important;
        white-space: pre-line !important;
        > span {
          color: rgb(34, 34, 34);
        }
      }
      &:nth-child(2) {
        font-size: 14px !important;
        line-height: 18px !important;
        max-height: 54px !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        display: -webkit-box !important;
        -webkit-line-clamp: 3 !important;
        -webkit-box-orient: vertical !important;
        color: rgb(113, 113, 113) !important;
        font-weight: 400 !important;
        margin-top: 4px !important;
        white-space: pre-line !important;
        > span {
          color: rgb(34, 34, 34);
        }
      }
    }
  }
`;
