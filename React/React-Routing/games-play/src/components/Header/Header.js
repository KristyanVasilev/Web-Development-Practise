import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContexts';

export const Header = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext)
    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                {isAuthenticated &&
                    (<div id="user">
                        <span>Hello {userEmail}!</span>
                        <Link to="/create-game">Create Game</Link>
                        <Link to="/logout">Logout</Link>
                    </div>)}
                {!isAuthenticated &&
                    (<div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>)}
                <Link to="/catalog">All games</Link>
            </nav>
        </header>
    );
};