import React from 'react';
import {UsersList} from './users/UsersList';


export const Main = ({ data }) => {
    console.log(data)
    return (
        <div className="container">
            <div className='row'>
                <UsersList data={data} />
            </div>
        </div>
    )
}