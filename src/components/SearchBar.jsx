import React from 'react';
import PropTypes from 'prop-types';
// import { v4 } from 'uuid';


function SearchBar(props){
  let _origin = null;
  console.log(origin);

  function handleSearchFormSubmission(event) {
  }




  return(
    <div className="search">
      <form onSubmit={handleSearchFormSubmission}>
        <input
          type='text'
          id='origin'
          placeholder='origin'
          ref={(input) => {_origin = input;}}/>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );

}




SearchBar.propTypes = {
  onNewSearchUpdate: PropTypes.func
};

export default SearchBar;
