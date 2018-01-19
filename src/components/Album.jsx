import React from 'react';
// import imageOne from '../assets/images/home-one.jpg';
// import imageTwo from '../assets/images/home-two.jpg';
import PropTypes from 'prop-types';


function Album(props) {
  const styles={
    coverStyles:{
      width: '200px',
      height: '200px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      margin: '20px'
    },

    nameStyles:{
      textAlign: 'center',
      fontSize: '30px',
      color: '#50E3C2'
    },

    albumStyles:{
      textAlign: 'center',
      fontSize: '24px',
      color: '#50E3C2'
    },

    originStyles:{
      textAlign: 'center',
      fontSize: '24px',
      color: '#50E3C2'

    }
  };
  return (
    <div>
      <img style={styles.coverStyles} src={props.imageCover}/>
      <p style={styles.nameStyles}>{props.artistName}</p>
      <p style={styles.albumStyles}>{props.albumName}</p>
      <p style={styles.originStyles}>{props.origin}</p>
      <p style={styles.originStyles}>{props.year}</p>
      <p style={styles.originStyles}>{props.rating}</p>

    </div>
  );
}

Album.propTypes = {
  imageCover: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
};

export default Album;
