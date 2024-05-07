<template>
    <div>
      <h1>Measurement Converter</h1>
      <div class="measurement-selector">
        <button @click="showKg">KG</button>
        <button @click="showMm">MM</button>
        <button @click="showM">M</button>
        <button @click="showKm">KM</button>
      </div>
      <div class="object" v-if="showObject">
        <!-- Show object for 1 kg -->
        <div class="kg-object"></div>
        <div class="kg-text">1 KG (1000 GM)</div>
      </div>
      <div class="scale" v-if="showScale">
        <!-- Show scale for 1 mm -->
        <div class="tick-mark" v-for="index in 10" :key="index"></div>
        <div class="mm-text">1 MM</div>
      </div>
      <div class="meter" v-if="showMeter">
        <!-- Show meter for 1 meter -->
        <div class="tick-mark" v-for="index in 10" :key="index"></div>
        <div class="meter-text">1 M (100 CM)</div>
      </div>
      <div class="kilometer" v-if="showKilometer">
        <!-- Show kilometer for 1 kilometer -->
        <div class="tick-mark" v-for="index in 10" :key="index"></div>
        <div class="kilometer-text">1 KM (1000 M / 100000 CM / 1000000 MM)</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showObject: false,
        showScale: false,
        showMeter: false,
        showKilometer: false
      };
    },
    methods: {
      showKg() {
        this.showObject = true;
        this.showScale = false;
        this.showMeter = false;
        this.showKilometer = false;
      },
      showMm() {
        this.showObject = false;
        this.showScale = true;
        this.showMeter = false;
        this.showKilometer = false;
      },
      showM() {
        this.showObject = false;
        this.showScale = false;
        this.showMeter = true;
        this.showKilometer = false;
      },
      showKm() {
        this.showObject = false;
        this.showScale = false;
        this.showMeter = false;
        this.showKilometer = true;
      }
    }
  };
  </script>
  
<style scoped>
.measurement-selector {
  margin-bottom: 20px;
}

.object {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 20px;
}

.kg-object {
  width: 100px;
  height: 100px;
  background-color: #ff6347; /* Orange color representing 1 kg */
  border-radius: 50%;
  animation: bounce 1s infinite alternate;
}

.kg-text {
  position: absolute;
  bottom: -20px;
  font-size: 14px;
}

.scale,
.meter,
.kilometer {
  width: 200px;
  height: 10px;
  background-color: #ccc;
  margin: 20px auto; /* Center horizontally */
}

.tick-mark {
  width: 1px;
  height: 10px;
  background-color: black;
  display: inline-block;
}

.mm-text,
.meter-text,
.kilometer-text {
  font-size: 14px;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>
  