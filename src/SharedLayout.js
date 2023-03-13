import { NavLink, Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <>
      <nav>
        <h1>My Articles</h1>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
