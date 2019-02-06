import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
  position: relative;
`;

const SelectField = styled.select`
  width: 100%;
  height: 33px;
  margin-bottom: 10px;
  background-color: rgba(255,188,53,0);
  border: 1px solid  #e9e9e9;
  text-align: center;
  font-family: Montserrat;
  letter-spacing: 1px;
`;

const Option  = styled.option`
  text-align: center;
  font-family: Montserrat;
  letter-spacing: 1px;
`;


const Select = ({ ...props }) => (
  <SelectContainer>
    <SelectField {...props} />
    {/* {props.options.map(option => {
      return <Option>{option}</Option>
    })} */}
  </SelectContainer>
);

export default Select;