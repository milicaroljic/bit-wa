import React from "react";
import {UserCard} from "./UserCard";
import {UserItem} from "./UserItem";

// export const UsersList = ({data}) => {
    
//     return (
//         <div>
//             {data.map((user, index) => { return <UserCard key={index} data={user}/>})}
//         </div>
//     )
// }

export const UsersList = ({data}) => {
    return (
        <div>
            {data.map((user, index) => { return <UserItem key={index} data={user}/>})}
        </div>
    )
}
