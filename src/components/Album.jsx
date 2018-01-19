import React from 'react';
import PropTypes from 'prop-types';


function Album(props) {

  const styles={
    bodyStyles: {
      width: '60%',
      marginLeft: '15px',
      marginRight: '5px'
    },

    coverStyles:{
      width: '200px',
      height: '200px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginTop: '20px',
      marginLeft: '10px',

    },

    nameStyles:{
      textAlign: 'center',
      fontSize: '24px',
      color: '#50E3C2',
      fontWeight: 'bold'
    },

    albumStyles:{
      textAlign: 'center',
      fontSize: '20px',
      color: '#50E3C2'
    },

    originStyles:{
      textAlign: 'center',
      fontSize: '20px',
      color: '#50E3C2'

    }
  };
  return (



    <div style={styles.bodyStyles}>
      <style jsx>{`
          img:hover {
            border: 20px solid #50E3C2;
          }

          `}</style>
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
