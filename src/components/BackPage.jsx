import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const BackPageStyled = styled(Link)`
  width: 60px;
  height: 40px;
  border-radius: 5px;
  background-color: #29b6f6;
  &:hover {background-color: #0097dc};
  border: none;
  margin: 10px auto;
  color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: 'Roboto';
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: fixed;
  bottom: 0;
  z-index: 99;
  left: 19px;
`;

const BackPage = ({ to }) => (
  <BackPageStyled to={to} >
    Back
  </BackPageStyled>
);

export default BackPage;