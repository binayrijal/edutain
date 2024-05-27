<template >
  <div class="register container" style="margin-top: 80px;">
    <img src="../assets/Emblem_of_Nepal.svg (1).png" />
    <h3 style="color: black">Welcome to Edutain Nepal!</h3>
    <div class="did-floating-label-content">
      <input
        type="text"
        v-model="name"
        class="did-floating-input"
        placeholder=""
      />
      <label class="did-floating-label">Full Name</label>
    </div>
    <div class="did-floating-label-content">
      <input
        type="text"
        v-model="email"
        placeholder=""
        class="did-floating-input"
      />
      <label class="did-floating-label"
        >Email <span style="color: red">*</span>
      </label>
    </div>
    <div class="did-floating-label-content">
      <input
        type="password"
        v-model="password"
        class="did-floating-input"
        placeholder=""
      />
      <label class="did-floating-label"
        >Password <span style="color: red">*</span>
      </label>
    </div>

    <div class="did-floating-label-content">
      <input
        type="password"
        v-model="password2"
        class="did-floating-input"
        placeholder=""
      />
      <label class="did-floating-label"
        >Re-enter Password <span style="color: red">*</span>
      </label>
    </div>

    <button class="submit" v-on:click="singup()">Sign-Up</button>
    <div
      style="
        font-size: xx-small;
        margin-top: 10px;
        display: flex;
        justify-content: between;
      "
    >
      <span style="font-size: x-small; margin-right: 10px"
        >Already Have an account?</span
      >
      <router-link style="text-decoration: none; font-size: x-small" to="/login"
        >Login</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "signUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password2: "",
    };
  },
  methods: {
    async singup() {
      // console.warn('signup',this.name,this.email,this.password)
      // let value= await axios.post("http://localhost:3000/user",{
      //     name:this.name,
      //     email:this.email,
      //     password:this.password
      // })
      // if(value.status==201)
      // {

      //     localStorage.setItem("user-value",JSON.stringify(value.data))
      //     this.$router.push({name:'HomePage'})

      // }
      try {
        let value = await axios.post("https://edunp.anywhere.com/api/register/", {
          name: this.name,
          email: this.email,
          password: this.password,
          password2: this.password2,
        });
        if (value.status == 201) {
          const userdata = {
            name: value.data.name,
            email: value.data.email,
          };
          localStorage.setItem("user-value", JSON.stringify(userdata.data));
          (this.name = ""),
            (this.email = ""),
            (this.password = ""),
            (this.password2 = "");
          alert("Registration successfull!login now:");
        }
      } catch (error) {
        console.error("Registration failed:", error);
        // Optionally, handle errors, e.g., display error message
        alert("Registration failed. Please try again.");
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-value");
    if (user) {
      this.$router.push({
        name: "HomePage",
      });
    }
  },
};
</script>

<style></style>
