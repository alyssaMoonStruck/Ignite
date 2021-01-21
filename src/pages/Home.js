import React, { useEffect } from 'react'
import { loadGames } from '../actions/gamesAction'
import { useDispatch, useSelector } from 'react-redux'
//Styling and Animations
import styled from 'styled-components'
import {motion} from 'framer-motion'
//Components
import Game from '../components/Game'

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(loadGames())
}, [dispatch])
//Get data back
const {popular, newGames, upcoming} = useSelector((state) => state.games)

    return(
    <GameList>
        <h2>Upcoming Games</h2>
        <Games>
            {upcoming.map(game => (
                <Game 
                name={game.name} 
                released={game.released} 
                id={game.id}
                image={game.background_image}
                key={game.id}
                />
            ))}
        </Games>
    </GameList>

    )
}

const GameList = styled(motion.div)`

`

const Games = styled(motion.div)`

`

export default Home