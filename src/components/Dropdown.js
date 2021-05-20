import React from "react";
import { menuData } from "../data/MenuData";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 1.5rem;
`;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 65px);
  }
`;
const DropdownLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #c7a17a;
  }
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => {
            return (
              <DropdownLink to={item.link} key={index}>
                {item.title}
              </DropdownLink>
            );
          })}
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
