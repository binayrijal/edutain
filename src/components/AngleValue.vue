<template>
    <div class="container">
      <img src="../assets/angel.jpg" alt="">
      <h2>Enter as you want and watch result</h2>
      <div class="input-group">
        <label for="angle">Angle (in degrees):</label>
        <input type="number" id="angle" v-model="angle" placeholder="Enter value less than 360" @input="updateAngle" class="input-field">
      </div>
      <div class="circle-container">
        <svg :width="svgWidth" :height="svgHeight" class="circle-svg">
          <circle cx="100" cy="100" r="80" stroke="black" stroke-width="1" fill="none" />
          <path v-if="angle !== null" :d="arcPath" fill="none" stroke="blue" stroke-width="2" />
        </svg>
      </div>
      <div>
        <p v-if="angle !== null">The sine of the angle is: {{ sine }}</p>
        <p v-if="angle !== null">The cosine of the angle is: {{ cosine }}</p>
        <p v-if="angle !== null">The tangent of the angle is: {{ tangent }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        angle: null,
        sine: null,
        cosine: null,
        tangent: null,
        svgWidth: 200,
        svgHeight: 200
      };
    },
    computed: {
      arcPath() {
        if (this.angle === null) return '';
        const x1 = 100 + 80 * Math.cos((this.angle - 90) * Math.PI / 180);
        const y1 = 100 + 80 * Math.sin((this.angle - 90) * Math.PI / 180);
        return `M100,100 L100,20 A80,80 0 ${this.angle > 180 ? 1 : 0},1 ${x1},${y1} Z`;
      }
    },
    methods: {
      updateAngle() {
        if (this.angle !== null && !isNaN(this.angle)) {
          this.angle %= 360;
          this.calculateTrigFunctions();
        } else {
          this.angle = null;
        }
      },
      calculateTrigFunctions() {
        if (this.angle !== null && !isNaN(this.angle)) {
          const radians = this.angle * Math.PI / 180;
          this.sine = Math.sin(radians).toFixed(2);
          this.cosine = Math.cos(radians).toFixed(2);
          this.tangent = Math.tan(radians).toFixed(2);
        } else {
          this.sine = null;
          this.cosine = null;
          this.tangent = null;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .input-field {
    margin-bottom: 20px;
    width: 100%;
  }
  
  .circle-container {
    width: 200px;
    height: 200px;
  }
  
  .circle-svg {
    width: 100%;
    height: 100%;
  }
  
  .input-group {
    margin-bottom: 10px;
  }
  </style>
  



<!-- <template>
    <div>
      <div class="input-group">
        <label for="angle">Angle (in degrees):</label>
        <input type="number" id="angle" v-model="angle" @input="calculateTrigFunctions">
      </div>
      <div v-if="angle !== null">
        <p>The sine of the angle is: {{ sine }}</p>
        <p>The cosine of the angle is: {{ cosine }}</p>
        <p>The tangent of the angle is: {{ tangent }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        angle: null,
        sine: null,
        cosine: null,
        tangent: null
      };
    },
    methods: {
      calculateTrigFunctions() {
        if (this.angle !== null && !isNaN(this.angle)) {
          const radians = this.angle * Math.PI / 180;
          this.sine = Math.sin(radians).toFixed(2);
          this.cosine = Math.cos(radians).toFixed(2);
          this.tangent = Math.tan(radians).toFixed(2);
        } else {
          this.sine = null;
          this.cosine = null;
          this.tangent = null;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .input-group {
    margin-bottom: 10px;
  }
  </style> -->