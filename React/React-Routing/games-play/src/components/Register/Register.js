import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContexts';

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password'
};

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    }, onRegisterSubmit);
    return (
        <section id="register-page" className="content auth">
            <form id="register" method='POST' onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="maria@email.com"
                        name={RegisterFormKeys.Email}
                        value={values[RegisterFormKeys.Email]}
                        onChange={changeHandler}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        id="register-password"
                        name={RegisterFormKeys.Password}
                        value={values[RegisterFormKeys.Password]}
                        onChange={changeHandler}
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirm-password"
                        name={RegisterFormKeys.ConfirmPassword}
                        value={values[RegisterFormKeys.ConfirmPassword]}
                        onChange={changeHandler}
                    />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
};