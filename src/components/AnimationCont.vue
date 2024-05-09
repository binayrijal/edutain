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



<!-- <template>
    <div>
      <div class="thumbnail" v-for="(video, index) in videos" :key="index" @click="playVideo(index)">
        <img :src="getThumbnail(video)" alt="Video Thumbnail">
      </div>
      <div v-if="selectedVideo !== null" class="video-container">
        <video :src="videos[selectedVideo]" controls autoplay @click="toggleFullScreen"></video>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        videos: [
          require('../assets/video-hydro.mp4'),
          require('../assets/STEAMDEMO.mp4'),
          // Add more video paths as needed
        ],
        selectedVideo: null
      };
    },
    methods: {
      playVideo(index) {
        this.selectedVideo = index;
      },
      toggleFullScreen() {
        const video = document.querySelector('.video-container video');
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { /* Firefox */
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE/Edge */
          video.msRequestFullscreen();
        }
      },
      getThumbnail() {
        // Logic to get the thumbnail image for the video
        // You can replace this with the actual thumbnail URL or use a placeholder image
        return require('../assets/play.jpg');
        // return require(`../assets/${videoPath}.jpg`);
      }
    }
  };
  </script>
  
  <style scoped>
  .thumbnail {
    width: 200px;
    height: 150px;
    margin: 10px;
    cursor: pointer;
  }
  
  .thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .video-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .video-container video {
    width: 80%;
    height: auto;
  }
  </style>
 -->
