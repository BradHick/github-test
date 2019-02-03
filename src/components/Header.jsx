import React from 'react';
import styled from 'styled-components';

const HeaderWapper = styled.header`
  width: 100%,
  height: 80px,
  backgroundColor: #313541,
  display: flex,
  alignItems: center,
  justifyContent: center
`;

const Title = styled.h1`
  fontSize: 20px,
  letterSpacing: 0px,
  lineHeight: 20px,
  color: #f2f4f8,
  fontFamily: Roboto,Helvetica,Arial,sans-serif,
  fontWeight: 400
`;

const Icon = styled.i`
  marginRight: 10px,
  color: #fff,
  fontSize: 18px
`;

const Header = props => (
  <HeaderWapper>
    <Icon className='fab fa-github' />
    <Title> GitHub Test </Title>
  </HeaderWapper>
);

export default Header;