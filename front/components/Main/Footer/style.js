import styled from 'styled-components';
import { flexSet } from '../../Styles/Theme';

export const Container = styled.section`
  border-top: 1px solid #ddd;
  background-color: #f3f3f3;
  padding: 0 80px 40px;
  ${flexSet(null, null, 'column')}
  > div {
    &:first-child {
      ${flexSet('space-between', 'space-between')}
      width: 100%;
      padding: 40px 0;
      border-bottom: 1px solid #ddd;
      > div {
        display: inline-block;
        > div {
          font-size: 12px;
          font-weight: 700;
        }
      }

      ul {
        width: 100%;
        padding-bottom: 24px;
        margin-bottom: 24px;

        &:last-child {
          padding-bottom: 48px;
          margin-bottom: 0;
        }
        li {
          font-size: 14px;
          margin-top: 17px;
          min-width: 345px;
        }
      }
    }

    &:last-child {
      padding-top: 30px;
      ${flexSet('center', 'center', 'column')}
      height: 123px;
      font-size: 14px;

      figure {
        margin: 10px 0;
        width: 64px;
        height: 64px;

        img {
          min-width: 100%;
          height: 100%;
          transform: translateX(-10%);
        }
      }

      ul {
        padding-bottom: 24px;
        li {
          display: inline-block;
          margin-top: 10px;
          margin-right: 20px;
        }
      }
    }
  }
  @media only screen and (max-width: 1350px) {
    padding: 0 40px;
    > div {
      &:first-child {
        ${flexSet('center', 'flex-start', 'column')}
        border-bottom: 0;
        padding: 20px 0;
        > div {
          padding-top: 20px;
        }

        ul {
          padding-bottom: 24px;
          margin-bottom: 24px;
          border-bottom: 1px solid #ddd;

          &:last-child {
            padding-bottom: 24px;
            margin-bottom: 0;
          }
          li {
            display: inline-block;
          }
        }
      }
    }
  }
`;
