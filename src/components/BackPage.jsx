import React from "react";
import { Link } from "react-router-dom";

const backPageStyle = {
  width: '43.5%',
  height: '40px',
  borderRadius: '5px',
  backgroundColor: '#29b6f6',
  border: 'none',
  margin: '10px auto',
  color: '#fff',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  fontWeight: '600',
  fontFamily: 'Roboto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none'
};

const BackPage = ({ to }) => (
  <Link to={to} style={backPageStyle}>
    Back
  </Link>
);

export default BackPage;