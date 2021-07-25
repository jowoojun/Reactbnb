import React from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useScrollY from '../../../hooks/UseScrollY';
import {
  SearchBarContainer, SearchBarLayout, SearchBarArea, SearchBarFrame, SearchBarForm,
  SearchBarFormFrame, SearchBarLabel, SearchBarTitle, SearchBarInput, SearchBarIconContainer,
  SearchBarIconStyle, SearchBarInputTextBox,
} from './style';

const BarFix = {
  position: 'fixed',
  top: '0px',
  backgroundColor: 'rgb(255, 255, 255)',
};

const SearchBar = (windowSize) => {
  const scrollY = useScrollY();

  return (
    <SearchBarContainer style={scrollY !== 0 ? BarFix : {}}>
      <SearchBarLayout>
        <SearchBarArea>
          <SearchBarFrame>
            <SearchBarForm action="/s/all" method="get" role="search">
              <SearchBarFormFrame>
                <SearchBarLabel>
                  <SearchBarTitle>위치</SearchBarTitle>
                  <SearchBarInput aria-autocomplete="list" autoComplete="off" autoCorrect="off" spellCheck="false" id="Koan-mobile-p1-koan-search-bar__input" value="" />
                  <SearchBarInputTextBox data-placeholder="true" aria-hidden="true">
                    <SearchBarIconContainer>
                      <FontAwesomeIcon icon={faSearch} style={SearchBarIconStyle} />
                    </SearchBarIconContainer>
                    어디로 여행가세요?
                  </SearchBarInputTextBox>
                </SearchBarLabel>
              </SearchBarFormFrame>
            </SearchBarForm>
          </SearchBarFrame>
        </SearchBarArea>
      </SearchBarLayout>
    </SearchBarContainer>
  );
};

export default SearchBar;
