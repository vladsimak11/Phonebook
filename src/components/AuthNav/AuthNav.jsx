import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink className={css.linkRegister} to="/register">
        Sign Up
      </NavLink>
      <NavLink className={css.linkLogin} to="/login">
        Sign In
      </NavLink>
    </div>
  );
};
