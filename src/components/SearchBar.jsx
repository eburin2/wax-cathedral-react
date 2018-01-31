import React from 'react';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  render(){
    return(
      <div className="search">
        <input
          value={this.state.search}
          onChange={event => this.updateSearch(event.target.value)}
        />
      </div>
    );

  }

  updateSearch(search) {
    this.setState({ search });
    this.props.updateSearch(props);
  }
}



export default SearchBar;
