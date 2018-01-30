import React from 'react';
import PropTypes from 'prop-types';


function Album(props) {

  const styles={

    coverStyles:{
      width: '200px',
      height: '200px',
      marginTop: '0',
      marginLeft: '30px',
      fontFamily: 'futura',
      marginBottom: '10px'

    },

    nameStyles:{
      textAlign: 'center',
      fontSize: '20px',
      color: '#26499F',
      fontWeight: 'bold',
      fontFamily: 'futura',
      marginBottom: '5px',
      marginLeft: '24px'
    },

    albumStyles:{
      textAlign: 'center',
      fontSize: '20px',
      color: '#26499F',
      fontFamily: 'futura',
      marginTop: '5px',
      marginLeft: '22px'
    },

    originStyles:{
      marginTop: '5px',
      textAlign: 'center',
      fontSize: '20px',
      color: '#26499F',
      fontFamily: 'futura',
      marginBottom: '5px',
      marginLeft: '12px'

    }
  };
  return (


    <div>
      <img className="cover" style={styles.coverStyles} src={props.imageCover}/>
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
