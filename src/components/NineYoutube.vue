<template>
    <div>
      <div v-for="(videoUrl, index) in videoUrls" :key="index" class="youtube-container">
        <div width="400" height="400">
        <iframe :src="videoUrl" frameborder="0" allowfullscreen width="200" height="200"></iframe>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        videoUrls: [         
          'https://www.youtube.com/embed/JqRl0cDBGeI',
          'https://www.youtube.com/embed/GcAWYSc369w',
          'https://www.youtube.com/embed/2BerWwuJmrg',
          'https://youtube.com/embed/kr7f3MeAyOk',
          'https://www.youtube.com/embed/YaahukWgC7Y',
          'https://www.youtube.com/embed/sQWrYY555II',
          'https://www.youtube.com/embed/82EvWpWSogM',
          'https://www.youtube.com/embed/-lgYPgpEXEs',
          'https://www.youtube.com/embed/vOjh-9aDa4o',
          'https://www.youtube.com/embed/vOjh-9aDa4o',
          'https://www.youtube.com/embed/zRJtXkHil2o',
          'https://www.youtube.com/embed/HCbisGApCy4',
          'https://www.youtube.com/embed/96lOJ-QwFsw',
          'https://www.youtube.com/embed/U3AWs1nC5I4'
      ]
      };
    }
  };
  </script>
  
  <style scoped>
  .youtube-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* Aspect ratio 16:9 */
    overflow: hidden;
    margin-bottom: 20px; /* Optional: Add some spacing between videos */
  }
  
  .youtube-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  </style>