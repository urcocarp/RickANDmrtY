import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
import './Nav.css';

export default function Nav ({ onSearch, logout }) {
  // const activeStyle = {backgroundColor: "red"};
  // const activeStyle2 = {backgroundColor: "blue"};

  return (
    <nav className={style.container}>
      {/* <Link to='/home'><button>Home</button></Link>
      <Link to='/about'><button>About</button></Link> */}
      {/* NavLink */}
      <NavLink
        to='/home'
        className={({ isActive }) => isActive ? 'activo' : undefined}
      >
        <button className={style.button}>HOME</button>
      </NavLink>
      <NavLink
        to='/about'
        /* style={({ isActive }) => isActive ? activeStyle2 : undefined} */
        className={({ isActive }) => isActive ? 'activo' : undefined}
      >
        <button className={style.button}>ABOUT</button>
      </NavLink>
      <NavLink
        to='/favorites'
        className={({ isActive }) => isActive ? 'activo' : undefined}
      >
        <button className={style.button}>FAVORITES</button>
      </NavLink>
      <SearchBar onSearch={onSearch}/>
      <button className="boton" onClick={logout}>LOGOUT</button>
    </nav>
  )
}