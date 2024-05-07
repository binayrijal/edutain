<!-- <template>
  <div class="vendiagram">
    <div>
      <label>Set A:</label>
      <input type="text" v-model="setA">
    </div>
    <div>
      <label>Set B:</label>
      <input type="text" v-model="setB">
    </div>
    
    <button @click="calculate">Calculate</button>
    
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
    
    Venn Diagram
    <div class="venn-diagram">
      <div class="circle-a">
        {{ setAWithoutIntersection }}
      </div>
      <div class="circle-b">
        {{ setBWithoutIntersection }}
      </div>
      <div class="intersection" :style="{ width: intersectionSize, height: intersectionSize }">
        <div v-for="(num, index) in intersectionNumbers" :key="index" class="intersection-number" :style="{ top: `${getYPosition(index, intersectionNumbers.length)}px`, left: `${getXPosition(index, intersectionNumbers.length)}px` }">{{ num }}</div>
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
      differenceBA: '',
      maxIntersectionSize: 100, // Adjust maximum size
      minIntersectionSize: 50, // Adjust minimum size
      baseIntersectionSize: 50 // Adjust base size
    };
  },
  computed: {
    setAWithoutIntersection() {
      return this.setA.split(',').filter(num => !this.intersectionNumbers.includes(Number(num))).join(', ');
    },
    setBWithoutIntersection() {
      return this.setB.split(',').filter(num => !this.intersectionNumbers.includes(Number(num))).join(', ');
    },
    intersectionSize() {
      // Calculate size based on the number of intersection numbers
      const numIntersectionNumbers = this.intersectionNumbers.length;
      // Calculate size based on the number of intersection numbers
      let size = this.baseIntersectionSize + (numIntersectionNumbers * 10); // Adjust the factor for flexibility
      size = Math.min(this.maxIntersectionSize, Math.max(this.minIntersectionSize, size));
      return size + 'px';
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
    },
    getXPosition(index, totalNumbers) {
      const radius = parseInt(this.intersectionSize) / 2;
      const angle = (2 * Math.PI * index) / totalNumbers;
      return radius * Math.cos(angle) + radius;
    },
    getYPosition(index, totalNumbers) {
      const radius = parseInt(this.intersectionSize) / 2;
      const angle = (2 * Math.PI * index) / totalNumbers;
      return radius * Math.sin(angle) + radius;
    }
  }
};
</script>

<style scoped>
/* Add styles here */
.venn-diagram {
  margin-top: 20px; /* Adjust as needed */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
}
.circle-a,
.circle-b,
.intersection {
  position: absolute;
  border-radius: 50%;
  border: 1px solid black;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-a {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.circle-b {
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.intersection {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: yellow;
  
}

.intersection-number {
  position: absolute;
  font-size: 12px;
  color: black;
}
</style> -->




<template>
  <div class="vendiagram">
    <div>
      <label>Set A:</label>
      <input type="text" v-model="setA">
    </div>
    <div>
      <label>Set B:</label>
      <input type="text" v-model="setB">
    </div>
    
    <button @click="calculate">Calculate</button>
    
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
    
    Venn Diagram
    <div class="venn-diagram">
      <div class="circle-a">
        {{ setAWithoutIntersection }}
      </div>
      <div class="circle-b">
        {{ setBWithoutIntersection }}
      </div>
      <div class="intersection">
        <div v-for="(num, index) in intersectionNumbers" :key="index" class="intersection-number" :style="{ top: `${index * 20}px` }">{{ num }}</div>
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
/* Add styles here */
.venn-diagram {
  margin-top: 20px; /* Adjust as needed */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
}
.circle-a,
.circle-b,
.intersection {
  position: absolute;
  border-radius: 50%;
  border: 1px solid black;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-a {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.circle-b {
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.intersection {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: yellow;
}

.intersection-number {
  position: absolute;
  font-size: 12px;
  color: black;
}
</style>




