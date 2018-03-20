import React from 'react';
// import './css/App.css';
import { Footer } from './partials/Footer';
import { Header } from './partials/Header';
import { Main } from './Main';
import { userService } from '../services/UserService';
import { UsersList } from './users/UsersList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isListView: localStorage.getItem("listView")
    }
  }
  
  componentDidMount() {
    userService.fetchUsers()
      .then(usersList => {
        this.setState({
          users: usersList
        })
      })
  }

  onClickChangeView = (event) => {
    event.preventDefault();
    this.setState({isListView: !this.state.isListView});
    localStorage.setItem("listView", !this.state.isListView)
  }

  render() {
    return (
      <div>
        <Header onClick={this.onClickChangeView} isListView={this.state.isListView}/>
        <Main data={this.state.users} isListView={this.state.isListView}/>
        <Footer />
      </div>
    )
  }
}

export default App;
