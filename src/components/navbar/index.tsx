import { SNavbarWrapper, SNav } from "./styles";
import { NavLink } from "react-router-dom";
import cartIcon from "../../assets/cart.svg";

export const Navbar = () => {
  return (
    <SNavbarWrapper>
      <SNav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/vanilla">VANILLA</NavLink>
        <NavLink to="/coffee">COFFEE</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
        <NavLink to="/cart">
          <img src={cartIcon} alt="Add to cart" width={24} />
        </NavLink>
      </SNav>
    </SNavbarWrapper>
  );
};
