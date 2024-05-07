<template>
    <div>
      <img src="../assets/student-logo-vector.jpg" />
      <h1>LogIn</h1>
      <div class="login">
        <input type="text" v-model="email" placeholder="enter email" />
        <input type="password" v-model="password" placeholder="enter password" />
        <button class="submit" v-on:click="login()">Login</button>
        <p>
          <router-link to="/signup">Signup</router-link>
        </p>
        <p>
          <router-link to="/forgot-password">Forgot Password?</router-link>
        </p>
      </div>
    </div>
  </template>

<script>
import axios from 'axios';
export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async login() {
            // let value = await axios.get(
            //     `http://localhost:3000/api/login?email=${this.email}&password=${this.password}`
            // )
            // if (value.status == 200 && value.data.length>0) {

            //     localStorage.setItem("user-value", JSON.stringify(value.data.token))
            //     this.$router.push({
            //         name: 'HomePage'
            //     })

            // }
            try {
                let value = await axios.post("http://localhost:8000/api/login/", {
                    
                    email: this.email,
                    password: this.password,
                })
                if (value.status === 200) {
                    const tokens = value.data.token;
                    localStorage.setItem("user-value", JSON.stringify(tokens))
                    this.$router.push({name:'HomePage'})

                    // this.name = '',
                    // this.email = '',
                    // this.password = '',
                    // this.password2 = ''
                    alert('Login successfully!!')

                }

            } catch (error) {
                console.error('Login  failed:', error);
                // Optionally, handle errors, e.g., display error message
                alert("Login failed. Please try again.");
            }

        }
    }
}
</script>
