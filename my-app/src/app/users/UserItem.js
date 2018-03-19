import React from "react";

export const UserItem = ({data}) => {
    
    return (
        <div>
            <ul className="collection">
                <li className="collection-item avatar">
                    <img src={data.picture.medium} alt="" className="circle" />
                    <span className="title">name: {data.name.first}</span>
                    <p>email: {data.hideEmail()} <br />
                        date of birth: {data.getDob(data.dob)}
                    </p>
                </li>
            </ul>
        </div>
    )
}