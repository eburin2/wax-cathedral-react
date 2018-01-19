import React from 'react';
import Album from './Album';
import maple from '../assets/images/maple.jpg';
import wipers from '../assets/images/wipers.jpeg';
import bigBlack from '../assets/images/atomizer.jpg';

const masterAlbumList = [
  {imageCover: maple, artistName:'U.S. Maple', albumName: 'Talker', origin: 'Chicago, Illinois', year: '1999', rating: '5 stars'},
  {imageCover: wipers, artistName:'Wipers', albumName: 'Is This Real?', origin: 'Portland, Oregon', year: '1980', rating: '4 stars' },
  {imageCover: bigBlack, artistName:'Big Black', albumName: 'Atomizer', origin: 'Chicago, Illinois', year: '1986', rating: '4 stars'}
];


function AlbumList(){
  const styles={
    albumStyle: {
      display: 'flex',
      flexDirection: 'row',
      margin: '25px',
    }
  };
  return(
    <div style={styles.albumStyle}>
      { masterAlbumList.map((album, index) =>
        <Album
          imageCover = {album.imageCover}
          artistName = {album.artistName}
          albumName = {album.albumName}
          origin = {album.origin}
          year = {album.year}
          rating = {album.rating}

          key = {index}

        />)}
    </div>
  );
}

export default AlbumList;
