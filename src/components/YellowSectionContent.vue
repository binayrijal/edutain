<template>
    <div class="yellow-section-content" ref="yellowSection">
      <div class="text-area" :class="{ 'visible': showText, 'slide-right': slideRight }">
        <h1 class="heading">So,What is the best approaches<br> for our Children?</h1>
        <p>Visualization is the bridge between knowledge and understanding, transforming learning from a passive activity into an immersive journey where concepts come alive. They are:</p>
        <button @click="onButtonClick">Visual Aids</button>
        <button @click="onButtonClick">Visual Storytelling</button>
        <button @click="onButtonClick">Interactive Media</button><br><br>
        <button @click="onButtonClick">Real-World Applications</button>
        <button @click="onButtonClick">Interactive Web</button>
        <button @click="onButtonClick">Quiz Test</button>
        <div class="router-div">
          <router-link to="/login" class="text-area-router">Join Us Now</router-link>
        </div>
      </div>
  
      <div class="image-container">
        <img src="../assets/thinking.png" alt="Community Image">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "YellowSectionContent",
    data() {
      return {
        showText: false,
        slideRight: false
      };
    },
    methods: {
      onButtonClick() {
        // Define what happens when the button is clicked
        alert('Thank you for your interest!');
      },
      checkIntersect(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.showText = true;
            this.slideRight = true;
          } else {
            this.showText = false;
            this.slideRight = false;
          }
        });
      }
    },
    mounted() {
      const observer = new IntersectionObserver(this.checkIntersect, {
        threshold: 0.5 // Adjust the threshold as needed
      });
      observer.observe(this.$refs.yellowSection);
    }
  }
  </script>
  
  <style scoped>
  .heading {
    color: #efd52d;
    background-color: #4A90E2;
    font-size: xx-large;
  }
  
  .text-area p {
    color: white;
    font-size: x-large;
  }
  
  .yellow-section-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 20px;
  }
  
  .text-area {
    flex: 1;
    margin-right: 20px;
    opacity: 0; /* Initially hide the text */
    transition: opacity 0.5s ease, transform 0.5s ease; /* Apply transition for opacity and transform */
  }
  
  .text-area.visible {
    opacity: 1; /* Show the text with fade-in transition */
  }
  
  .text-area.slide-right {
    transform: translateX(0); /* Slide in from the right */
  }
  
  .image-container {
    flex-basis: 300px;
  }
  
  .image-container img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .text-area button,
  .text-area-router {
    padding: 5px;
    margin-left: 3%;
    background-color: blue;
    color: white;
    border-color: blue;
    width: max-content;
    text-decoration: none;
  }
  
  .router-div {
    margin-top: 7%;
  }
  
  .text-area button:hover,
  .text-area-router:hover {
    background-color: #efd52d;
    color: #4A90E2;
    border-color: #efd52d;
  }
  
  @media (max-width: 768px) {
    .text-area button,
    .text-area-router {
      width: 100%;
    }
  }
  </style>

