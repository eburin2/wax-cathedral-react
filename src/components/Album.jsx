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
      marginTop: '15px',
      marginLeft: '22px'
    },

    originStyles:{
      marginTop: '10px',
      textAlign: 'center',
      fontSize: '20px',
      color: '#26499F',
      fontFamily: 'futura',
      marginBottom: '15px',
      marginLeft: '12px'

    }
  };
  return (


    <div style={styles.bodyStyles}>
      <style jsx global>{`
          .cover:hover {
            border: 10px solid #50E3C2;
          }


          input {
            width: 200px;
            height: 30px;
            border: 4px solid black;
            margin-top: 10px;
            color: #26499F;
            font-weight: bold;
            font-size: 14px;

          }

          .mainContainer {
            width: 100vw;
            margin: auto;
          }

          .search {
            width: 15vw;
            align-content: flex-end;
            display: flex;
            justifyContent: flex-end;
            margin-left: auto;
            margin-right: 150px;
          }



          * {
            box-sizing: border-box;
            margin: 0px;
          }


          `}</style>
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
