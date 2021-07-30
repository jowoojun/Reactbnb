import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { faSearch, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { OPEN_SEARCHBAR, CLOSE_SEARCHBAR } from '../../../reducers/components';

import useScrollY from '../../../hooks/UseScrollY';
import useInput from '../../../hooks/useInput';
import useDisableBodyScroll from '../../../hooks/useDisableBodyScroll';

import DialogMainSearchBar from '../../Dialog/MainSearchBar';
import {
  SearchBarContainer, SearchBarLayout, SearchBarArea, SearchBarFrame, SearchBarForm,
  SearchBarFormFrame, SearchBarLabel, SearchBarTitle, SearchBarInput, SearchBarIconContainer,
  SearchBarInputTextBox, SearchBarButtonBox, SearchBarButton, SearchBarButtonIconBox,
} from './style';

const BarFix = {
  position: 'fixed',
  top: '0px',
  backgroundColor: 'rgb(255, 255, 255)',
};

const IconStyle = {
  display: 'block',
  fill: 'none',
  height: '16px',
  width: '16px',
  stroke: 'currentcolor',
  strokeWidth: '4',
  overflow: 'visible',
};

const SearchBar = (windowSize) => {
  const dispatch = useDispatch();
  const scrollY = useScrollY();
  const { searchBarStatus } = useSelector((state) => state.components);
  const [searchInput, onChangeSearchInput, setSearchInput] = useInput('');
  useDisableBodyScroll(searchBarStatus);

  const onFocus = useCallback(() => {
    console.log('Focus');
    dispatch({
      type: OPEN_SEARCHBAR,
    });
  }, []);

  const onClick = useCallback(() => {
    console.log('onClick');
    setSearchInput('');
    dispatch({
      type: CLOSE_SEARCHBAR,
    });
  }, []);

  const onChange = useCallback(() => {
    console.log('onChange');
  }, []);

  return (
    <SearchBarContainer style={scrollY !== 0 ? BarFix : {}}>
      <SearchBarLayout focus={searchBarStatus}>
        <SearchBarArea focus={searchBarStatus}>
          {searchBarStatus && (
            <SearchBarButtonBox>
              <SearchBarButton aria-label="취소" type="button" onClick={() => onClick()}>
                <SearchBarButtonIconBox>
                  <FontAwesomeIcon icon={faChevronLeft} style={IconStyle} />
                </SearchBarButtonIconBox>
              </SearchBarButton>
            </SearchBarButtonBox>
          )}
          <SearchBarFrame focus={searchBarStatus}>
            <SearchBarForm action="/s/all" method="get" role="search">
              <SearchBarFormFrame>
                <SearchBarLabel>
                  <SearchBarTitle>위치</SearchBarTitle>
                  <SearchBarInput
                    focus={searchBarStatus}
                    onFocus={() => onFocus()}
                    onChange={onChangeSearchInput}
                    aria-autocomplete="list"
                    aria-expanded={!searchBarStatus ? 'false' : 'true'}
                    role="combobox"
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                    placeholder={!searchBarStatus ? '' : '어디로 여행가세요?'}
                    value={searchInput}
                  />
                  {!searchBarStatus && (
                    <SearchBarInputTextBox data-placeholder="true" aria-hidden="true">
                      <SearchBarIconContainer>
                        <FontAwesomeIcon icon={faSearch} style={IconStyle} />
                      </SearchBarIconContainer>
                      어디로 여행가세요?
                    </SearchBarInputTextBox>
                  )}
                </SearchBarLabel>
              </SearchBarFormFrame>
            </SearchBarForm>
          </SearchBarFrame>
        </SearchBarArea>
      </SearchBarLayout>
      {searchBarStatus && <DialogMainSearchBar />}
    </SearchBarContainer>
  );
};

export default SearchBar;
