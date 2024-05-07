<template>
    <HeaderCom />
    <h1>Welcome to Update Resturant page</h1>
    </template>
    
    <script>
    import HeaderCom from './HeaderCom.vue'
    
    export default {
        name: 'homePage',
        components: {
            HeaderCom
        },
        mounted() {
            let user = localStorage.getItem('user-value');
            if (!user) {
                this.$router.push({
                    name: 'signUp'
                })
            }
        }
    }
    </script>
    