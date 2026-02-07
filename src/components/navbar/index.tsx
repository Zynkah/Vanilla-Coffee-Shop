import { SNavbarWrapper, SNav, SNavUserLinks } from "./styles";
import { NavLink } from "react-router-dom";
import cartIcon from "../../assets/cart.svg";
import profileIcon from "../../assets/profile.svg";
// import phoneIcon from "../../assets/phone.svg";

export const Navbar = () => {
  return (
    <SNavbarWrapper>
      <SNav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/vanilla">VANILLA</NavLink>
        <NavLink to="/coffee">COFFEE</NavLink>
        <SNavUserLinks>
          {/* <NavLink to="/contact">
            <img src={phoneIcon} alt="Phone" width={24} />
          </NavLink> */}
          <NavLink to="/profile">
            <img src={profileIcon} alt="Profile" width={24} />
          </NavLink>
          <NavLink to="/cart">
            <img src={cartIcon} alt="Shopping cart" width={24} />
          </NavLink>
        </SNavUserLinks>
      </SNav>
    </SNavbarWrapper>
  );
};
