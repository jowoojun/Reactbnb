import {
  faSearch, faHeart, faSuitcaseRolling, faComments, faUser,
} from '@fortawesome/free-solid-svg-icons';

export const NavComponents = [
  { icon: faSearch, href: '/', desc: '둘러보기' },
  { icon: faHeart, href: '/', desc: '위시리스트' },
  { icon: faSuitcaseRolling, href: '/', desc: '여행' },
  { icon: faComments, href: '/', desc: '메시지' },
  { icon: faUser, href: '/', desc: '프로필' },
];

export const NavHideStyle = {
  zIndex: '1',
  transform: 'translateY(100%)',
  display: 'flex',
  alignItems: 'center',
  borderTop: '1px solid rgb(235, 235, 235)',
  position: 'fixed',
  bottom: '-60px',
  height: '125px',
  left: '0px',
  right: '0px',
};

export const IconStyle = {
  display: 'block',
  fill: 'none',
  height: '24px',
  width: '24px',
  stroke: 'currentcolor',
  strokWidth: '4',
  overflow: 'visible',
};
