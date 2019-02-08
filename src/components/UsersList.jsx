import React from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 13px;
  color: #333333;
  font-family: Montserrat;
  margin-left: 8px;
`;

const Title = styled.h1`
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  font-family: Montserrat;
  font-weight: 400;
  margin-bottom: 8px;
  margin-left: 8px;
`;

const InfoUser = styled.section`
  display: flex;
  flex-direction: column;
  width: 71%;
  position: relative;
`;

const PhotoSection = styled.section`
  width: 20%;
  display: block;
`;

const Photo = styled.img`
  margin: auto;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: block;
`;

const Id = styled.span`
  font-size: 11px;
  letter-spacing: 1px;
`;

const Badge = styled.div`
  width: 70px;
  height: 20px;
  border-radius: 13px;
  background-color: #ffbc34;
  position: absolute;
  right: -30px;
  color: #fff;
  text-align: center;
  margin-top: 5px;
`;

const UserList = ({ name, img, bio, location, id }) => {
  return (
    <UserContainer>
      <PhotoSection>
        <Photo src={`${img}`} />
      </PhotoSection>
      <InfoUser>
        <Badge>
          <Id> {id} </Id>
        </Badge>
        <Title> {name} </Title>
        <Description>{bio} </Description>
        <Description>{location} </Description>
      </InfoUser>
    </UserContainer>
  );
};

export default UserList;