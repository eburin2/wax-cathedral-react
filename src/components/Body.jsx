import React from 'react';
import Profile from './Profile';
import AlbumList from './AlbumList';
import SearchBar from './SearchBar';



function Body() {

  return(
    <div className="bodyContainer">
      <style jsx global>{`
        .bodyContainer {
          width: 83vw;
          margin: auto;
        }


      `}</style>
      <Profile/>
      <SearchBar/>
      <AlbumList/>
    </div>

  );
}

export default Body;
