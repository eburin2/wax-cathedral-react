import React from 'react';
import logos from '../assets/images/logos.png';

function Header(){
  const styles={
    containerStyle: {
      marginRight: '5px',
      width: '100%',
      height: '100px',
      border: '2px solid #50E3C2',
      backgroundColor: '#50E3C2',
      display: 'flex'
    },
    textStyle: {
      fontSize: '40px',
      fontFamily: 'phosphate',
      marginLeft: '60px',
      marginTop: '40px',
      color: '#26499F'
    },

    logoStyle: {
      marginLeft: '40px'
    }


  };

  return (


    <div style={styles.containerStyle}>
      <img style={styles.logoStyle} src={logos} />
      <h1 style={styles.textStyle}>Wax Cathedral</h1>
    </div>
  );
}

export default Header;
