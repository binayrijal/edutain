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


<!-- <template>
    <div>
      Time spent:{{duration }}
    </div>
  </template>
  
  <script>
  export default {
    name:'TimeCont',
    data() {
      return {
        startTime: null,
        endTime: null,
        duration: null
      };
    },
    mounted() {
      this.startTimer();
      window.addEventListener("beforeunload", this.endTimer); // Listen for window close/navigate away
    },
    beforeUnmount() {
      this.endTimer(); // Ensure timer ends when component is destroyed
    },
    methods: {
      startTimer() {
        this.startTime = new Date();
      },
      endTimer() {
        this.endTime = new Date();
        this.calculateDuration();
      },
      calculateDuration() {
        if (this.startTime && this.endTime) {
          const difference = this.endTime.getTime() - this.startTime.getTime();
          // Convert milliseconds to seconds for simplicity
          this.duration = Math.round(difference / 1000);
          // You can store or display the duration as per your requirement
          console.log("User spent " + this.duration + " seconds on the website.");
        }
      }
    }
  };
  </script>
  
  <style>
  /* Your CSS styles go here */
  </style> -->