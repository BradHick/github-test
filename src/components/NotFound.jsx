import React from 'react';
import styled from 'styled-components';


const DontFountWapper = styled.div`
  width: 40%;
  height: 100px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.08);
  background-color: #ff6666;
  display: flex;
  padding: 0 20px;
  margin: 20px auto;
  @media (max-width: 800px) { width: 80%; }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 57%;
  justify-content: center;
`;

const Description = styled.span`
  color: #fff;
  font-size: 19px;
  font-family: Montserrat;
  margin-left: 8px;
  text-align: center;
`;

const Icon = styled.i`
  color: #fff;
  top: 12px;
  font-size: 50px;
`;

const NotFound = () => (
  <DontFountWapper>
    <Column>
      <Icon className='fas fa-times-circle' />
      <Description> User Not Found</Description>
    </Column>
  </DontFountWapper>
);

export default NotFound;