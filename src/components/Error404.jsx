import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Error404(props){

  console.log(props);
  return(
    <div>
      <h1>Sorry, The page {props.location.pathname} does not exist!</h1>
      <h1><Link to="/body">home</Link></h1>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
