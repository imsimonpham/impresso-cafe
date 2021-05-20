import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "transparent" : "#C7A17A")};
  white-space: nowrap;
  outline: none;
  border: 1px solid;
  border-color: ${({ primary }) => (primary ? "#fff" : "#C7A17A")};
  font-weight: 700;
  text-shadow: ${({ primary }) =>
    primary ? "0px 0px 20px rgba(0, 0, 0, 0.9)" : "0"};
  border-color: ${({ primary }) => (primary ? "#fff" : "none")};
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  color: #fff;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#fff" : "#000")};
    color: ${({ primary }) => (primary ? "#000" : "#C7A17A")};
  }
`;

export const ButtonTwo = styled(Link)`
  background: transparent;
  white-space: nowrap;
  outline: none;
  border: 1px solid #000;
  font-weight: 700;
  border-color: ${({ primary }) => (primary ? "#fff" : "none")};
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  color: #000;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
