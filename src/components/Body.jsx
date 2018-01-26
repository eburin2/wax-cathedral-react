import React from 'react';
import Profile from './Profile';
import AlbumList from './AlbumList';



function Body() {
  const styles={
    flexStyle: {
      display: 'flex',
    }
  };
  return(
    <div style={styles.flexStyle}>
      <Profile/>
      <AlbumList/>
    </div>

  );
}

export default Body;
