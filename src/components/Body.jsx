import React from 'react';
import AlbumList from './AlbumList';


function Body() {
  const styles={
    flexStyle: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#26499F',
      width: '100vw',
      height: '1200px',
      marginRight: '10px'
    }
  };
  return(
    <div style={styles.flexStyle}>
      <AlbumList/>
    </div>

  );
}

export default Body;
