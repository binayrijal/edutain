<template>
    <div class="header" ref="header">
      <img src="../assets/student-logo-vector.jpg" alt="BrainyBunch Logo" class="logo">
      <nav class="nav">
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link  to="/categories-comp" class="nav-item">Categories</router-link>
        <a class="nav-item" href="#contactuspage">Contact Us</a>
        <router-link to="/piechart" class="nav-item">Draw</router-link>
        <router-link to="/dashboard-content" class="nav-item">Dashboard</router-link>

        <!-- <a href="login" class="nav-item" v-on:click="logout">Logout</a> -->
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderCom',
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      // logout() {
      //   localStorage.clear();
      //   this.$router.push({ name: 'LogIn' });
      // },
      handleScroll() {
        const header = this.$refs.header;
        if (window.pageYOffset > 0) {
          header.classList.add('sticky');
        } else {
          header.classList.remove('sticky');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .header {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    background-color: white;
    padding: 10px 20px;
    z-index: 1000;
    transition: top 0.3s;
  }
  
  .sticky {
    position: fixed;
    top: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    height: 50px;
    margin-right: 20px;
  }
  
  .nav {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
  }
  
  .nav-item {
    padding: 10px 15px;
    text-decoration: none;
    color: black;
    white-space: nowrap;
  }
  
  .nav-item:hover {
    background-color:  #efd52d;
    color: #006eff;
  }
  
  @media (max-width: 768px) {
    .header {
      flex-wrap: wrap;
    }
  
    .logo {
      flex-basis: 100%;
      text-align: center;
      margin-bottom: 10px;
    }
  
    .nav {
      justify-content: center;
    }
  
    .nav-item {
      padding: 8px 10px;
    }
  }
  
  @media (max-width: 480px) {
    .nav-item {
      flex-grow: 1;
      text-align: center;
    }
  }
  </style>


<!-- <template>
<div class="header">
    <img src="../assets/student-logo-vector.jpg" alt="BrainyBunch Logo" class="logo">
    <nav class="nav">
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/categories-comp" class="nav-item">Categories</router-link>
        <router-link to="/contact" class="nav-item">Contact Us</router-link>
        
        <router-link to="/piechart" class="nav-item">Draw</router-link>
        <a href="login" class="nav-item" v-on:click="logout">Logout</a>
    </nav>
</div>
</template>

<script>
    export default {
        name: 'HeaderCom',
        methods: {
            logout() {
                localStorage.clear();
                this.$router.push({
                    name: 'LogIn'
                });
            }
        }
    }
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    background-color: white; /* White background for the header */
    padding: 10px 20px;
}

.logo {
    height: 50px; /* Adjust logo size responsively if needed */
    margin-right: 20px;
}

.nav {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
}

.nav-item {
    padding: 10px 15px;
    text-decoration: none;
    color: black; /* Text color for nav items */
    white-space: nowrap;
}

.nav-item:hover {
    background-color: #d2d208; /* Lighter yellow on hover */
    color: #006eff; /* Brighter blue for text on hover */
}

@media (max-width: 768px) {
    .header {
        flex-wrap: wrap; /* Allow the nav items to wrap under the logo */
    }

    .logo {
        flex-basis: 100%; /* Allows the logo to occupy the full width */
        text-align: center; /* Centers the logo when wrapped */
        margin-bottom: 10px; /* Space between logo and wrapped nav items */
    }

    .nav {
        justify-content: center; /* Center nav items when wrapped */
    }

    .nav-item {
        padding: 8px 10px; /* Slightly smaller padding on smaller screens */
    }
}

@media (max-width: 480px) {
    .nav-item {
        flex-grow: 1; /* Makes each nav item take equal space */
        text-align: center; /* Ensures text is centered in each nav item */
    }
}
</style>
 -->
