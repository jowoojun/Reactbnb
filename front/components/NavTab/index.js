import React from 'react';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useScrollDirection from '../../hooks/useScrollDirection';
import {
  NavContainer, NavWrap, NavLink, NavIconContainer, NavDesc,
} from './style';
import { NavComponents, NavHideStyle, IconStyle } from './variables';

const NavTab = () => {
  const scrollDirection = useScrollDirection();
  const { searchBarStatus } = useSelector((state) => state.components);

  return (
    <NavContainer style={scrollDirection === 'up' || searchBarStatus ? {} : NavHideStyle}>
      <NavWrap>
        {NavComponents.map((link) => (
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
