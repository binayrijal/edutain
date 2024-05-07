<template>
    <div>
      <h1>Trigonometric Functions Visualization</h1>
      <div class="canva">
        <canvas ref="canvas" width="400" height="400"></canvas>
      </div>
      <div class="trigonometry">
        <button @click="drawFunction('sine')">Sine</button>
        <button @click="drawFunction('cosine')">Cosine</button>
        <button @click="drawFunction('tangent')">Tangent</button>
        <button @click="drawFunction('cosecant')">Cosecant</button>
        <button @click="drawFunction('log')">Logarithm</button>
        <button @click="drawFunction('ln')">Natural Logarithm</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // Draw sine function by default
      this.drawFunction('sine');
    },
    methods: {
      clearCanvas() {
        const canvas = this.$refs.canvas;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      },
      drawAxes() {
        const canvas = this.$refs.canvas;
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.strokeStyle = 'black';
        ctx.stroke();
  
        // Draw axis labels
        ctx.font = '12px Arial';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'end';
        ctx.fillText('Time', canvas.width - 5, canvas.height / 2 - 5);
        ctx.textAlign = 'start';
        ctx.fillText('Amplitude', canvas.width / 2 + 5, 12);
      },
      drawFunction(type) {
        this.clearCanvas();
        this.drawAxes();
        let fn, color, name;
        switch (type) {
          case 'sine':
            fn = Math.sin;
            color = 'red';
            name = 'Sine';
            break;
          case 'cosine':
            fn = Math.cos;
            color = 'blue';
            name = 'Cosine';
            break;
          case 'tangent':
            fn = Math.tan;
            color = 'green';
            name = 'Tangent';
            break;
          case 'cosecant':
            fn = x => 1 / Math.sin(x);
            color = 'orange';
            name = 'Cosecant';
            break;
          case 'secant':
            fn = x => 1 / Math.cos(x);
            color = 'purple';
            name = 'Secant';
            break;
          case 'log':
            fn = Math.log;
            color = 'brown';
            name = 'Logarithm';
            break;
          case 'ln':
            fn = Math.log1p;
            color = 'gray';
            name = 'Natural Logarithm';
            break;
        }
        this.drawFunctionLine(fn, color, name);
      },
      drawFunctionLine(fn, color, name) {
        const canvas = this.$refs.canvas;
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.strokeStyle = color;
        for (let x = -canvas.width / 2; x <= canvas.width / 2; x++) {
          const y = -fn(x * Math.PI / 180) * 50 + canvas.height / 2;
          ctx.lineTo(x + canvas.width / 2, y);
        }
        ctx.stroke();
        // Draw curve name
        ctx.font = '12px Arial';
        ctx.fillStyle = color;
        ctx.textAlign = 'start';
        ctx.fillText(name, canvas.width / 2 + 10, canvas.height / 2 - 10);
      }
    }
  };
  </script>
  <style scoped>
  .trigonometry button{
    background-color: #4A90E2;
    color:white;
    margin: 10px;
  }
  .trigonometry button:hover{
    background-color: #efd52d;;
    color:  #4A90E2;
  }
  .canva{
    margin-left: 200px;
  } 
 </style>









