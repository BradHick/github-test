import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
  width: 100%;
  height: 36px;
  display: flex;
  background-color: rgba(255,188,53,0);
  border: 1px solid  #e9e9e9;
  text-align: center;
  font-family: 'Montserrat';
  letter-spacing: 1px;
`;


const Input = ({ ...props }) => (
    <InputField {...props} />
);

export default Input;