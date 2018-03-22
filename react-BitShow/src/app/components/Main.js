import React from "react"
import {ShowCard} from "./ShowCard"

const Main =(props)=>{
    const {showList} = props;

   
    const filterShows = (list) => {
        let limit = (list.length <= 48) ? list.length : 48
        let newList=[]
        for (let i = 0; i < limit; i++) {
            let item = list[i];
            newList.push(item)
        }
        return newList
    }


    return (
       <div className="container">
        <div className="headline-holder">
            <h1>Popular Shows</h1>
        </div>
            <div className="row">{
                filterShows(showList).map((show,index)=>{

                  return  <ShowCard showData={show} key={index}/>
                })

            }
        </div>
       </div>
    )
}

export {Main}