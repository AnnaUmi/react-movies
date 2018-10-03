import React, { Component } from 'react';
import Movies from './components/Movies';
import { Route, Switch, Redirect } from 'react-router-dom';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import Header from './components/common/Header/Header';
import NotFound from './components/common/NotFound';
import MovieForm from './components/MovieForm';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/customers" component={Customers} />
            <Route path="/not-found" component={NotFound} />
    
            <Redirect exact from="/" to="movies" />
            <Redirect to="not-found" />
          </Switch>
        </main>



      </React.Fragment>
    );
  }
}

export default App;
