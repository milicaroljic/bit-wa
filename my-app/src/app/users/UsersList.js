import React from "react";
import { UserCard } from "./UserCard";
import { UserItem } from "./UserItem";

export const UsersList = ({getUsers, data, isListView }) => {
    
    return (
        <div>
            {data.map((user, index) => {
                return isListView ? <UserItem key={index} data={user} /> : <UserCard key={index} data={user} />
            })}
        </div>
    )
}
