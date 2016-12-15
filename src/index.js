import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//import componets
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//youtube credential api-key
const API_KEY = 'AIzaSyA2P8DOOSBq2oK1uWNfVOfVexdDNtcYWik';



class App extends Component{

        constructor(props){
            super(props);
            this.state = {
                videos: [] ,
                selectedVideo: null
            };
           this.videoSearch('Putin');
        }

        videoSearch(term){
             //immediatelly call youtube api to get a default list of videos
            YTSearch({key: API_KEY, term: term}, (videos) => {
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                });
            });
        }

        render() {
            const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);


            return(
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                 videos={this.state.videos}
                 onVideoSelect={(selectedVideo) => this.setState({selectedVideo})} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));