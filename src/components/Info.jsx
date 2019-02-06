import React from 'react';
import styled from 'styled-components';


const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
`;

const Description = styled.span`
  font-family: Roboto;
  font-size: 14px;
  letter-spacing: 1px;
  margin-top: 8px;
  text-transform: uppercase;
  font-weight: bold;
  color: #d7d8d9;
`;

const Title = styled.h1`
  font-family: Montserrat;
  font-size: 50px;
  color: #313541;
`;

const Info = ({ description, value }) => (
  <InfoContainer>
    <Title> {value} </Title>
    <Description> {description} </Description>
  </InfoContainer>
);

export default Info;