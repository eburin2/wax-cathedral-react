import React from 'react';
import AlbumList from './AlbumList';


function Body() {
  const styles={
    flexStyle: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#fff',
      width: '90vw',
      height: '100%'
    }
  };
  return(
    <div style={styles.flexStyle}>
      <AlbumList/>
    </div>

  );
}

export default Body;
