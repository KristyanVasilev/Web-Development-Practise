import './App.css';
import { useEffect, useState } from 'react';
import * as userService from './Services/userService';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Search } from './components/Search';
import { UserList } from './components/UserList';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(users => {
                setUsers(users);
            })
            .catch(err => {
                console.log('Error' + err);
            });
    }, []);

    const onUserCreateSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData);

        const createdUser = await userService.create(data);

        setUsers(state => [...state, createdUser]);
    }

    const onUserEditSubmit = async (e, userId) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData);

        const updatedUser = await userService.userEdit(userId, data);

        setUsers(state => state.map(x => x._id === userId ? updatedUser : x));
    }

    const onUserDelete = async (userId) => {
        await userService.deleteUser(userId);

        setUsers(state => state.filter(u => u._id !== userId));
    }

    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">

                    <Search />

                    <UserList
                        users={users}
                        onUserCreateSubmit={onUserCreateSubmit}
                        onUserDelete={onUserDelete}
                        onUserEditSubmit={onUserEditSubmit}
                    />

                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
