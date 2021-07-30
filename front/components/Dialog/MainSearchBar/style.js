import styled from 'styled-components';

export const DialogContainer = styled.div`
  border: none !important;
  border-radius: 0px !important;
  background-color: rgb(255, 255, 255) !important;
  height: calc(var(--vh, 1vh) * 100 - 64px) !important;
  left: 0px !important;
  padding-top: 12px !important;
  padding-bottom: 52px !important;
  position: absolute !important;
  right: 0px !important;
  top: 64px !important;
  width: 100vw !important;
  overflow: auto !important;
  display: block !important;
`;

export const DialogListContainer = styled.div`
  margin: 0px !important;
  padding: 0px !important;
  transition: visibility 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s, opacity 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s !important;
  visibility: visible !important;
  opacity: 1 !important;
`;

export const List = styled.ul`
  margin: 0px 0px 16px !important;
  padding: 0px !important;
`;

export const TitleBox = styled.li`
  list-style-type: none !important;
  margin: 0px !important;
  padding: 0px 32px 2px !important;
`;

export const TitleText = styled.span`
  color: #484848;
  text-transform: uppercase !important;
  font-size: 12px !important;
  line-height: 12px !important;
  font-weight: 800 !important;
`;

export const Box = styled.li`
  list-style-type: none !important;
  cursor: pointer !important;
  padding: 8px 16px 8px 32px !important;
  ${({ buttonBox }) => buttonBox && `
    padding: 8px 32px !important;
    width: 100% !important;
    display: flex !important;
  `};
`;

export const ButtonWapper = styled.div`
  display: flex !important;
  width: 100% !important;
  flex-direction: row-reverse !important;
  align-items: center !important;
  padding: 8px 24px !important;
  margin-top: 8px !important;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px !important;
  border-radius: 32px !important;
  height: 58px !important;
  border: 1px solid rgb(221, 221, 221) !important;
`;

export const ButtonBox = styled.div`
  width: 100% !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
`;

export const ButtonText = styled.div`
  overflow: clip !important;
  font-size: 18px !important;
  line-height: 20px !important;
  font-weight: 800 !important;
  color: rgb(111, 1, 156) !important;
  max-height: 120px !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
`;

export const Wapper = styled.div`
  display: flex !important;
`;

export const ImgBox = styled.div`
  font-size: 17px !important;
  background-color: rgb(247, 247, 247) !important;
  border: 1px solid rgba(176, 176, 176, 0.2) !important;
  border-radius: 8px !important;
  min-width: 48px !important;
  height: 48px !important;
  margin-right: 16px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
`;

export const Img = styled.img`
  object-fit: cover !important;
  width: 48px !important;
  height: 48px !important;
  border-radius: 8px !important;
`;

export const TextBox = styled.div`
  width: 100% !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
`;

export const TextTitle = styled.div`
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 400 !important;
  color: rgb(34, 34, 34) !important;
  max-height: 120px !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
`;

export const TextSubtitle = styled.div`
  font-size: 12px !important;
  line-height: 16px !important;
  font-weight: 400 !important;
  color: rgb(113, 113, 113) !important;
`;
