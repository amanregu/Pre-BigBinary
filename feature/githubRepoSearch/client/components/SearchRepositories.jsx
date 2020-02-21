import React, { Component } from 'react';

import './style.scss';
import DisplayRepositories from './DisplayRepositories';

class SearchRepositories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeValue: 'all',
      languageValue: 'all',
      searchText: '',
    };
  }

  handleTypeFilter(e) {
    this.setState({
      typeValue: e.target.value,
    });
  }

  handleLanguageFilter(e) {
    this.setState({
      languageValue: e.target.value,
    });
  }

  handleSearchText(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  handleFilterReset() {
    this.setState({
      typeValue: 'all',
      languageValue: 'all',
      searchText: '',
    });
  }

  renderNumberOfResults(props) {
    const { typeValue, languageValue, searchText } = this.state;
    if (
      typeValue.toLowerCase() !== 'all'
      || languageValue.toLowerCase() !== 'all'
      || searchText !== ''
    ) {
      return (
        <h5>
          {props.length}
          {' '}
          Results
        </h5>
      );
    } return null;
  }

  renderRepositories(props) {
    let { repositories } = props;
    const { typeValue, languageValue, searchText } = this.state;

    if (typeValue.toLowerCase() !== 'all') {
      repositories = repositories.filter(
        (repo) => repo.type.toLowerCase() === typeValue.toLowerCase(),
      );
    }

    if (languageValue.toLowerCase() !== 'all') {
      repositories = repositories.filter(
        (repo) => repo.language.toLowerCase() === languageValue.toLowerCase(),
      );
    }

    if (searchText) {
      repositories = repositories.filter(
        (repo) => repo.name
          .toLowerCase()
          .indexOf(searchText.toLowerCase()) !== -1,
      );
    }
    return (
      <div>
        {this.renderNumberOfResults(repositories)}
        <DisplayRepositories repositories={repositories} />
      </div>
    );
  }

  render() {
    const { typeValue, languageValue, searchText } = this.state;
    return (
      <>
        <div className="wrapper">
          <div className="search-wrapper">
            <input
              onChange={(e) => this.handleSearchText(e)}
              value={searchText}
              placeholder="Find a repository..."
            />
            <label htmlFor="search" name="type">
              Type:
              <select
                value={typeValue}
                onChange={(e) => this.handleTypeFilter(e)}
              >
                <option value="all">All</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="sources">Sources</option>
                <option value="forks">Forks</option>
                <option value="archived">Archived</option>
                <option value="mirrors">Mirrors</option>
              </select>
            </label>
            <label htmlFor="type" name="type">
              Language:
              <select
                value={languageValue}
                onChange={(e) => this.handleLanguageFilter(e)}
              >
                <option value="all">All</option>
                <option value="javascript">JavaScript</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
              </select>
            </label>
            <button type="button" onClick={this.handleFilterReset.bind(this)}>
              Clear Filters
            </button>
          </div>
          {this.renderRepositories(this.props)}
        </div>
      </>
    );
  }
}

export default SearchRepositories;
