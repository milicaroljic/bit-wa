import React, { Component, Fragment } from 'react';
import { Header } from "./partials/Header"
import { Footer } from "./partials/Footer"
import { Main } from "./components/Main"
import { showService } from "../services/ShowService"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }


  componentDidMount() {
    showService.fetchShows()
      .then((showList) => {
        this.setState({
          data: showList
        })
      })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Main showList={this.state.data} />
        <Footer />
      </Fragment>

    )
  }
}

export { App };
