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
          { title: 'Mitosis Cell', url: 'https://www.youtube.com/embed/sQWrYY555II' },
          { title: 'Phase of Moon', url: 'https://www.youtube.com/embed/YaahukWgC7Y' },
          { title: 'Kinetic Energy and Transfer', url: 'https://www.youtube.com/embed/Pfvsy88PAYo' },
          { title: 'Tranformation Energy', url: 'https://www.youtube.com/embed/z_-A_3XPUJs' },
          { title: 'Energy Types2', url: 'https://www.youtube.com/embed/BfjqBarl24I' },
          { title: 'Energy Types1', url: 'https://www.youtube.com/embed/82XQrj8lAjI' },
          { title: 'Simple Machine', url: 'https://www.youtube.com/embed/zRJtXkHil2o' },
        ],
        buttonColors: [
          '#3333FF', '#3333FF', '#3333FF', '#3333FF', 
          '#3333FF', '#3333FF', '#3333FF', '#3333FF', 
          '#3333FF', '#3333FF', '#3333FF'
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
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Display 5 items per row */
  gap: 10px;
  margin-bottom: 20px;
  justify-items: center; /* Center the buttons horizontally */
}

button {
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s;
  width: 100%;
  max-width: 300px;
}

button:hover {
  opacity: 0.9;
  transform: scale(1.05);
}

.selected-video-container {
  text-align: center;
  margin-bottom: 20px;
}

.youtube-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* Aspect ratio 16:9 */
  overflow: hidden;
  margin-top: 10px;
}

.youtube-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 1200px) {
  .button-container {
    grid-template-columns: repeat(4, 1fr); /* 4 items per row */
  }
}

@media (max-width: 992px) {
  .button-container {
    grid-template-columns: repeat(3, 1fr); /* 3 items per row */
  }
}

@media (max-width: 768px) {
  .button-container {
    grid-template-columns: repeat(2, 1fr); /* 2 items per row */
  }

  button {
    font-size: 14px;
    padding: 8px 16px;
  }

  .youtube-container {
    padding-bottom: 75%; /* Adjust aspect ratio for smaller screens */
  }
}

@media (max-width: 480px) {
  .button-container {
    grid-template-columns: 1fr; /* 1 item per row */
  }

  button {
    font-size: 12px;
    padding: 6px 12px;
  }

  .youtube-container {
    padding-bottom: 100%; /* Adjust aspect ratio for very small screens */
  }
}
</style>
  