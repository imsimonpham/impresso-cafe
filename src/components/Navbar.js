import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { menuData, logo } from "../data/MenuData";
import { VscThreeBars } from "react-icons/vsc";
import { GiCoffeeCup } from "react-icons/gi";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background: #000;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  transition: all 0.5s ease-in-out;
`;
const Logo = styled.img`
  width: 120px;
  height: 120px;
  cursor: pointer;
  /* border: 1px solid white; */
`;
const MenuBars = styled(VscThreeBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 35px;
    height: 35px;
    fill: white;
    cursor: pointer;
  }
`;
const NavMenu = styled.div`
  /* border: 1px solid white; */
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = css`
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  height: 100%;
  padding: 0 1.5rem;
  font-size: 1.2rem;

  &:hover {
    color: #c7a17a;
  }
`;

const NavMenuLink = styled(Link)`
  ${NavLinks}
  display: flex;
  align-items: center;
`;

const CoffeeCupIcon = styled(GiCoffeeCup)`
  margin-right: 5px;
`;

const Navbar = ({ toggle }) => {
  const [scroll, setScroll] = useState(false);

  const changeHeight = () => {
    if (window.scrollY >= 150) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", changeHeight);
    };
    watchScroll();
  }, []);

  let style = {
    height: scroll ? "80px" : "150px",
  };

  return (
    <Nav style={style}>
      <Link to="/">
        <Logo src={logo.image} alt={logo.alt} />
      </Link>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => {
          return (
            <NavMenuLink to={item.link} key={index}>
              <CoffeeCupIcon />
              {item.title}
            </NavMenuLink>
          );
        })}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
