import React from 'react';
import elliot from '../assets/images/elliot.jpg';

function Profile(props) {
  const myProfileStyles = {
    profileContainer: {
      maxWidth: '25vw',
      height: '200px',
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '6vw',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:  '75px',
      marginBottom: '50px'
    },

    elliot: {
      width: '150px',
      height: '150px',
      borderRadius: '100%',
      marginLeft: '-30px'
    },

    nameContainer: {
      width: '16vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      AlignContent: 'flex-start'
    },

    nameStyles: {
      fontFamily: 'futura',
      fontSize: '20px',
      fontWeight: 'bold',
      marginTop: '120px',
      marginLeft: '25px',
      color: '#26499F'
    },

    cityStyles: {
      marginTop: '5px',
      marginBottom: '100px',
      fontFamily: 'futura',
      fontSize: '16px',
      color: '#26499F',
      marginLeft: '20px'
    }

  };

  return (


    <div style={myProfileStyles.profileContainer}>
      <img style={myProfileStyles.elliot} src={elliot} />
      <div style={myProfileStyles.nameContainer}>
        <p style={myProfileStyles.nameStyles}>Elliot Burin</p>
        <p style={myProfileStyles.cityStyles}>Portland, Oregon</p>
      </div>
    </div>
  );
}

export default Profile;
