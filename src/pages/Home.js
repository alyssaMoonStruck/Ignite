import React, { useEffect } from 'react'
import GameDetail from '../components/GameDetail'
import { loadGames } from '../actions/gamesAction'
import { loadDetail } from "../actions/detailAction"
import { useDispatch, useSelector } from 'react-redux'
//Styling and Animations
import styled from 'styled-components'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { fadeIn } from '../animations'
//Components
import Game from '../components/Game'
import { useLocation } from 'react-router-dom'

const Home = () => {
    //Get current location
    const location = useLocation()
    const pathsplit = location.pathname.split("/")
    const pathId = pathsplit[2]

    //FETCH GAMES
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames())
        if ( pathId )
            dispatch(loadDetail(pathId))
        
}, [dispatch])
//Get data back
const { popular, newGames, upcoming, searched } = useSelector((state) => state.games)

    return(
    <GameList variants={fadeIn} initial="hidden" animate="show">
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence>{ pathId && <GameDetail pathId={pathId} /> }</AnimatePresence>
            {searched.length ? (
        <div className="searched">
            <h2>Searched Games</h2>
            <Games>
                {searched.map((game) => (
                <Game 
                name={game.name} 
                released={game.released} 
                id={game.id}
                image={game.background_image}
                key={game.id}
                />
            ))}
            </Games>
        </div>
        ) : (
            ""
        )}

            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map((game) => (
                <Game 
                name={game.name} 
                released={game.released} 
                id={game.id}
                image={game.background_image}
                key={game.id}
                />
            ))}
            </Games>

        <h2>Popular Games</h2>
        <Games>
            {popular.map((game) => (
                <Game 
                name={game.name} 
                released={game.released} 
                id={game.id}
                image={game.background_image}
                key={game.id}
                />
            ))}
        </Games>
        <h2>New Games</h2>
        <Games>
            {newGames.map((game) => (
                <Game 
                name={game.name} 
                released={game.released} 
                id={game.id}
                image={game.background_image}
                key={game.id}
                />
            ))}
            </Games>
        </AnimateSharedLayout>
    </GameList>

    )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    @media (max-width: 600px) {
        padding: 0rem 1rem;
    }
    h2 {
        padding: 5rem 0rem;
    }
`

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-row-gap: 3rem;
    grid-column-gap: 5rem;
    grid-template-columns: repeat(auto-fit,minmax(260px, 1fr));
`

export default Home