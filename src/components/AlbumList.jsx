import React from 'react';
import Album from './Album';
import PropTypes from 'prop-types';


function AlbumList(props){
  console.log(props.albumList[0].origin);
  const styles={
    albumStyle: {
      width: '83vw',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '-50px'
    }
  };


  return(
    <div style={styles.albumStyle}>
      {props.albumList.map((album, index) =>
        <Album
          imageCover = {album.imageCover}
          artistName = {album.artistName}
          albumName = {album.albumName}
          origin = {album.origin}
          year = {album.year}
          rating = {album.rating}
          key = {index}/>

      )}
    </div>
  );
}

AlbumList.propTypes = {
  albumList: PropTypes.array
};

export default AlbumList;
