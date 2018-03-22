import React from "react"
import {Link} from 'react-router-dom'

const ShowCard=(props)=>{
    const {showData}=props;
    return(
        <div className="col-md-4 col-show single-show" data-id={showData.id}>
        <Link to={`/show/${showData.id}`}>
        <img src={showData.mediumImage} alt="show" />
        <h3 className="show-title">{showData.name}</h3>
        </Link>
        </div>
    )
}


export {ShowCard}
