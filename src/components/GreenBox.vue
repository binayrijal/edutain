<template>
<div class="content-container">
    <div class="text-and-buttons">
        <p class="tagline"><i>Edutain Nepal:<br>:)<br>A Fun Paathsaala</i></p>
        <a class="nav-item" href="https://moest.gov.np/" target="_blank">Explore Us</a>
        <!-- <router-link to="/dm-us" class="nav-item">Contact Us</router-link> -->
        <a class="nav-item" href="#contactuspage">Contact Us</a>
    </div>
    <div class="image-container">
        <img src="../assets/students.png" alt="Descriptive Alt Text">
    </div>
</div>
</template>

<script>
export default {
    name: 'GreenBox'
}
</script>
<style scoped>
.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap; /* Allows items to wrap in smaller screens */
}

.text-and-buttons {
  text-align: center;
  flex-grow: 1;
  max-width: 100%; /* Ensures it doesn't exceed the container width */
}

.tagline {
  font-size: 35px; /* Adjust size as necessary */
  color: rgb(0, 110, 255); /* Blue text color */
  background-color:  #efd52d;
  padding: 10px;
}

.image-container img {
  width: 100%; /* Responsive width */
  max-width: 300px; /* Max width to control image size */
  height: auto;
  opacity: 0.7;
  border-radius: 10px;
  margin-left: 30px; /* Centers image in its flex item */
  margin-right: auto; /* Centers image in its flex item */
}

.nav-item, button {
  margin: 10px;
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  display: block; /* Makes links full width in smaller devices */
}

.nav-item:hover, button:hover {
  background-color:  #efd52d;
  color: rgb(0, 110, 255);
}

@media (max-width: 768px) {
  .content-container {
    flex-direction: column; /* Stacks the flex items vertically */
  }

  .image-container, .text-and-buttons {
    width: 100%; /* Full width for small screens */
    text-align: center;
  }

  .nav-item, button {
    width: auto; /* Adjusts width to content */
  }
}
</style>
