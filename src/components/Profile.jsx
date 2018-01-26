import React from 'react';
import elliot from '../assets/images/elliot.jpg';

function Profile() {
  const myProfileStyles = {
    profileContainer: {
      width: '150px',
      height: '50px',
      display: 'flex',
      flexDirection: 'row'
    },

    elliot: {
      width: '150px',
      height: '150px',
      borderRadius: '100%',
      marginLeft: '170px',
      marginTop: '50px',
    },

    textStyles: {
      fontFamily: 'futura',
      fontSize: '18px',
      marginTop: '80px',
      marginLeft: '30px',
      color: '#26499F'
    }

  };

  return (


    <div style={myProfileStyles.profileContainer}>
      <img style={myProfileStyles.elliot} src={elliot} />
      <p style={myProfileStyles.textStyles}>Elliot Burin</p>
    </div>
  );
}

export default Profile;
