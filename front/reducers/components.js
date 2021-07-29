import produce from '../utils/produce';

export const initialState = {
  searchBarStatus: false,
};

export const OPEN_SEARCHBAR = 'OPEN_SEARCHBAR';
export const CLOSE_SEARCHBAR = 'CLOSE_SEARCHBAR';

export default (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
  case OPEN_SEARCHBAR: {
    console.log(OPEN_SEARCHBAR);
    draft.searchBarStatus = true;
    break;
  }
  case CLOSE_SEARCHBAR: {
    console.log(CLOSE_SEARCHBAR);
    draft.searchBarStatus = false;
    break;
  }
  default:
    break;
  }
});
