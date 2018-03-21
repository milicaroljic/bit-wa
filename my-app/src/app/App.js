import React from 'react';
import './css/App.css';
import { Footer } from './partials/Footer';
import { Header } from './partials/Header';
import { Main } from './Main';
import { userService } from '../services/UserService';
import { UsersList } from './users/UsersList';
import { Search } from './partials/Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: [],
      isListView: localStorage.getItem("listView") === 'true',
      searchValue: "",
    }
  }

  componentDidMount() {
    userService.fetchUsers()
      .then(usersList => {
        this.setState({
          users: usersList,
          filteredUsers: usersList
        })
      })
  }

  onClickFetchUsers = (event) => {
    event.preventDefault();
    userService.fetchUsers()
      .then(usersList => {
        this.setState({
          users: usersList,
          filteredUsers: usersList
        })
      })
  }

  onClickChangeView = (event) => {
    event.preventDefault();
    const newListViewState = !this.state.isListView;
    console.log(newListViewState)
    
    localStorage.setItem("listView", newListViewState);
    this.setState({ isListView:  newListViewState}, () => {
    });
  }

  searchOnChange = (inputField) => {
    // this.setState({searchValue: inputField})
    console.log(inputField);
    const { users } = this.state;
    const filteredUsers = users.filter(user => { 
      return user.name.first.includes(inputField)
    })
    
    this.setState({filteredUsers})
  }
  
  render() {
    return (
      <div>
        <Header triggerView={this.onClickChangeView} isListView={this.state.isListView} search={this.searchOnChange} refreshUsers={this.onClickFetchUsers} />
        <Search onChange={this.searchOnChange}/>
        <Main data={this.state.filteredUsers} isListView={this.state.isListView} />
        <Footer />
      </div>
    )
  }
}

export default App;
