<template>
    <div class="video-container">
     
      <div v-for="(video, index) in videos" :key="index" class="video-wrapper">
       
        <video ref="videos" :src="video.src" controls></video>
        <h3>{{ video.title }}</h3>
       
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        videos: [
          // { src: require('../assets/video-hydro.mp4'), title: 'Video 1 Hydro-carbon' },
          // { src: require('../assets/STEAMDEMO.mp4') , title: 'Video 2 Polygon'},
          // Add more video objects as needed
        ]
      };
    },
    methods: {
      removeVideo(index) {
        // Remove the video from the array based on its index
        this.videos.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  .video-container {
    display: flex;
    flex-wrap: wrap; /* Wrap videos to the next row when they exceed container width */
  }
  
  .video-wrapper {
    margin-right: 10px; /* Adjust as needed */
    border: 1px solid blue;
  }
  
  video {
    width: 200px; /* Adjust the width of the videos */
    height: auto;
  }
  </style>



