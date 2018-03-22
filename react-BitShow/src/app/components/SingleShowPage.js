import React, { Component, Fragment } from "react"
import {Header} from "../partials/Header"
import {Footer} from "../partials/Footer"
import {Body} from "./Body"
import { showService } from "../../services/ShowService"

class SingleShowPage extends Component{
constructor(props){
    super(props)
    // this.state={

    // }
}


componentDidMount(){
    showService.fetchSeasons()
    console.log( (showService.fetchSeasons()))
}

render(){
    return(
        <Fragment>
        <Header />
        <Body id={this.props.match.params.id}/>
        <Footer />
      </Fragment>
    )
}
}

export {SingleShowPage}