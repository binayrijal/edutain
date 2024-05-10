<template>
  <div>
    <div class="login" style="margin-top: 150px">
      <img src="../assets/student-logo-vector.jpg" />
      <h3 style="color: black">Welcome Back!</h3>
      <div class="did-floating-label-content">
        <input
          type="text"
          v-model="email"
          class="did-floating-input"
          placeholder=""
        />

        <label class="did-floating-label">Email</label>
      </div>
      <div class="did-floating-label-content">

        <input
          type="password"
          v-model="password"
          class="did-floating-input"
          placeholder=""
        />

        <label class="did-floating-label">password</label>
      </div>

      <button class="submit" v-on:click="login()" style="color:white;">Login</button>

      <div style="display: flex; justify-content: space-between; gap: 100px;" >
        <p>
          <router-link to="/signup">Signup</router-link>
        </p>

        <p>
          <router-link to="/forgot-password" style="color: black"
            >Forgot Password?</router-link
          >
        </p>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {

      try {
        let value = await axios.post("http://edutainnp.pythonanywhere.com/api/login/", {
          email: this.email,
          password: this.password,
        });
        if (value.status === 200) {
          const tokens = value.data.token;
          localStorage.setItem("user-value", JSON.stringify(tokens));
          this.$router.push({ name: "HomePage" });

          // this.name = '',
          // this.email = '',
          // this.password = '',
          // this.password2 = ''
          alert("Login successfully!!");
        }
      } catch (error) {
        console.error("Login  failed:", error);
        // Optionally, handle errors, e.g., display error message
        alert("Login failed. Please try again.");
      }
    },
  },
};
</script>
