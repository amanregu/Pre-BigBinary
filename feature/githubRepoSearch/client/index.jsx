import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchRepositories from './components/SearchRepositories';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      repositories: [],
    };
  }

  componentDidMount() {
    this.fetchRepositories();
  }

  async fetchRepositories() {
    this.setState({
      isFetching: true,
    });
    const responce = await axios.get('http://localhost:3000/repositories/get');
    this.setState({
      repositories: responce.data.repositories,
      isFetching: false,
    });
  }

  render() {
    const { repositories, isFetching } = this.state;
    return (
      <div>
        {isFetching ? (
          <div>
            <h1>
              LOADING.......
            </h1>
          </div>
        ) : (
          <div>
            <SearchRepositories repositories={repositories} />
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
