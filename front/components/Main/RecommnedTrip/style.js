import styled from 'styled-components';
import { flexSet } from '../../Styles/Theme';

export const Container = styled.div`
  flex: 0.5;
  padding-left: 24px !important;
  padding-right: 24px !important;
  margin-bottom: 40px;
  > h2 {
    padding-left: 20px;
    font-size: 22px;
    font-weight: 700;
    padding-bottom: 8px;
  }
`;

export const ContentTopic = styled.div`
  ${flexSet('null', 'null', 'column')}
  word-break: keep-all;
  > h1 {
    color: inherit !important;
    font-size: 1em !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    margin: 0px !important;
    padding: 0px !important;
    > div {
      ${flexSet('flex-start', 'start', 'null')}
      > span {
        white-space: pre-line;
        max-width: 100%;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 28px;
        color: #222222;
      }
    }
  }
`;

export const ContentWapper = styled.div`
  > div {
    gap: 12px;
    margin: 0px -24px;
    padding: 4px 24px 8px;
    scroll-padding: 0px 24px;
    display: grid !important;
    grid-auto-flow: column !important;
    overflow: auto hidden !important;
    scroll-snap-type: x mandatory !important;
    gap: 12px !important;
    grid-auto-columns: calc(100% - 84px) !important;
  }
`;

export const Content = styled.div`
  scroll-snap-align: start !important;
  > a { 
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
    -webkit-tap-highlight-color: transparent !important;
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
  }
`;

export const ContentImage = styled.div`
  border-top-left-radius: 16px !important;
  border-top-right-radius: 16px !important;
  width: 100% !important;
  > div {
    overflow: clip !important;
    background: rgb(221, 221, 221) !important;
    position: relative !important;
    border-radius: 8px !important;
    > div {
      --dls-liteimage-padding-top: 100%;
      padding-top: var(--dls-liteimage-padding-top) !important;
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

export const ContentImagePicture = styled.img`
  object-fit: cover;
  height: 100% !important;
  width: 100% !important;
  inset: 0px !important;
  position: absolute !important;
`;

export const ContentDesc = styled.div`
  width: 100%;
  > div {
    white-space: normal !important;
    > div {
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
  }
`;
