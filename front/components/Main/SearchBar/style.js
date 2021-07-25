import styled, { css } from 'styled-components';

export const SearchBarIconStyle = css`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 4;
  overflow: visible;
`;

export const SearchBarContainer = styled.div`
  position: absolute;
  width: 100% !important;
  z-index: 100 !important;
  transition: background-color 0.4s cubic-bezier(0.35, 0, 0.65, 1) 0s !important;
  padding-bottom: 16px !important;
`;

export const SearchBarLayout = styled.div`
  -webkit-box-align: center !important;
  display: flex !important;
  align-items: center !important;
  padding-top: 16px !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
`;

export const SearchBarArea = styled.div`
  -webkit-box-align: stretch !important;
  display: flex !important;
  align-items: stretch !important;
  height: 48px !important;
  width: 100% !important;
`;

export const SearchBarFrame = styled.div`
  -webkit-box-flex: 1 !important;
  -webkit-box-align: center !important;
  align-items: center !important;
  background-color: rgb(255, 255, 255) !important;
  border: 1px solid rgb(255, 255, 255) !important;
  border-radius: 24px !important;
  display: flex !important;
  flex-grow: 1 !important;
  box-shadow: rgb(0 0 0 / 15%) 0px 5px 12px !important;
`;

export const SearchBarForm = styled.form`
  flex: 1 !important;
`;

export const SearchBarFormFrame = styled.div`
  width: 100% !important;
  height: 100% !important;
  padding-left: 12px !important;
  padding-right: 4px !important;
  position: relative !important;
`;

export const SearchBarLabel = styled.label`
  display: flex !important;
  align-items: center !important;
  white-space: nowrap !important; 
  height: 48px !important;
  margin: 0px !important;
`;

export const SearchBarTitle = styled.span`
  border: 0px !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(100%) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0px !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
`;

export const SearchBarInput = styled.input`
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 400 !important;
  background: none !important;
  border: 0px !important;
  color: #222222 !important;
  margin: 0px !important;
  height: 100% !important;
  width: 100% !important;
  text-overflow: ellipsis !important;
  padding: 0 8px !important;
`;

export const SearchBarInputTextBox = styled.div`
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  display: flex !important;
  font-size: 14px !important;
  line-height: 18px !important;
  font-weight: 600 !important;
  color: #222222 !important;
  text-align: center !important;
  justify-content: center !important;
  cursor: text !important;
`;

export const SearchBarIconContainer = styled.div`
  padding-right: 8px !important;
  color: #FF385C !important;
`;
