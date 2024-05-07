<template>
<img src="../assets/Emblem_of_Nepal.svg (1).png" />
<h1>
    Sign UP
</h1>
<div class="register">
    <input type="text" v-model="name" placeholder="enter name" />
    <input type="text" v-model="email" placeholder="enter email" />
    <input type="password" v-model="password" placeholder="enter password" />
    <input type="password" v-model="password2" placeholder="enter password again" />

    <button class="submit" v-on:click="singup()">Sign-Up</button>
    <p>
        <router-link to="/login">login</router-link>
    </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'signUp',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password2: ''
        }
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
                let value = await axios.post("http://localhost:8000/api/register/", {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password2: this.password2
                })
                if (value.status == 201) {
                    const userdata={
                        name:value.data.name,
                        email:value.data.email
                    }
                    localStorage.setItem("user-value", JSON.stringify(userdata.data))
                    this.name = '',
                    this.email = '',
                    this.password = '',
                    this.password2 = ''
                    alert('Registration successfull!login now:')

                }
            } catch (error) {
                console.error('Registration failed:', error);
                // Optionally, handle errors, e.g., display error message
                alert("Registration failed. Please try again.");
            }

        }
    },
    mounted() {
        let user = localStorage.getItem('user-value');
        if (user) {
            this.$router.push({
                name: 'HomePage'
            })
        }
    }
}
</script>

<style >

</style>
