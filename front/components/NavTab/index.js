import React from 'react';

import {
  faSearch, faHeart, faSuitcaseRolling, faComments, faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const NavTab = () => (
  <NavContainer>
    <NavWrap>
      {arr.map((link) => (
        <NavLink href={link.href}>
          <NavIconContainer>
            <FontAwesomeIcon icon={link.icon} style={IconStyle} />
          </NavIconContainer>
          <NavDesc>{link.desc}</NavDesc>
        </NavLink>
      ))}
    </NavWrap>
  </NavContainer>
);

export default NavTab;
