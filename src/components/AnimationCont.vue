<template>
  
  <div class="video-container">
    <div v-for="(video, index) in videos" :key="index" class="video-wrapper">
      <video :src="video.src" controls></video>
      <h3>{{ video.title }}</h3>
    </div>
  </div>
</template>

<script>

export default {
  components:{
   
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
</style>



