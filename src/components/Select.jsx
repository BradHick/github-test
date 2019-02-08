import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
  width: 100%;
`;

const SelectField = styled.select`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  background-color: rgba(255,188,53,0);
  border: 1px solid  #e9e9e9;
  text-align: center;
  font-family: 'Montserrat';
  letter-spacing: 1px;
`;


const Select = ({ ...props }) => (
  <SelectContainer>
    <SelectField {...props} />
  </SelectContainer>
);

export default Select;