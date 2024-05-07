<template>
  <div class="container">
    <div class="form">
      <h1>Triangle Constructor</h1>
      <div class="input-group">
        <label for="sideA">Side A:</label>
        <input type="number" id="sideAB" v-model="sideAB" class="input-field">
      </div>
      <div class="input-group">
        <label for="sideB">Side B:</label>
        <input type="number" id="sideBC" v-model="sideBC" class="input-field">
      </div>
      <div class="input-group">
        <label for="sideC">Side C:</label>
        <input type="number" id="sideCA" v-model="sideCA" class="input-field">
      </div>
      <div class="construct">
        <button @click="constructTriangle">Construct Triangle</button>
      </div>
    </div>
    <div v-if="triangle" class="triangle">
      <svg :width="size" :height="size">
        <polygon :points="triangle.points" fill="none" stroke="black" />
        <text v-for="(label, index) in sideNames" :x="triangle.pointCoordinates[index].x" :y="triangle.pointCoordinates[index].y" :key="index" class="side-name">{{ label }}</text>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TriangleGen',
  data() {
    return {
      sideAB: 100,
      sideBC: 100,
      sideCA: 100,
      triangle: null,
      sideNames: [],
      size: 200 // Adjust as needed
    };
  },
  methods: {
    constructTriangle() {
  const a = this.sideAB;
  const b = this.sideBC;
  const c = this.sideCA;

  if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
    const alpha = Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c));
    // const beta = Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c));

    const x1 = 0;
    const y1 = 0;
    const x2 = c;
    const y2 = 0;
    const x3 = b * Math.cos(alpha);
    const y3 = b * Math.sin(alpha);

    this.triangle = {
      points: `${x1},${y1} ${x2},${y2} ${x3},${y3}`,
      pointCoordinates: [{ x: x1+3, y: y1+10 }, { x: x2+3, y: y2+10}, { x: x3, y: y3+7 }]
    };

    this.sideNames = ['A', 'B', 'C'];
  } else {
    this.triangle = null;
    this.sideNames = [];
    alert("Invalid side lengths. Please make sure all sides are positive and satisfy the triangle inequality.");
  }
}
  }
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.image-container {
  margin-bottom: 20px;
}

.form {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-group {
  margin-bottom: 10px;
}

.input-field {
  width: 100px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.construct button {
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.triangle {
  margin-top: 30px;
}

.side-name {
  font-size: 12px;
}
</style>



