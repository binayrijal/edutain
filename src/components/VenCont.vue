<template>
  <div class="venn-diagram-container">
    <h1>Venn Diagram Calculator</h1>
    <div class="input-container">
      <div>
        <label>Set A:</label>
        <input type="text" v-model="setA">
      </div>
      <div>
        <label>Set B:</label>
        <input type="text" v-model="setB">
      </div>
      <button @click="calculate">Calculate</button>
    </div>
    <div class="results-container">
      <div>
        <h3>Intersection:</h3>
        <p>{{ intersection }}</p>
      </div>
      <div>
        <h3>Union:</h3>
        <p>{{ union }}</p>
      </div>
      <div>
        <h3>Difference (A - B):</h3>
        <p>{{ differenceAB }}</p>
      </div>
      <div>
        <h3>Difference (B - A):</h3>
        <p>{{ differenceBA }}</p>
      </div>
    </div>
    <div class="venn-diagram">
      <div class="circle-a">{{ setAWithoutIntersection }}</div>
      <div class="circle-b">{{ setBWithoutIntersection }}</div>
      <div class="intersection">
        <div v-for="(num, index) in intersectionNumbers" :key="index" class="intersection-number">{{ num }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setA: '',
      setB: '',
      intersection: '',
      intersectionNumbers: [],
      union: '',
      differenceAB: '',
      differenceBA: ''
    };
  },
  computed: {
    setAWithoutIntersection() {
      return this.setA.split(',').filter(num => !this.intersectionNumbers.includes(Number(num))).join(', ');
    },
    setBWithoutIntersection() {
      return this.setB.split(',').filter(num => !this.intersectionNumbers.includes(Number(num))).join(', ');
    }
  },
  methods: {
    calculate() {
      const arrayA = this.setA.split(',').map(Number);
      const arrayB = this.setB.split(',').map(Number);
      
      const setA = new Set(arrayA);
      const setB = new Set(arrayB);
      
      // Intersection
      const intersection = [...setA].filter(x => setB.has(x));
      this.intersection = intersection.join(', ');
      this.intersectionNumbers = intersection;
      
      // Union
      const union = new Set([...setA, ...setB]);
      this.union = [...union].join(', ');
      
      // Difference (A - B)
      const differenceAB = [...setA].filter(x => !setB.has(x));
      this.differenceAB = differenceAB.join(', ');
      
      // Difference (B - A)
      const differenceBA = [...setB].filter(x => !setA.has(x));
      this.differenceBA = differenceBA.join(', ');
    }
  }
};
</script>

<style scoped>
.venn-diagram-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f0f8ff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.venn-diagram-container:hover {
  box-shadow: 0 0 20px rgba(223, 35, 35, 0.3);
  transform: scale(1.02);
}

h1 {
  color: #333;
  font-family: 'Arial', sans-serif;
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.input-container div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"] {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 200px;
  text-align: center;
  transition: border-color 0.3s ease;
}

input[type="text"]:hover {
  border-color: #007bff;
}

button {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.results-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.results-container h3 {
  color: #007bff;
  margin: 0;
}

.venn-diagram {
  position: relative;
  width: 300px;
  height: 200px;
  margin: 0 auto;
}

.circle-a, .circle-b, .intersection {
  position: absolute;
  border-radius: 50%;
  border: 2px solid #007bff;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 123, 255, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.circle-a:hover, .circle-b:hover, .intersection:hover {
  background-color: rgba(0, 123, 255, 0.2);
  transform: scale(1.05);
}

.circle-a {
  left: 50px;
  top: 50%;
  transform: translate(-50%, -50%);
}

.circle-b {
  right: 50px;
  top: 50%;
  transform: translate(50%, -50%);
}

.intersection {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 193, 7, 0.3);
}

.intersection-number {
  position: relative;
  font-size: 12px;
  color: #333;
}
</style>
