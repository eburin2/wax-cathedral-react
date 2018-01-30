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
import walker from '../assets/images/walker.jpeg';
import blitz from '../assets/images/blitz.jpg';
import dadadogs from '../assets/images/dadadogs.jpg';
import watson from '../assets/images/watson.jpg';
import jerusalem from '../assets/images/jerusalem.jpg';
import lungfish from '../assets/images/lungfish.jpg';
import exodus from '../assets/images/exodus.jpg';
import yellowman from '../assets/images/yellowman.jpg';
import judas from '../assets/images/judas.jpg';
import rez from '../assets/images/rez.jpg';
import thor from '../assets/images/thor.jpg';
import arthur from '../assets/images/arthur.jpg';
import td from '../assets/images/td.jpg';
import xinr from '../assets/images/xinr.jpg';
import wazmo from '../assets/images/wazmo.jpg';
import gignoux from '../assets/images/gignoux.jpg';
import cloven from '../assets/images/cloven.jpg';
import ironMaiden from '../assets/images/iron-maiden.jpg';
import motorhead from '../assets/images/motorhead.jpg';
import polvo from '../assets/images/polvo.jpg';
import ulmer from '../assets/images/ulmer.jpg';
import millie from '../assets/images/millie.jpg';
import deadrider from '../assets/images/deadrider.jpg';
import calvert from '../assets/images/calvert.jpg';
import amon from '../assets/images/amon.jpg';
import lift from '../assets/images/lift.jpg';
import diamondhead from '../assets/images/diamondhead.jpg';
import wisdom from '../assets/images/wisdom.jpg';
import pretty from '../assets/images/pretty.jpg';
import carpenter from '../assets/images/halloweenIII.jpg';
import { Link } from 'react-router-dom';








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
  {imageCover: destruction, artistName:'Destruction', albumName: 'Infernal Overkill', origin: 'Weil am Rhein Germany', year: '1985', rating: '4 stars'},
  {imageCover: walker, artistName:'Scott Walker', albumName: 'Climate of Hunter', origin: 'UK', year: '1984', rating: '5 stars'},
  {imageCover: blitz, artistName:'Blitz', albumName: 'Second Empire Justice', origin: 'UK', year: '1983', rating: '4 stars'},
  {imageCover: dadadogs, artistName:'Dadadogs', albumName: 'Eats Meats Wets', origin: 'Germany', year: '1983', rating: '4 stars'},
  {imageCover: watson, artistName:'Johnny Watson', albumName: 's/t', origin: 'Houston, Texas', year: '1963', rating: '5 stars'},
  {imageCover: jerusalem, artistName:'Jerusalem', albumName: 's/t', origin: 'UK', year: '1972', rating: '4 stars'},
  {imageCover: lungfish, artistName:'Lungfish', albumName: 'Necrophones', origin: 'Baltimore, Maryland', year: '2000', rating: '4 stars'},
  {imageCover: exodus, artistName:'Exodus', albumName: 'Bonded by Blood', origin: 'Oakland, California', year: '1985', rating: '5 stars'},
  {imageCover: yellowman, artistName:'Yellowman', albumName: 'Mister Yellowman', origin: 'Kingston, Jamaica', year: '1982', rating: '5 stars'},
  {imageCover: judas, artistName:'Judas Priest', albumName: 'Rocka Rolla', origin: 'UK', year: '1974', rating: '5 stars'},
  {imageCover: rez, artistName:'The Residents', albumName: 'The Big Bubble', origin: 'San Francisco, California', year: '1985', rating: '4 stars'},
  {imageCover: thor, artistName:'Thors Hammer', albumName: 'If You Knew', origin: 'Iceland', year: '1965-67', rating: '4 stars'},
  {imageCover: arthur, artistName:'Arthur Brown', albumName: 'Galactic Zoo Dossier', origin: 'UK', year: '1971', rating: '5 stars'},
  {imageCover: td, artistName:'Tangerine Dream', albumName: 'Wavelength', origin: 'Germany', year: '1983', rating: '5 stars'},
  {imageCover: xinr, artistName:'Xinr', albumName: 's/t', origin: 'Portland, Oregon', year: '1984', rating: '4 stars'},
  {imageCover: wazmo, artistName:'Wazmo Nariz', albumName: 'Tell Me How to Live', origin: 'Chicago, Illinois', year: '1981', rating: '4 stars'},
  {imageCover: gignoux, artistName:'Gignoux', albumName: 's/t', origin: 'S.F., California', year: '1980', rating: '4 stars'},
  {imageCover: cloven, artistName:'Cloven Hoof', albumName: 's/t', origin: 'UK', year: '1984', rating: '5 stars'},
  {imageCover: ironMaiden, artistName:'Iron Maiden', albumName: 's/t', origin: 'UK', year: '1980', rating: '4 stars'},
  {imageCover: motorhead, artistName:'Motorhead', albumName: 'Bomber', origin: 'UK', year: '1979', rating: '5 stars'},
  {imageCover: polvo, artistName:'Polvo', albumName: 'Todays Active Lifestyles', origin: 'Chapel Hill, N.C.', year: '1992', rating: '4 stars'},
  {imageCover: ulmer, artistName:'James Blood Ulmer', albumName: 'Free Lancing', origin: 'St. Matthews, S.C.', year: '1981', rating: '4 stars'},
  {imageCover: millie, artistName:'Millie Jackson', albumName: 'Caught Up', origin: 'Thompson, Georgia', year: '1974', rating: '4 stars'},
  {imageCover: deadrider, artistName:'D. Rider', albumName: 's/t', origin: 'Chicago, Illinois', year: '2009', rating: '5 stars'},
  {imageCover: calvert, artistName:'Robert Calvert', albumName: 'Test Tube Conceived', origin: 'UK', year: '1986', rating: '4 stars'},
  {imageCover: amon, artistName:'Amon Duul II', albumName: 'Hi-Jack', origin: 'Germany', year: '1986', rating: '4 stars'},
  {imageCover: lift, artistName:'Lift', albumName: 'Caverns of Your Brain', origin: 'New Orleans, Louisiana', year: '1977', rating: '4 stars'},
  {imageCover: diamondhead, artistName:'Diamond Head', albumName: 'Lightning to the Nations', origin: 'UK', year: '1980', rating: '4 stars'},
  {imageCover: wisdom, artistName:'Danny Elfman', albumName: 'Wisdom O.S.T.', origin: 'Los Angeles, California', year: '1986', rating: '4 stars'},
  {imageCover: pretty, artistName:'Pretty Things', albumName: 'Parachute', origin: 'UK', year: '1970', rating: '5 stars'},
  {imageCover: carpenter, artistName:'John Carpenter', albumName: 'Halloween III O.S.T.', origin: 'UK', year: '1982', rating: '5 stars'}
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
      marginTop: '-25px'
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
