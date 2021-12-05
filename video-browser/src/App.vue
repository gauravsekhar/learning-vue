<template>
  <div class="container">
    <!-- <SearchBar v-on:termChange="onTermChange"></SearchBar> -->
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row">
      <VideoDetail :video="selectedVideo"></VideoDetail>
      <!-- <VideoList v-bind:videos="videos"></VideoList> -->
      <VideoList :videos="videos" @videoClick="onVideoClick"></VideoList>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyCw1DWhdm1ehSIYVmIrRKKxXMXCDVxR604';

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  data() {
    return {
      videos: [],
      selectedVideo: null,
    };
  },
  methods: {
    onTermChange(searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm,
        },
      })
      .then(response => {
        this.videos = response.data.items;
      });
    },
    onVideoClick(video) {
      this.selectedVideo = video;
    }
  }
};
</script>