<template>
  <div class="box">
    <h1>{{ title }}</h1>
    <img src="../assets/student-creative.png" alt="image" class="box-image">
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  max-width: 200px; /* Adjust as needed */
  height: auto;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  background-color: #efd52d;
}

.box-image {
  width: 100%; /* Adjust image width to fit the box */
}

/* Adjustments for smaller screens */
@media (max-width: 768px) {
  .box {
    max-width: 100%; /* Adjust as needed */
    margin: 5px; /* Adjust as needed */
    padding: 5px; /* Adjust as needed */
  }
}
</style>
