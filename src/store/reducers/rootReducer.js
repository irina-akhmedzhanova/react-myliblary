import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  FETCH_BOOKS_START,
  SEARCH_SUCCESS,
  SAVE_TITLE
} from '../actions/actionTypes';

const initialState = {
  books: [],
  error: null,
  loading: false,
  searchSuccess: false,
  searchTitle: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS: 
      return {
        ...state, books: action.books, loading: false
      }
    case FETCH_BOOKS_ERROR: 
      return {
        ...state, error: action.error
      }
    case FETCH_BOOKS_START:
      return {
        ...state, loading: true
      }
    case SEARCH_SUCCESS:
      return {
        ...state, searchSuccess: true
      }
    case SAVE_TITLE: 
    return {
      ...state, searchTitle: action.searchTitle
    }


    default: return state
  }
};

export { rootReducer };