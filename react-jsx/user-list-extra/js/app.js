const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">React Users</a>

            </div>
        </nav>
    )
}

const UserItem = (props) => {
    const { avatar, name, email, dob } = props//destructuring
return (
    
    <div className="col s4 m4">
      <div className="card">
        <div className="card-image">
          <img src={avatar}/>
          <span className="card-title">{name}</span>
       
        <div className="card-content">
          <p>{email}</p>
          <p>{dob}</p>
        </div>
        </div>
      </div>
    </div>
  
)
  
}


const createUser = (userList) => {
    return userList.map((user, index) => {
        return <UserItem key={index} avatar={user.picture.medium} name={user.name.first} email={user.email} dob={user.dob} />
    })
}


const UserList = (props) => {
    const userList = props.users
    return (

        <div className="row">
            {createUser(userList)}
        </div>

    )

}
const Main = (props) => {
    const dataFromMain = props.mainData
    return (
        <div className= "container">
        <UserList users={dataFromMain} />
    </div>
    )
}

const App = (props) => {
    const dataFromApp = props.data
    return (
        <div>
            <Header />
            <Main mainData={dataFromApp} />
            <Footer />
        </div>
    )
}



const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © 2018 Copyright Bit
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer>
    )
}


ReactDOM.render(
    <App data={usersData} />,
    document.querySelector(".root")
)