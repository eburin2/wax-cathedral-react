import React from 'react';



class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
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

  updateSearch(search) {
    this.setState({ search });
    this.props.updateSearch(search);
  }
}



export default SearchBar;
