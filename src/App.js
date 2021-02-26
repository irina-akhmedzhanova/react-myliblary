import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { BookPage } from './BookPage/BookPage';
import { HomePage } from './HomePage/HomePage';
import { SearchBook } from './SearchPage/SearchPage';
import { SignUp } from './SignUp/SignUp';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';



function AppWithoutRouter() {

  return (
    <div style={{backgroundColor: "#e9e9e9"}}> 
      <Header />
        <Switch>
          <Route path="/mylibrary/:id" component={BookPage} />
          <Route path="/mylibrary-search" component={SearchBook} />
          <Route path="/mylibrary-signup" component={SignUp} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/" />
        </Switch>
      <Footer />
    </div>
  )
};

const App = withRouter(AppWithoutRouter);

export { App };
