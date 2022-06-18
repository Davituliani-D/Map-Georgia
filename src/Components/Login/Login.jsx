import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Login.module.css';

const Login = (props) => {

    return (
        <div className={css.container}>

            <form className={css.formCntr} >
                <h1>Log In</h1>
                <p>
                    <label className={css.textLbl} > Username </label>
                    <input type='text' placeholder='Username'></input>
                </p>
                <p>
                    <label className={css.textLbl} > Password </label>
                    <input type='password' placeholder='Password' ></input>
                </p>
                <div className={css.link}>
                    <NavLink to='/AdminPanel'>
                        <button className={css.btn}>Submit</button>
                    </NavLink>
                    <NavLink to='/Kakheti'>
                        <button className={css.btn}>Cancel</button>
                    </NavLink>
                </div>
            </form>

        </div>
    )
}

export default Login