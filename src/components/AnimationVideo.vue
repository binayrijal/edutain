<template>
  <div><h2>Class 7 Animated Videos</h2>
    
    <div class="button-container">
      <button
        v-for="(video, index) in videos"
        :key="index"
        :style="{ backgroundColor: buttonColor }"
        @click="selectVideo(index)"
      >
        {{ video.title }}
      </button>
    </div>
    <div v-if="selectedVideoIndex !== null" class="video-container">
      <div class="video-wrapper">
        <template v-if="videos[selectedVideoIndex].type === 'youtube'">
          <iframe
            :src="videos[selectedVideoIndex].src"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </template>
        <template v-else>
          <video :src="videos[selectedVideoIndex].src" controls></video>
        </template>
        <h3>{{ videos[selectedVideoIndex].title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {
   
  },
  data() {
    return {
      videos: [
        { title: 'Forces and Distance', url: 'https://www.youtube.com/embed/x9iPQSflKRU' },
        { title: 'Matter', url: 'https://www.youtube.com/embed/qEZ9-fpj3ZQ' },
        { title: 'Class 7 Mathematical Constructions', src: 'https://www.youtube.com/embed/dzGT6BCLHHc', type: 'youtube' },
        { title: 'Class 7 Energy Introduction', src: 'https://www.youtube.com/embed/8H_CAQTMHV0', type: 'youtube' },
        { title: 'Edutain’s Astronomy Class 7', src: 'https://www.youtube.com/embed/vOjh-9aDa4o', type: 'youtube' },
        { title: 'Transformation Energy', src: 'https://www.youtube.com/embed/z_-A_3XPUJs', type: 'youtube' },
        { title: 'Energy Types2', src: 'https://www.youtube.com/embed/BfjqBarl24I', type: 'youtube' },
        { title: 'Energy Types1', src: 'https://www.youtube.com/embed/82XQrj8lAjI', type: 'youtube' },
        { title: 'Simple Machine', src: 'https://www.youtube.com/embed/zRJtXkHil2o', type: 'youtube' },
        { title: 'Classification of organisms', url: 'https://www.youtube.com/embed/ToEq_VO4bXM' },

      ],
      buttonColor: '#3333FF',
      selectedVideoIndex: null,
    };
  },
  methods: {
    selectVideo(index) {
      this.selectedVideoIndex = index;
    },
  },
};
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.button-container button {
  margin: 5px;
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
  margin-top: 20px;
}

.video-wrapper {
  text-align: center;
  width: 100%;
  max-width: 800px;
}

video, iframe {
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
    max-width: 100%;
  }
}
</style>
