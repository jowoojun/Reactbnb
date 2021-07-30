import styled, { css } from 'styled-components';

export const SearchBarContainer = styled.div`
  position: absolute;
  width: 100% !important;
  z-index: 100 !important;
  transition: background-color 0.4s cubic-bezier(0.35, 0, 0.65, 1) 0s !important;
  padding-bottom: 16px !important;
`;

export const SearchBarLayout = styled.div`
  display: flex !important;
  align-items: center !important;
  padding-top: 16px !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  ${({ focus }) => focus && `
    background: rgb(255, 255, 255) !important;
    border-top-left-radius: 24px !important;
    border-top-right-radius: 24px !important;
  `}
`;

export const SearchBarArea = styled.div`
  display: flex !important;
  align-items: stretch !important;
  height: 48px !important;
  width: 100% !important;
  ${({ focus }) => focus && `
    transform: translate3d(0px, 0px, 0px) !important;
  `}
`;

export const SearchBarButtonBox = styled.div`
  align-items: stretch !important;
  display: flex !important;
  flex-shrink: 0 !important;
  margin-right: 16px !important;
`;

export const SearchBarButton = styled.button`
  appearance: none !important;
  display: inline-block !important;
  border-radius: 50% !important;
  border: none !important;
  outline: none !important;
  margin: 0px !important;
  padding: 0px !important;
  color: rgb(34, 34, 34) !important;
  cursor: pointer !important;
  touch-action: manipulation !important;
  position: relative !important;
  background: transparent !important;
`;

export const SearchBarButtonIconBox = styled.div`
  position: relative !important;
`;

export const SearchBarFrame = styled.div`
  align-items: center !important;
  background-color: rgb(255, 255, 255) !important;
  border: 1px solid rgb(255, 255, 255) !important;
  border-radius: 24px !important;
  display: flex !important;
  flex-grow: 1 !important;
  box-shadow: rgb(0 0 0 / 15%) 0px 5px 12px !important;    
  ${({ focus }) => focus && `
    border: 0px !important;
    box-shadow: none !important;
  `}
`;

export const SearchBarForm = styled.form`
  flex: 1 !important;
`;

export const SearchBarFormFrame = styled.div`
  width: 100% !important;
  height: 100% !important;
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
  width: 100% !important;
  min-height: 1px !important;
  border: none !important;
  outline: none !important;
  margin: 0px !important;
  color: #222222 !important;
  background-color: transparent !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 20px !important;
  padding-left: 8px !important;
  padding-right: 8px !important;
  height: 100% !important;
  text-overflow: ellipsis !important;
  
  ${({ focus }) => focus && `
    color: rgb(34, 34, 34) !important;
    padding-right: 36px !important;
  `}
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
