import React from 'react';
// import Axios from 'axios';
import NamesList from './NamesList';

class NamesContainer extends React.Component {
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
          names
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
      <ul>
        <NamesList data={this.state.names} />
      </ul>
    );
  }
}

export default NamesContainer;
