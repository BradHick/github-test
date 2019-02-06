import React from 'react';
import styled from 'styled-components';


const CommitWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  justify-content: space-between;
`;

const Username = styled.h1`
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  font-family: Montserrat;
  font-weight: 400;
  margin-bottom: 8px;
  margin-left: 8px;
  letter-spacing: 1px;
`;

const Message = styled.p`
  color: #333333;
  font-family: Roboto;
  margin-left: 8px;
  font-size: 13px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${p => p.size || '50%'};
`;

const Date = styled.span`
  font-family: Montserrat;
  font-size: 13px;
  text-align: right;
  display: block;
`;

const Picture = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: block;
`;

const Commit = ({ username, message, date, img }) => (
  <CommitWrapper>
    <Column size={'10%'}>
      <Picture src={`${img}`} />
    </Column>
    <Column size={'70%'}>
      <Username> {username} </Username>
      <Message> {message} </Message>
    </Column>
    <Column size={'20%'}>
      <Date> {date} </Date>
    </Column>
  </CommitWrapper>
);

export default Commit;
