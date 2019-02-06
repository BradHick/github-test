import React from 'react';
import styled from 'styled-components';


const InputContainer = styled.div`
  position: relative;
`;

const InputField = styled.input`
  width: 100%;
  height: 33px;
  background-color: rgba(255,188,53,0);
  border: 1px solid  #e9e9e9;
  text-align: center;
  font-family: Montserrat;
  letter-spacing: 1px;
`;

const Icon = styled.i`
  position: absolute;
  right: 8px;
  color: #606060;
  top: 12px;
`;

const Input = ({ ...props }) => (
  <InputContainer>
    <InputField {...props} />
    <Icon className='fa fa-search' />
  </InputContainer>
);

export default Input;