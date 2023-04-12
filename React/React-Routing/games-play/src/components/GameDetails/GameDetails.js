import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gameServiceFactory } from '../../services/gameService';
import { useService } from '../../hooks/useService';

export const GameDetails = () => {
    const [game, setGame] = useState([]);
    const { gameId } = useParams();
    const gameService = useService(gameServiceFactory);

    useEffect(() => {
        gameService.getGameById(gameId)
            .then(result => {
                console.log(result);
                setGame(result);
            })
            .catch(err => {
                console.log('Error' + err);
            });
    }, [gameId]);

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">{game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>
            </div>
        </section>
    );
}