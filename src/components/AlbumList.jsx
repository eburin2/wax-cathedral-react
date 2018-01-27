import React from 'react';
import Album from './Album';
import maple from '../assets/images/maple.jpg';
import wipers from '../assets/images/wipers.jpeg';
import bigBlack from '../assets/images/atomizer.jpg';
import blueOysterCult from '../assets/images/blue-oyster-cult.jpg';
import gentleGiant from '../assets/images/gentle-giant.jpg';
import wire from '../assets/images/wire.jpg';
import alarcen from '../assets/images/alarcen.jpg';
import Shinymen from '../assets/images/shinymen.jpg';
import valhalla from '../assets/images/valhalla.jpg';
import destruction from '../assets/images/destruction.jpg';

const masterAlbumList = [
  {imageCover: maple, artistName:'U.S. Maple', albumName: 'Talker', origin: 'Chicago, Illinois', year: '1999', rating: '5 stars'},
  {imageCover: wipers, artistName:'Wipers', albumName: 'Is This Real?', origin: 'Portland, Oregon', year: '1980', rating: '4 stars' },
  {imageCover: bigBlack, artistName:'Big Black', albumName: 'Atomizer', origin: 'Chicago, Illinois', year: '1986', rating: '4 stars'},
  {imageCover: blueOysterCult, artistName:'Blue Oyster Cult', albumName: 'Tyranny and Mutation', origin: 'Long Island, New York', year: '1973', rating: '5 stars'},
  {imageCover: gentleGiant, artistName:'Gentle Giant', albumName: 'Power and the Glory', origin: 'London, England', year: '1974', rating: '3 stars'},
  {imageCover: alarcen, artistName:'Jean Pierre Alarcen', albumName: 's/t', origin: 'France', year: '1978', rating: '4 stars'},
  {imageCover: Shinymen, artistName:'Shiny Men', albumName: 's/t', origin: 'London, England', year: '1981', rating: '4 stars'},
  {imageCover: wire, artistName:'Wire', albumName: 'A Bell is a Cup', origin: 'London, England', year: '1988', rating: '4 stars'},
  {imageCover: valhalla, artistName:'Dennis Weise', albumName: 'Valhalla', origin: 'San Diego, California', year: '1979', rating: '5 stars'},
  {imageCover: destruction, artistName:'Destruction', albumName: 'Infernal Overkill', origin: 'Weil am Rhein Germany', year: '1985', rating: '4 stars'}
];


function AlbumList(){
  const styles={
    albumStyle: {
      width: '83vw',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '25px'
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
