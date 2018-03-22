import React from "react"
import {Seasons} from "./Seasons"
import {Cast} from "./Cast"

const Body = (props) => {
    const {id} = props;
    return (
        <main className="container">
            <h1 className="single-show-title">{id}</h1>
            <div className="row row1">
                <div className="col-md-6 single-show-img"></div>
                <div className="col-md-6 ">

                    <Seasons />
                    <Cast />

                </div>
            </div>
            <div className="row row2">
                <h2>Show details:</h2>
                <div className="col-12 single-show-details"></div>
            </div>
        </main>

    )
}

export { Body }