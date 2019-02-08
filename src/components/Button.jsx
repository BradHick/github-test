import styled from 'styled-components';

const Button = styled.button`
  width: ${p => p.full ? '100%' : '40%'};
  height: 40px;
  border-radius: 5px;
  background-color: #29b6f6;
  &:hover {background-color: #0097dc};
  border: none;
  margin: 0px 0px 0px 10px;
  display: block;
  color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: 'Roboto';
`;

export default Button;