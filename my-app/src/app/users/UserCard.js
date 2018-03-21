import React from "react";

export const UserCard = ({data}) => {
    
    function setCardClass(genderData) {
        if(genderData === "female") {
            return "card female"
        } 
        return "card";
    }

    return (
        <div>   
            <div className="col s12 m4">
                <div className={`${setCardClass(data.gender)}`}>
                    <div className="card-image">
                        <img src={data.picture.medium}/>
                        <span className="card-title">{data.name.first}</span>
                    </div>
                    <div className="card-content">
                        <p>Email: {data.hideEmail()}<br/> 
                        Date of birth: {data.getDob(data.dob)}</p>
                    </div>
                </div>
            </div>
        </div>
    )    
    
}