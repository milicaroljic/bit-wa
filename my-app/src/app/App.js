import React from 'react';
// import './css/App.css';
import {Footer} from './partials/Footer';
import {Header} from './partials/Header';
import { Main } from './Main';
import { userService } from '../services/UserService';
import { UsersList } from './users/UsersList';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {users: []}
  }

  componentDidMount(){
    userService.fetchUsers()
      .then(usersList => {
        this.setState({users: usersList})
      })
  }

  render(){
      return(
    <div>
      <Header/>
      <Main data={this.state.users} />
      <Footer />
     </div>
      )
  }
}



// const App = ({ data }) => {
//   return (
//       <div>
//           <Header />
//           <Main data={data} />
//           <Footer />
//       </div>
//   )
// }

export default App;
