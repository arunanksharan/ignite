import axios from 'axios';
import {popularGamesURL} from '../api';


// ACTION creator

export const loadGames = () => async (dispatch) => {
    // FETCH games - goes to reducer
    const popularData = await axios.get(popularGamesURL())
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results
        }
    })
}
