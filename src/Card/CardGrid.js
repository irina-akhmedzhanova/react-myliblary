import {
  Container,
  Typography,
  Grid,
  CircularProgress,
} from '@material-ui/core';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchBooks } from '../store/actions/actions';
import { CardMini } from './CardMini';

const CardGridW = ({
  loading,
  books,
  ...props
}) => {
  useEffect(() => {
    searchBooks()
  }, []);

  return (
    <Container style={{marginBottom: "32px"}} maxWidth="md">
        {props.children}
            <Grid container spacing={4} justify="center">
              {loading 
                ? <Grid item><CircularProgress /></Grid>
                : books.map((book) => (
                  <Grid item 
                    key={book.ISBN}
                    xs={12} 
                    sm={6} 
                    md={4}
                  >
                    <CardMini
                      title={book.title}
                      author={book.author}
                      desctiption={book.desctiption}
                      image={book.image}/>
                  </Grid>
              ))}
            </Grid>
          </Container>
         
  )
};

const mapStateToProps = (state) => ({
  books: state.books,
  loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
  searchBooks: dispatch(searchBooks())
});

const CardGrid = connect(mapStateToProps, mapDispatchToProps)(CardGridW);

export { CardGrid }