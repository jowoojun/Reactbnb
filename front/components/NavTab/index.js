import React from 'react';
import { useSelector } from 'react-redux';

import {
  faSearch, faHeart, faSuitcaseRolling, faComments, faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useScrollDirection from '../../hooks/UseScrollDirection';
import {
  NavContainer, NavWrap, NavLink, NavIconContainer, NavDesc, IconStyle,
} from './style';

const arr = [
  { icon: faSearch, href: '/', desc: '둘러보기' },
  { icon: faHeart, href: '/', desc: '위시리스트' },
  { icon: faSuitcaseRolling, href: '/', desc: '여행' },
  { icon: faComments, href: '/', desc: '메시지' },
  { icon: faUser, href: '/', desc: '프로필' },
];

const NavHide = {
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

const NavTab = () => {
  const scrollDirection = useScrollDirection();
  const { searchBarStatus } = useSelector((state) => state.components);

  return (
    <NavContainer style={scrollDirection === 'up' || searchBarStatus ? {} : NavHide}>
      <NavWrap>
        {arr.map((link) => (
          <NavLink key={link.href.concat(link.desc)} href={link.href}>
            <NavIconContainer>
              <FontAwesomeIcon icon={link.icon} style={IconStyle} />
            </NavIconContainer>
            <NavDesc>{link.desc}</NavDesc>
          </NavLink>
        ))}
      </NavWrap>
    </NavContainer>
  );
};

export default NavTab;
