import styled from 'styled-components';

const Card = styled.div`
  width: 40%;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  min-height: 40px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 10px;
  text-decoration: none;
  display: ${p => (p.info ? 'flex' : 'block')};
  @media (max-width: 800px) { width: 80%; }
`;

export default Card;