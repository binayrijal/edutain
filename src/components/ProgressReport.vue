<template>
  <div class="progress-report">
    <h2>Progress Report</h2>
    <div v-if="!loading">
      <div class="time-spent">
        <h3>Time Spent (Last 10 days)</h3>
        <div v-for="(day, index) in timeSpentData" :key="index" class="time-spent-item">
          <p>{{ day.date }}</p>
          <p>{{ day.timeSpent }} minutes</p>
        </div>
      </div>
      <div class="performance">
        <h3>Performance</h3>
        <div v-for="(subject, index) in subjects" :key="index" class="subject">
          <h4>{{ subject.name }}</h4>
          <p>Score: {{ subject.score }}</p>
          <div class="performance-chart" :style="{ width: subject.score + '%' }"></div>
        </div>
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
      timeSpentData: [],
      subjects: [],
      loading: true
    };
  },
  mounted() {
    // Simulate loading data from an API
    setTimeout(() => {
      // Time spent data (last 10 days)
      this.timeSpentData = [
        { date: '2024-05-01', timeSpent: 120 },
        { date: '2024-05-02', timeSpent: 100 },
        // Add data for other days
      ];

      // Performance data
      this.subjects = [
        { name: 'Physics', score: 90 },
        { name: 'Astronomy', score: 85 },
        { name: 'Math', score: 75 },
        { name: 'Biology', score: 80 }
        // Add more subjects as needed
      ];

      this.loading = false;
    }, 2000); // Simulate 2 seconds loading time
  }
};
</script>

<style scoped>
.progress-report {
  max-width: 800px;
  margin: auto;
}

.time-spent,
.performance {
  margin-bottom: 30px;
}

.time-spent-item {
  display: flex;
  justify-content: space-between;
}

.subject {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.subject h4 {
  margin-top: 0;
}

.subject p {
  margin-bottom: 5px;
}

.performance-chart {
  height: 10px;
  background-color: #4CAF50; /* Green */
}
</style>