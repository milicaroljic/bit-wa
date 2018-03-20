import React from "react";

export const UserItem = ({data}) => {
    
    return (
        <div>
            <ul className="collection">
                <li className="collection-item avatar">
                    <img src={data.picture.medium} alt="" className="circle" />
                    <span className="title">name: {data.name.first}</span>
                    <p><i class="material-icons">email</i>email: {data.hideEmail()} 
                    <br />
                    <span><i class="material-icons">cake</i>date of birth: {data.getDob(data.dob)}</span>
                    </p>
                </li>
            </ul>
        </div>
    )
}