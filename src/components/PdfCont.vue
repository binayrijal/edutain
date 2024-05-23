<template>
  <div class="pdf-container" :class="{ 'hover-effect': isHover }" @mouseenter="isHover = true" @mouseleave="isHover = false">
    <h1 class="heading">Study Materials For Different Classes</h1>

    <div class="pdf-list">
      <ul>
        <li>
          <a :href="esamplePdfUrl" target="_blank" class="pdf-link">Esample PDF</a>
        </li>
        <li>
          <a :href="verificationLetterPdfUrl" target="_blank" class="pdf-link">Finding Volume PDF</a>
        </li>
        <li>
          <a :href="AreaandPerimeterUrl" target="_blank" class="pdf-link">Area and Perimeter PDF</a>
        </li>
        
        <li>
          <a :href="MathsUrl" target="_blank" class="pdf-link">Class 10 Maths Formulae</a>
        </li>
        
        <li>
          <a :href="Maths7Url" target="_blank" class="pdf-link">Class 7 Maths Formulae</a>
        </li>
        <li>
          <a :href="Maths9Url" target="_blank" class="pdf-link">Class 9 Maths Formulae</a>
        </li>
        <li>
          <a :href="AnglesUrl" target="_blank" class="pdf-link">Angles PDF</a>
        </li>
        <li>
          <a :href="LinesUrl" target="_blank" class="pdf-link">Lines</a>
        </li>
       
      </ul>
    </div>
  </div>
</template>

<script setup>
const esamplePdfUrl = require("@/assets/Esample.pdf").default;
const verificationLetterPdfUrl = require("@/assets/Finding Volume Maths.pdf").default;
const AreaandPerimeterUrl = require("@/assets/Area and Perimeter Formulas .pdf").default;
const AnglesUrl = require("@/assets/Maths_Angles.pdf").default;
const MathsUrl = require("@/assets/Maths_class_10_Formulae.pdf").default;
const Maths7Url = require("@/assets/Edutain_Maths_Class_7.pdf").default;
const Maths9Url = require("@/assets/Edutain Maths Class 9.pdf").default;
const LinesUrl = require("@/assets/Edutain_Maths_Lines.pdf").default;

import { ref } from 'vue';

const isHover = ref(false);
</script>

<style>
.pdf-container {
  font-family: Arial, sans-serif;
  max-width: 600px; /* Adjust the width as needed */
  margin: 20px auto 0; /* Add top margin and center horizontally */
  background-color: #ecedde; /* Set background color */
  padding: 20px; /* Add padding */
  border-radius: 20px; /* Add rounded corners */
  transition: box-shadow 0.2s ease; /* Add transition for box shadow */
}

.pdf-container.hover-effect {
  box-shadow: 0px 10px 30px rgba(212, 39, 39, 0.2); /* Apply significant shadow on hover */
}

.heading {
  text-align: center; /* Center the heading */
  color: #333; /* Set heading color */
  margin-bottom: 20px; /* Add spacing below the heading */
}

.pdf-list ul {
  list-style: none; /* Remove default bullet points */
  padding: 0;
}

.pdf-list li {
  margin-bottom: 15px; /* Add spacing between each list item */
}

.pdf-link {
  text-decoration: none;
  color: #070808; /* Set link color */
  display: inline-block;
  padding: 10px 20px; /* Add padding to create clickable area */
  border-radius: 5px; /* Add rounded corners */
  background-color: #7bb98f; /* Set background color */
  transition: background-color 1s ease, color 1s ease; /* Add smooth transition */
  border: 2px solid #0b0b0c; /* Add border */
}

.pdf-link:hover {
  background-color: #1949d8; /* Change background color on hover */
  color: #d0b1b1; /* Change text color on hover */
}
</style>
