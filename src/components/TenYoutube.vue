<!-- <template>
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
        'https://www.youtube.com/embed/-lgYPgpEXEs',
        'https://www.youtube.com/embed/82EvWpWSogM',
        'https://www.youtube.com/embed/HCbisGApCy4',
        'https://www.youtube.com/embed/96lOJ-QwFsw',
        'https://www.youtube.com/embed/U3AWs1nC5I4',
        'https://www.youtube.com/embed/JqRl0cDBGeI',
        'https://www.youtube.com/embed/GcAWYSc369w',
        'https://www.youtube.com/embed/kr7f3MeAyOk' ,
        'https://www.youtube.com/embed/_STgFkHTaBQ' ,
        'https://www.youtube.com/embed/dzGT6BCLHHc' ,
        'https://www.youtube.com/embed/vid6hyL7gBg'    
       
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
  </style> -->

  <template>
    <div>
      <div class="button-container">
        <button 
          v-for="(video, index) in videoUrls" 
          :key="index" 
          :style="{ backgroundColor: buttonColors[index] }" 
          @click="selectVideo(video.url)">
          {{ index + 1 }}. {{ video.title }}
        </button>
      </div>
      <div class="youtube-container" v-if="selectedVideoUrl">
        <iframe :src="selectedVideoUrl" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        videoUrls: [
          { title: 'Introduction to Vue.js', url: 'https://www.youtube.com/embed/-lgYPgpEXEs' },
          { title: 'Vue.js Components', url: 'https://www.youtube.com/embed/82EvWpWSogM' },
          { title: 'Vue Router Basics', url: 'https://www.youtube.com/embed/HCbisGApCy4' },
          { title: 'State Management with Vuex', url: 'https://www.youtube.com/embed/96lOJ-QwFsw' },
          { title: 'Advanced Vue.js Techniques', url: 'https://www.youtube.com/embed/U3AWs1nC5I4' },
          { title: 'Vue.js and Firebase', url: 'https://www.youtube.com/embed/JqRl0cDBGeI' },
          { title: 'Deploying Vue.js Applications', url: 'https://www.youtube.com/embed/GcAWYSc369w' },
          { title: 'Testing Vue.js Applications', url: 'https://www.youtube.com/embed/kr7f3MeAyOk' },
          { title: 'Composition API in Vue 3', url: 'https://www.youtube.com/embed/_STgFkHTaBQ' },
          { title: 'Vue.js Performance Optimization', url: 'https://www.youtube.com/embed/dzGT6BCLHHc' },
          { title: 'Building Real-time Apps with Vue', url: 'https://www.youtube.com/embed/vid6hyL7gBg' }
        ],
        buttonColors: [
          '#FF5733', '#33FF57', '#3357FF', '#FF33A1', 
          '#FF8C33', '#8C33FF', '#33FFF3', '#FF3333', 
          '#33FF8C', '#FF33FF', '#3333FF'
        ],
        selectedVideoUrl: null
      };
    },
    methods: {
      selectVideo(url) {
        this.selectedVideoUrl = url;
      }
    }
  };
  </script>
  
  <style scoped>
  .button-container {
    display: flex;
    flex-direction: column; /* Arrange buttons vertically */
    gap: 10px;
    margin-bottom: 20px;
    align-items: center; /* Center the buttons horizontally */
  }
  
  button {
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px; /* Slightly larger font size for better readability */
    transition: background-color 0.3s, transform 0.3s;
    width: 100%; /* Make buttons take the full width */
    max-width: 300px; /* Optional: Limit the maximum width */
  }
  
  button:hover {
    opacity: 0.9;
    transform: scale(1.05); /* Slightly enlarge the button on hover */
  }
  
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
  