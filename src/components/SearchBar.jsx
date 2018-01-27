import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};
  }

  updateSearch(props) {
    this.setState({search});
    this.props.updateSearch(search);
  }

  render(){


    return(
      <div>
        <input
          value={this.state.search}
          onChange={event => this.updateSearch(event.target.value)}
        />
      </div>
    );

  }
}

export default SearchBar;
