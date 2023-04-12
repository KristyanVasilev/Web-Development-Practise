import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { gameServiceFactory } from '../../services/gameService';
import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContexts';
import { Link } from 'react-router-dom';

export const GameDetails = () => {
    const [game, setGame] = useState([]);
    const { gameId } = useParams();
    const gameService = useService(gameServiceFactory);
    const { userId } = useContext(AuthContext)
    const navigate = useNavigate();

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

    const onDeleteClick = async (gameId) => {
        await gameService.deleteGame(gameId);
        navigate('/catalog');
    }

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
                {userId === game._ownerId && (
                    <div className="buttons">
                        <Link to={`/catalog/${game._id}/edit`} className="button">Edit</Link>
                        <button className="button" onClick={onDeleteClick}>Delete</button>
                    </div>
                )}

            </div>
        </section>
    );
}