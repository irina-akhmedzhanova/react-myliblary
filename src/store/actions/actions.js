import { db } from '../../Firebase';
import { 
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  FETCH_BOOKS_START,
  SEARCH_SUCCESS,
  SAVE_TITLE
} from './actionTypes';
import { store } from '../store';

const BOOKS = db.collection('books');

export function fetchBooks () {
  return async (dispatch) => {
    dispatch(fetchBooksStart());
    try {
      const books = await BOOKS.get();
      const saveBooks = [];
      books.forEach((doc) => {
        saveBooks.push(doc.data())
      })
      dispatch(fetchBookSuccess(saveBooks))
    } catch (e) {
        dispatch(fetchBooksError(e))
      }
  } 
};

export const fetchBooksStart = () => ({
  type: FETCH_BOOKS_START,
});

export const fetchBookSuccess = (saveBooks) => ({
  type: FETCH_BOOKS_SUCCESS,
  books: saveBooks
});

export const fetchBooksError = (e) => ({
  type: FETCH_BOOKS_ERROR,
  error: e
});

export function searchBooks() {
  return async (dispatch) => {
    dispatch(fetchBooksStart());
    try{
      const value = store.getState().searchTitle;
      console.log(value)
      const books = await BOOKS.where('title', '==', value.toString()).get();
      const saveBooks = [];
      books.forEach((doc) => {
        saveBooks.push(doc.data())
      })
      dispatch(fetchBookSuccess(saveBooks));
      dispatch(searchSuccess());
    } catch (e) {
      dispatch(fetchBooksError)
    }
  }
};

export const searchSuccess = () => ({
  type: SEARCH_SUCCESS
});

export const saveSearchTitle = (value) => ({
  type: SAVE_TITLE,
  searchTitle: value
})