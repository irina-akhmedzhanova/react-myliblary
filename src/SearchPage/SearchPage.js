import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Typography,
  Fab,
  Box,
  AppBar,
  Tabs,
  Tab,
  TextField,
  List,
  ListItem,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { CardGrid } from '../Card/CardGrid';
import { searchBooks, saveSearchTitle, fetchBooks } from '../store/actions/actions';
import { useStylesSearch } from './SearchPageStyles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  }
};

const SearchBookWithoutConnect = ({
  searchBooks,
  saveSearchTitle,
  books,
  fetchBooks,
  searchSuccess,
  searchTitle
}) => {
  const classes = useStylesSearch();

  //For TabPanel
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetchBooks()
  }, []);

  const availableTitle = books.map((item) => item.title);
  const availableAuthor = books.map((item) => item.author)

  const [title, setTitile] = useState({value: ''})

  const [author, setAuthor] = useState({ value: "" });
  const [filterTitle, setFilterTitle] = useState([]);
  const [filterAuthor, setFilterAuthor] = useState([]);
  

  const filter = (value, arr) => {
    if (value !== '' && value.length >= 3) {
      const regV = value;
      const filterT = arr.filter((title) => {
        const t = title.toLowerCase();
        const result = t.match(regV) ? true : false;
        return result
      });
      setFilterTitle(filterT);
    } else {
      setFilterTitle([])
    }
  };

  const inputChangeHandler = (event) => {
    const value = event.target.value;
    const id = event.target.id;
    const tChange = {...title};
    tChange.value = value;

    setTitile(tChange)

    saveSearchTitle(value);


    if (id === 'search-title' && value !== '') {
      filter(value, availableTitle);
    } else filter(value, availableAuthor);
  };

  const setValueInInputTitle = (event) => {
    const value = event.target.id;
    saveSearchTitle(value);
    setFilterTitle([])
  };

  const inputAuthorChangeHandler = (event) => {
    const value = event.target.value;
    const authorChange = { ...author };
    authorChange.value = value;
    setAuthor(authorChange)
  };

  const search = () => {
    searchBooks()
  };

  return (
    <main>
      <Container maxWidth="md" className={classes.searchContent}>
        <Typography
          align="center"
          variant="h3"
          color="textPrimary"
          gutterBottom={true}
        >
          Поиск книг и авторов
        </Typography>
        <Typography
          align="center"
          variant="h5"
          color="textSecondary"
          paragraph={true}
        >
          Введите название книги или автора в соответствующее поле и нажмите кнопку 'Search'
        </Typography>
        <Container className={classes.root} maxWidth="md">
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="action tabs example"
            >
              <Tab label="Поиск по названию книги" {...a11yProps(0)} />
              <Tab label="Поиск по автору" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <TextField
              id="search-title"
              name="title"
              label="Название"
              value={searchTitle}
              type="text"
              variant="outlined"
              fullWidth
              autoComplete="off"
              onChange={inputChangeHandler}
            />
            <div>
              <List component="nav">
                {filterTitle.map((title, index) => (
                  <ListItem
                    button
                    key={title + index}
                    id={title}
                    onClick={setValueInInputTitle}
                  >
                    {title}
                  </ListItem>
                ))}
              </List>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TextField
              id="search-author"
              name="author"
              label="Автор"
              value={author.value}
              type="text"
              variant="outlined"
              fullWidth
              autoComplete="off"
              onChange={inputAuthorChangeHandler}
            />
            <div>
              <List component="nav">
                {filterAuthor.map((title, index) => (
                  <ListItem
                    button
                    key={title + index}
                    id={title}
                    onClick={setValueInInputTitle}
                  >
                    {title}
                  </ListItem>
                ))}
              </List>
            </div>
          </TabPanel>
        </Container>
        <Box className={classes.searchBtn}>
          <Fab variant="extended" color="primary" onClick={search}>
            <SearchIcon className={classes.extendedIcon} />
              Search
          </Fab>
        </Box>

        {searchSuccess
          ? <CardGrid>
            <Typography align="center">Результаты поиска</Typography>
          </CardGrid>
          : null}
      </Container>
    </main>
  )
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  books: state.books,
  searchSuccess: state.searchSuccess,
  searchTitle: state.searchTitle
});

const mapDispatchToProps = (dispatch) => ({
  searchBooks: () => dispatch(searchBooks()),
  saveSearchTitle: (value) => dispatch(saveSearchTitle(value)),
  fetchBooks: () => dispatch(fetchBooks(),)
});

const SearchBook = connect(mapStateToProps, mapDispatchToProps)(SearchBookWithoutConnect);

export { SearchBook };