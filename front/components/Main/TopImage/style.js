import styled from 'styled-components';
import theme, { flexSet } from '../../Styles/Theme';

export const Container = styled.div`
  flex: 1;
  margin: 0;
  margin-bottom: 40px;
  padding: 0;
  > div {
    &:first-child {
      div {
        width: 100%;
        img {
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
    &:last-child {
      position: absolute;
      top: 230px;
      left: 20px;
      
      ${flexSet('flex-start', 'flex-start', 'column')}
      > p {
        font-weight: 700;
        button {
          margin-left: 5px;
          margin-bottom: 2px;
          width: 40px;
          height: 20px;
          border: 0px;
          border-radius: 5px;
          background-color: ${theme.blackText};
          p {
            font-weight: 700;
            color: ${theme.whiteText};
          }
        }
      }
      span {
        max-width: 383px;
        max-height: 112px;
        font-size: 32px;
        color: ${theme.blackText};
        font-weight: 700;
      }

      > button {
        width: 145px;
        height: 36px;
        margin-top: 12px;
        padding: 7px 15px;
        border: 0px;
        border-radius: 10px;
        background-color: ${theme.blackText};
        div {
          font-size: 13px;
          font-weight: 700;
          color: ${theme.whiteText};
        }
      }
    }
  }

  @media only screen and (min-width: 320px) {
    > div {
      &:last-child {
        position: absolute;
        top: 240px;
        left: 20px;
      }
    }
  }
  @media only screen and (min-width: 425px) {
    > div {
      &:last-child {
        position: absolute;
        top: 350px;
        left: 30px;
      }
    }
  }
  @media only screen and (min-width: 720px) {
    > div {
      &:last-child {
        position: absolute;
        top: 300px;
        left: 20px;
      }
    }
  }
  @media only screen and (min-width: 960px) {
    > div {
      &:last-child {
        top: 400px;
        left: 30px;
        > p {
          font-size: 24px;
          button {
            width: 60px;
            height: 26px;
            p {
              font-size: 22px;
            }
          }
        }
        span {
          font-size:42px;
        }
        > button {
          width: 210px;
          height: 46px;
          div {
            font-size: 20px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1440px) {
    > div {
      &:last-child {
        top: 550px;
        left: 40px;
        > p {
          font-size: 32px;
          button {
            width: 72px;
            height: 36px;
            p {
              font-size: 28px;
            }
          }
        }
        span {
          font-size: 48px;
        }
        > button {
          width: 250px;
          height: 52px;
          div {
            font-size: 24px;
          }
        }
      }
    }
  }
`;
