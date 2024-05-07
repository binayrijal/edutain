<template>
  <div>
    <h1>Forgot Password</h1>
    <div v-if="!emailSent" class="forgot-password">
      <input type="email" v-model="email" placeholder="Enter your email" />
      <button class="submit" @click="sendResetEmail">Send Reset Email</button>
    </div>
    <div v-else>
      <p>Email sent successfully. Check your inbox for further instructions.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name:'ForgetPassword',
  data() {
    return {
      email: '',
      emailSent: false,
    };
  },
  methods: {
    async sendResetEmail() {
      try {
        await axios.post('http://localhost:8000/api/send-mail-reset-password/', {
          email: this.email,
        });
        this.emailSent = true;
      } catch (error) {
        console.error('Error sending reset email:', error);
        alert('Failed to send reset email. Please try again.');
      }
    },
  },
};
</script>

<style scoped>
.forgot-password {
  margin-top: 20px;
}
</style>