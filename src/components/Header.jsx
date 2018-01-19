import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets/images/logo.png';

function Header(){
  const styles={
    containerStyle: {
      width: '100vw',
      height: '100px',
      border: '2px solid #50E3C2',
      backgroundColor: '#50E3C2',
      display: 'flex',
      margin: 'auto'
    },
    textStyle: {
      fontSize: '30px',
      textAlign: 'left',
      fontFamily: 'phosphate',
      marginLeft: '120px',
      marginTop: '50px',
      color: '#26499F'
    }
  };

  return (
    <div style={styles.containerStyle}>
      <img src={logo} />
      <h1 style={styles.textStyle}>Wax Cathedral</h1>
      <Link to="/body">Home</Link>
    </div>
  );
}

export default Header;
