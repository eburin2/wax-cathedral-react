import React from 'react';
import { logo } from '../assets/images/logo.png';

function Header(){
  const styles={
    containerStyle: {
      boxSizing: 'border-box',
      width: '100%',
      height: '100px',
      border: '2px solid #50E3C2',
      backgroundColor: '#50E3C2',
      display: 'flex',
    },
    textStyle: {
      fontSize: '40px',
      textAlign: 'left',
      fontFamily: 'phosphate',
      marginLeft: '120px',
      marginTop: '40px',
      color: '#26499F'
    }
  };

  return (
    <div style={styles.containerStyle}>
      <img src={logo} />
      <h1 style={styles.textStyle}>Wax Cathedral</h1>
    </div>
  );
}

export default Header;
