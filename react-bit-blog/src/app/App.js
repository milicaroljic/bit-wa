import React, { Component, Fragment } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
import { HomePage } from './components/HomePage'
import { AboutPage } from './components/AboutPage'
import { AuthorsPage } from './components/AuthorsPage'
import { SingleAuthorPage } from './components/SingleAuthorPage'
import { SinglePostPage } from './components/SinglePostPage'
// import { CreatePost} from './components/' 


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/authors" component={AuthorsPage} />
          <Route path="/author/:id" component={SingleAuthorPage} />
          <Route path="/post/:id" component={SinglePostPage} />
          {/* <Route exact path="/new" component={CreatePost} /> */}
          <Route exact path="/about" component={AboutPage} />
        </Switch>
        <Footer />
      </Fragment>
    )
  }
}
export default App;
