import React from 'react';
// import Axios from 'axios';
import ListOfNamesList from './ListOfNamesList';

class ListOfNamesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    };
  }

  // <<<<<<<< AXIOS
  // getPeople() {
  //   return Axios.get('https://swapi.co/api/people').then(response => {
  //     console.log(response.data.results);
  //   });
  // }
  // <<<<<<<< AXIOS

  fetchData() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      // .then(parsedJSON => console.log(parsedJSON.results))
      .then(parsedJSON =>
        parsedJSON.results.map(person => ({
          name: `${person.name}`
        }))
      )
      .then(names =>
        this.setState({
          names: this.state.names
        })
      )
      // .then(console.log('state: ', this.state))
      .catch(error => console.log('parsing failed', error));
  }

  componentDidMount() {
    // this.getPeople(); // axios
    this.fetchData(); // fetch
  }

  render() {
    return (
      <div>
        <ListOfNamesList names={this.state.names} />
      </div>
    );
  }
}

export default ListOfNamesContainer;
