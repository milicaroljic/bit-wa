import React from 'react';
import {UsersList} from './users/UsersList';


export const Main = ({ data, isListView }) => {
    console.log(data)
    return (
        <div className="container">
            <div className='row'>
                <UsersList data={data} isListView={isListView}/>
            </div>
        </div>
    )
}