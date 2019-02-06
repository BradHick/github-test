import React from 'react';
import styled from 'styled-components';

const Badge = styled.div`
  min-width: 70px;
  height: 20px;
  border-radius: 13px;
  background-color: ${p => p.color || '#f2f2f2'};
  position: absolute;
  right: 0;
  color: #fff;
  font-size: 13px;
  text-align: center;
`;

const BadgeDescription = styled.span`
  margin: 2px 9px;
  display: block;
`;


const RepositoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  position: relative;
`;

const RepositoryCollum = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  font-family: Montserrat;
  font-weight: 400;
  margin-bottom: 8px;
  margin-left: 8px;
  text-transform: capitalize;
  letter-spacing: 1px;
  width: 70%;
`;

const Description = styled.p`
  font-size: 13px;
  color: #333333;
  font-family: Roboto;
  margin-left: 8px;
  line-height: 16px;
`;

const Repo = ({ name, description, commitStatus, stars, watchers }) => (
  <RepositoryWrapper>
    <Badge color={commitStatus.color}>
      <BadgeDescription>
        {commitStatus.message}
      </BadgeDescription> 
    </Badge>
    <RepositoryCollum>
      <Title> {name} </Title>
      <Description>
        {description ? description : 'No description'}
      </Description>
      <Description>
        &#9733;{ `${ stars ? stars : 0 }`}  &#128065;{`${ watchers ? watchers : 0 }`}
      </Description>
    </RepositoryCollum>
  </RepositoryWrapper>
);

export default Repo;