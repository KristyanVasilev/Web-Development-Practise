import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { gameServiceFactory } from './services/gameService';
import { authServiceFactory } from './services/authService';
import { useService } from './hooks/useService';
import { AuthContext } from './contexts/AuthContexts';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Catalog } from "./components/Catalog/Catalog";
import { GameDetails } from "./components/GameDetails/GameDetails";
import { Logout } from './components/Logout/Logout';

function App() {
    const navigate = useNavigate();
    const [games, setGames] = useState([]);
    const [auth, setAuth] = useState({});
    const gameService = gameServiceFactory(auth.accessToken);
    const authService = authServiceFactory(auth.accessToken);

    useEffect(() => {
        gameService.getAllGames()
            .then(result => {
                console.log(result);
                setGames(result);
            })
            .catch(err => {
                console.log('Error' + err);
            });
    }, []);

    const onCreateGameSubmit = async (gameData) => {
        const createdGame = await gameService.createGame(gameData);

        setGames(state => [...state, createdGame]);

        navigate('/catalog');
    }

    const onLoginSubmit = async (data) => {
        const result = await authService.login(data);
        setAuth(result);

        navigate('/catalog');
        console.log(result);
    }

    const onRegisterSubmit = async (data) => {
        const { ['confirm-password']: repass, ...registerData } = data;
        if (repass !== registerData.password) {
            return alert('Passords dont match!');
        }
        const result = await authService.register(registerData);
        setAuth(result);

        navigate('/catalog');
    }

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    }

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        accessToken: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken //Обръща всяко true във false и обратното
    }
    return (
        <AuthContext.Provider value={contextValues}>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home games={games} />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/create-game' element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />} />
                        <Route path='/catalog' element={<Catalog games={games} />} />
                        <Route path='/catalog/:gameId' element={<GameDetails />} />
                        <Route path='/logout' element={<Logout />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
