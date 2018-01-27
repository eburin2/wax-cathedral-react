import React from 'react';
import elliot from '../assets/images/elliot.jpg';

function Profile() {
  const myProfileStyles = {
    profileContainer: {
      width: '500px',
      height: '275px',
      display: 'flex',
      flexDirection: 'row',
      marginRight: 'auto',
      marginLeft: '150px',
      justifyContent: 'center',
      alignItems: 'center'
    },

    elliot: {
      width: '150px',
      height: '150px',
      borderRadius: '100%',
      margin: 'auto'
    },

    nameContainer: {
      width: '300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      AlignContent: 'flex-start'
    },

    nameStyles: {
      fontFamily: 'futura',
      fontSize: '18px',
      marginTop: '140px',
      marginLeft: '20px',
      color: '#26499F'
    },

    cityStyles: {
      marginTop: '5px',
      marginBottom: '100px',
      fontFamily: 'futura',
      fontSize: '16px',
      color: '#26499F'
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
