import styled, { css } from 'styled-components';

export const IconStyle = css`
  display: block;
  fill: none;
  height: 24px;
  width: 24px;
  stroke: currentcolor;
  strokWidth: 4;
  overflow: visible;
`;

export const NavContainer = styled.nav`
  align-items: center !important;
  background-color: rgb(255, 255, 255) !important;
  border-top: 1px solid rgb(221, 221, 221) !important;
  bottom: 0px !important;
  height: 65px !important;
  left: 0px !important;
  overflow: hidden !important;
  position: fixed !important;
  right: 0px !important;
  z-index: 1000 !important;
  transition: -ms-transform 0.2s cubic-bezier(0, 0, 0.1, 1) 0s, -webkit-transform 0.2s cubic-bezier(0, 0, 0.1, 1) 0s, transform 0.2s cubic-bezier(0, 0, 0.1, 1) 0s, visibility 0s ease 0s !important;
`;

export const NavWrap = styled.div`
  display: flex !important;
  height: 100% !important;
  justify-content: center !important;
  margin: 0px auto !important;
  max-width: 560px !important;
`;

export const NavLink = styled.a`
  outline: none !important;
  align-items: center !important;
  border-radius: 8px !important;
  cursor: pointer !important;
  display: flex !important;
  flex: 1 1 0px !important;
  flex-direction: column !important;
  height: 64px !important;
  hyphens: auto !important;
  justify-content: center !important;
  max-width: 20% !important;
  min-width: 0px !important;
  padding: 0px 2px !important;
  text-align: center !important;
  text-decoration: none !important;
  color: rgb(34, 34, 34) !important;
`;

export const NavIconContainer = styled.div`
  height: 30px !important;
  margin-bottom: 2px !important;
  padding: 3px !important;
  width: 30px !important;
  color: rgb(176, 176, 176) !important;
`;

export const NavDesc = styled.div`
  font-size: 10px !important;
  line-height: 12px !important;
  max-height: 24px !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  font-weight: 600 !important;
  overflow-wrap: break-word !important;
`;
