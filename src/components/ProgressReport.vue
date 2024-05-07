<template>
    <div class="progress-report">
      <h2>Progress Report</h2>
      <div v-if="!loading">
        <div v-for="(subject, index) in subjects" :key="index" class="subject">
          <h3>{{ subject.name }}</h3>
          <p>Score: {{ subject.score }}</p>
        </div>
      </div>
      <div v-else>
        Loading...
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        subjects: [],
        loading: true
      };
    },
    mounted() {
      // Simulate loading data from an API
      setTimeout(() => {
        this.subjects = [
          { name: 'Math', score: 90 },
          { name: 'Science', score: 85 },
          { name: 'History', score: 75 }
          // Add more subjects as needed
        ];
        this.loading = false;
      }, 2000); // Simulate 2 seconds loading time
    }
  };
  </script>
  
  <style scoped>
  .progress-report {
    max-width: 600px;
    margin: auto;
  }
  
  .subject {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .subject h3 {
    margin-top: 0;
  }
  
  .subject p {
    margin-bottom: 0;
  }
  </style>