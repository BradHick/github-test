import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
display: ${p => p.flex ? 'flex': 'grid'};
/* grid-template-columns: 2fr 2fr 1fr; */
grid-template-columns: 38% 38% 20%;
justify-items: center;
grid-gap: 15px;
`;


export default Form;