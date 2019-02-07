import React from 'react';
import styled from 'styled-components';


const FooterWrapper = styled.footer`
  height: 80px;
  background-color: #313541;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-family: Roboto,Helvetica,Arial,sans-serif;
`;

const Text = styled.span`
  margin: 0 auto;
  color: #fff;
  font-size: 13px;
`;

const Icon = styled.i`
  color: #ff6666;
`;

const Footer = props => (
  <FooterWrapper>
    <Text>
       2019 <Icon> &#9786; </Icon> maded by <a style={{'color': '#fff'}} href='https://github.com/BradHick' rel='noopener noreferrer' target='_blank'>Brad Hick</a>
    </Text>
  </FooterWrapper>
);

export default Footer;