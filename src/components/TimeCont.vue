<template>
    <div>
      <h1>Time Spent on Website</h1>
      <div>{{ formatTime(timeSpentInSeconds) }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        startTime: new Date(),
        timeSpentInSeconds: 0
      };
    },
    mounted() {
      setInterval(this.updateTimeSpent, 1000); // Update every second
    },
    methods: {
      updateTimeSpent() {
        const currentTime = new Date();
        const difference = currentTime.getTime() - this.startTime.getTime();
        this.timeSpentInSeconds = Math.floor(difference / 1000);
      },
      formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
  
        return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(remainingSeconds)}`;
      },
      pad(number) {
        return (number < 10 ? "0" : "") + number;
      }
    }
  };
  </script>
  
  <style>
  /* Your CSS styles go here */
  </style>


<