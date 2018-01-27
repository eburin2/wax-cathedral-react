import React from 'react';
import Profile from './Profile';
import AlbumList from './AlbumList';
import SearchBar from './SearchBar';



function Body() {
  const styles={
    flexStyle: {
      display: 'flex',
    }
  };
  return(
    <div style={styles.flexStyle}>
      <Profile/>
      <SearchBar/>
      <AlbumList/>
    </div>

  );
}

export default Body;
