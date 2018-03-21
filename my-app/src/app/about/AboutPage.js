import React from "react"
import {Link } from "react-router-dom"
import { Header } from "../partials/Header"
import { Footer } from "../partials/Footer"

const AboutPage = () => {
    return (
    <React.Fragment>
      <Header hasMenu={false}/>
      <Footer/>
    </React.Fragment>
    )
}

export default AboutPage;