import {
    Show
} from "../entities/Show"
import {
    BASE_URL,
    SEARCH_ENDPOINT,
    SHOWLIST_ENDPOINT
} from "../shared/constants"

import {Season} from '../entities/Seasons'

class ShowService {
    fetchShows() {
        return fetch("http://api.tvmaze.com/shows")
            .then((response) => response.json())
            .then((showData) => showData.map((show) => {
                
                return new Show(show)
            }))
    }

    fetchSeasons() {
        return fetch(`http://api.tvmaze.com/shows/1/seasons`)
        .then((response)=> response.json())
        .then((singleShowData) => { 
            singleShowData.map((season) => {
            return new Season(season)
        // })

        // })
    })
}

    // fetchCast() {
    //     return fetch("")
    // }

}

export const showService= new ShowService()