import { SNavbarWrapper, SNav } from "./styles";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <SNavbarWrapper>
      <SNav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/vanilla">VANILLA</NavLink>
        <NavLink to="/coffee">COFFEE</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </SNav>
    </SNavbarWrapper>
  );
};
