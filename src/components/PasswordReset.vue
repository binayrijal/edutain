<template>
    <div class="reset-pass">
      <h1>Password Reset</h1>
      <form @submit.prevent="resetPassword">
        <label>New Password:</label>
        <input type="password" v-model="password" required>
        <label>Confirm Password:</label>
        <input type="password" v-model="confirmPassword" required>
        <button class="submit" type="submit">Reset Password</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        password: '',
        confirmPassword: '',
        uidb64: this.$route.params.uidb64,
        token: this.$route.params.token
      }
    },
    methods: {
      async resetPassword() {
        if (this.password !== this.confirmPassword) {
          alert("Passwords do not match.");
          return;
        }
  
        try {
          const response = await axios.post(`http://localhost:8000/api/password-reset/${this.uidb64}/${this.token}/`, {
            password: this.password,
            password2: this.confirmPassword
          });
          
          alert(response.data.msg);
          // Redirect the user to the login page or any other desired page
          this.$router.push('/login');
        } catch (error) {
          console.error('Password reset failed:', error);
          alert("Password reset failed. Please try again.");
        }
      }
    }
  }
  </script>
  
  <style>
  /* Add your CSS styles here */
  </style>