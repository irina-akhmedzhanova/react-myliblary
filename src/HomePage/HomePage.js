import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Container,
  Typography,
  Button,
  Paper,
  Grid,
  CircularProgress
} from '@material-ui/core';
import { CardMini } from '../Card/CardMini';
import { useStyles } from './HomePageStyles';
import { fetchBooks } from '../store/actions/actions';

const URL_Background = "url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"

function HomePageWithoutConnect({
  fetchBooks,
  books,
  loading
}) {

  useEffect(() => {
    fetchBooks()
  }, []);

  const classes = useStyles();

  return (
      <main>
        <Paper
          className={classes.mainFeaturesPost}
          style={{backgroundImage: URL_Background}}
        >
          <Container fixed>
            <div className={classes.overlay}/>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    variant="h3"
                    color="inherit"
                    gutterBottom={true}
                  >
                    Чтение - сила
                  </Typography>
                  <Typography
                    color="inherit"
                    paragraph={true}
                  >
                    "Читай не затем, чтобы противоречить и опровергать, не затем, 
                    чтобы принимать на веру, и не затем, чтобы найти предмет для беседы; 
                    но чтобы мыслить и рассуждать" (Френсис Бэкон)
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography
              align="center"
              variant="h3"
              color="textPrimary"
              gutterBottom={true}
            >
              My library
            </Typography>
            <Typography
              align="center"
              variant="h5"
              color="textSecondary"
              paragraph={true}
            >
              Простой и удобный сервис для любителей книг. Добавляйте книги в свою коллекцию, сохраняйте любимые цитаты, делитесь впечатлениями.
            </Typography>
            <Grid container spacing={5} justify="center">
              <Grid item>
                <NavLink className={classes.navlink} to="/mylibrary-search">
                  <Button variant="contained" color="primary" id="form-adding-book">
                    Поиск книг
                  </Button>
                </NavLink>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Узнать больше
                </Button>
              </Grid>
            </Grid>
            <Container className={classes.cardGrid} maxWidth="md">
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
          </Container>
        </div>
      </main>
  )
};

const mapStateToProps = (state) => ({
  books: state.books,
  loading: state.loading
});

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks())
});

const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageWithoutConnect);

export { HomePage };