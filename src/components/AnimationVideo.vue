<!-- <template>
    <HeaderCom></HeaderCom>
    <div class="video-container">
      <div v-for="(video, index) in videos" :key="index" class="video-wrapper">
        <video :src="video.src" controls></video>
        <h3>{{ video.title }}</h3>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderCom from './HeaderCom.vue';
  export default {
    components:{
      HeaderCom
    },
    data() {
      return {
        videos: [
          { src: require('../assets/Class_8Phases_of_the_Moon_.mp4'), title: 'Phases_of_the_Moon' },
          { src: require('../assets/Coin_and_Feather_Experiment_1.mp4') , title: 'Coin_and_Feather_Experiment'},
          { src: require('../assets/Edutains_Astronomy-Class_7.mp4'), title: 'Edutains_Astronomy' },
          { src: require('../assets/Electricity_.mp4') , title: 'Electricity_'},
          { src: require('../assets/Human_Eye.mp4'), title: 'Human_Eye' },
          { src: require('../assets/Magnetism.mp4') , title: 'Magnetism'},
          { src: require('../assets/Mitosis_Cell_reproduction_Class_8.mp4'), title: 'Mitosis_Cell_reproduction' },
          { src: require('../assets/Newtons_Laws_of_Motion_.mp4') , title: 'Newtons_Laws_of_Motion_'},
         
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
    justify-content: center; /* Center videos horizontally */
   
  }
  
  .video-wrapper {
    flex: 0 0 20%; /* Each video takes 20% of the container width (5 videos per row) */
    margin: 10px; /* Adjust margin as needed */
    text-align: center; /* Center video and title */
    border: 1px solid blue;
  }
  
  video {
    width: 100%; /* Make videos fill their container */
    height: auto;
  }
  
  h3 {
    margin-top: 5px; /* Add spacing between video and title */
  }
  </style> -->

  <template>
    <div>
      <HeaderCom></HeaderCom>
      <div class="button-container">
        <button
          v-for="(video, index) in videos"
          :key="index"
          :style="{ backgroundColor: buttonColors[index] }"
          @click="selectVideo(index)"
        >
          {{ video.title }}
        </button>
      </div>
      <div v-if="selectedVideoIndex !== null" class="video-container">
        <div class="video-wrapper">
          <video :src="videos[selectedVideoIndex].src" controls></video>
          <h3>{{ videos[selectedVideoIndex].title }}</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderCom from './HeaderCom.vue';
  
  export default {
    components: {
      HeaderCom
    },
    data() {
      return {
        videos: [
          { src: require('../assets/Class_8Phases_of_the_Moon_.mp4'), title: 'Phases_of_the_Moon' },
          { src: require('../assets/Coin_and_Feather_Experiment_1.mp4'), title: 'Coin_and_Feather_Experiment' },
          { src: require('../assets/Edutains_Astronomy-Class_7.mp4'), title: 'Edutains_Astronomy' },
          { src: require('../assets/Electricity_.mp4'), title: 'Electricity_' },
          { src: require('../assets/Human_Eye.mp4'), title: 'Human_Eye' },
          { src: require('../assets/Magnetism.mp4'), title: 'Magnetism' },
          { src: require('../assets/Mitosis_Cell_reproduction_Class_8.mp4'), title: 'Mitosis_Cell_reproduction' },
          { src: require('../assets/Newtons_Laws_of_Motion_.mp4'), title: 'Newtons_Laws_of_Motion_' }
          // Add more video objects as needed
        ],
        buttonColors: ['#3333FF', '#3333FF', '#3333FF', '#3333FF', '#3333FF', '#3333FF', '#3333FF', '#3333FF'],
        selectedVideoIndex: null
      };
    },
    methods: {
      selectVideo(index) {
        this.selectedVideoIndex = index;
      }
    }
  };
  </script>
  
  <style scoped>
  .button-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .button-container button {
    margin: 0 10px;
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .button-container button:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
  
  .video-container {
    display: flex;
    justify-content: center;
  }
  
  .video-wrapper {
    text-align: center;
  }
  
  video {
    width: 100%;
    height: auto;
  }
  
  h3 {
    margin-top: 5px;
  }
  
  @media screen and (max-width: 768px) {
    .button-container {
      flex-wrap: wrap;
    }
  
    .button-container button {
      margin: 5px;
    }
  
    .video-wrapper {
      max-width: 90%;
    }
  }
  </style>
  
  


