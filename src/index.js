import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyANT8W-S5EqhGRi9rmvtIBI5gxcoZd_w8M';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'kittens'}, (videos) => {
      this.setState({ videos });
      // same as this.setState({ videos: videos }) = ES6 shortcut
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
