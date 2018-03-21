import React from "react";

export const UserItem = ({data}) => {
    
    function setCardClass(genderData) {
        if(genderData === "female") {
            return "female collection-item avatar";
        }
        return "collection-item avatar";
    }

    return (
        <div>
            <ul className="collection">
                <li className={`${setCardClass(data.gender)}`}>
                    <img src={data.picture.medium} alt="" className="circle" />
                    <span className="title">name: {data.name.first}</span>
                    <p><i className="material-icons">email</i>email: {data.hideEmail()} 
                    <br />
                    <span><i className="material-icons">cake</i>date of birth: {data.getDob(data.dob)}</span>
                    </p>
                </li>
            </ul>
        </div>
    )
}