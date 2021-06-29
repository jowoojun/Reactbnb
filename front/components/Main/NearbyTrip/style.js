import styled from 'styled-components';
import { flexSet } from '../../Styles/Theme';

export const Container = styled.div`
  flex: 0.5;
  padding: 0px;
  > h2 {
    padding-left: 20px;
    font-size: 22px;
    font-weight: 700;
    padding-bottom: 8px;
  }
`;

export const Wapper = styled.div`
  ${flexSet('null', 'center', 'row')}

  > section {
    --column-count: 4;
    padding-left: 24px;
    scroll-padding: 0px 24px;
    overflow-x: auto !important;
    display: grid !important;
    gap: 12px !important;
    grid-template-rows: repeat(2, auto) !important;
    grid-template-columns: repeat(calc(var(--column-count) - 1), calc(100% - 98px)) 100%;
    grid-auto-flow: column !important;
    scroll-snap-type: x mandatory !important;
    > div {
      text-transform: uppercase;
      scroll-snap-align: start;
      height: 100%;
      > a{
        -webkit-box-align: center;
        font-size: 16px;
        line-height: 20px;
        color: rgb(34, 34, 34);
        display: flex;
        align-items: center;
        border-radius: 12px;
        > figure {
          > img {
            width: 72px;
            border-radius: 20px;
          }
        }
        > div {
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          > span {
            > b {
              font-weight: 600;
            }
            flex: 0 1 100% !important;
            text-overflow: ellipsis !important;
            overflow: hidden !important;
            white-space: nowrap !important;
            padding-bottom: 2px !important;
          }
        }
      }
    }
  }
`;
