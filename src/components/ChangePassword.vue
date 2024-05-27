<template>
    <div class="changepassword">
      <h2>Change Password</h2>
      <form @submit.prevent="changePassword">
        <label for="oldPassword"> Password:</label>
        <input type="password" class="" id="oldPassword" v-model="password" required>
        <br>
        <label for="newPassword"> Password Again:</label>
        <input type="password" id="newPassword" v-model="password2" required>
        <br>
        <button class="submit" type="submit">Change Password</button>
      </form>
      
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        password: '',
        password2: '',
        message: ''
      };
    },
    methods: {
      async changePassword() {
        const accessToken = JSON.parse(localStorage.getItem("user-value"));
        try {
          const response = await axios.post(
            'http://edunp.pythonanywhere.com/api/changepassword/',
            { 
                password: this.password, 
                password2: this.password2 
            },

            {
                 headers: 
                 { 
                    Authorization: `Bearer ${accessToken.access}`
                 }
            }
        
          );
          alert( response.data.msg);
          this.$router.push('/dashboard-content')
        } catch (error) {
          this.message = error.response.data.detail;
        }
      }
    }
  };
  </script>