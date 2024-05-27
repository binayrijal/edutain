<template>
  <h1>Draw Piechart and Line chart for your input</h1>
  <div class="piechart">
    <input v-model="labels" placeholder="Enter labels separated by commas">
    <input v-model="sizes" placeholder="Enter sizes separated by commas">
    <button class="submit" @click="generateChart('pie')">Generate Pie Chart</button>
    <button class="submit" @click="generateChart('line')">Generate Line Chart</button>
   
  </div>
  <div class="fig">
    <img :src="chartUrl" alt="Chart" v-if="chartUrl">
  </div>
</template>

<script>

export default {
  name:'PieChart',
  data() {
    return {
      labels: '',
      sizes: '',
      chartUrl: null,
    };
  },
  methods: {
    generateChart(chartType) {
      const payload = {
        chart_type: chartType,
        labels: this.labels,
        sizes: this.sizes
      };
      fetch('http://edunp.pythonanywhere.com/api/pie-chart/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      .then(response => response.blob())
      .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        this.chartUrl = imageUrl;
      })
      .catch(error => console.error('Error:', error));
    }
  }
}
</script>

<style scoped>
.submit:hover {
  background-color:  rgb(212, 195, 66); /* Darker blue on hover */
}
</style>
