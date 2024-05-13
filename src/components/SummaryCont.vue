<template>
    
    <div>
      <h1>Summarize Form</h1>
      <button @click="showSummary('Physics')">Physics</button>
      <button @click="showSummary('Biology')">Biology</button>
      <button @click="showSummary('Astronomy')">Astronomy</button>
      <button @click="showSummary('Math')">Math</button>
  
      <div v-if="selectedTopic">
        <h2>{{ selectedTopic }}</h2>
        <p>{{ summaries[selectedTopic] }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedTopic: null,
        summaries: {
          Physics: "Physics is the study of matter, energy, and the fundamental forces of nature...",
          Biology: "Biology is the study of living organisms and their interactions with each other and the environment...",
          Astronomy: "Astronomy is the study of celestial objects such as stars, planets, comets, and galaxies...",
          Math: "Mathematics is the study of numbers, quantities, shapes, and patterns..."
        }
      };
    },
    methods: {
      showSummary(topic) {
        this.selectedTopic = topic;
      }
    }
  };
  </script>
  