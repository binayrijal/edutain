<template>
<router-view />
</template>

<script>
export default {
    name: 'App',
  
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

}

.register input,.login input,.piechart input,.forgot-password input,.reset-pass input{
    width: 300px;
    height: 40px;
    display: block;
    margin-bottom: 20px;
    padding-left: 10px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    border: 1px solid #1E2851;
}

.submit{
    width: 320px;
    height: 30px;
    color: black;
    background:  #007BFF;
    border: 1px solid rgb(230, 246, 87);
    border-radius: 10px;
    cursor: pointer;
}

img {
    
    height: 150px;
}
.register,.login,.piechart,.forgot-password,.reset-pass{
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
    /* border: 1px solid wheat;
    padding-top: 10px;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.3);
    height: 320px;
    width: 350px;
    margin-left: auto;
    margin-right: auto; */
}
body{
  margin:0px;
  padding: 0px;
  color:#007BFF;
}
.fig img{
    width: 500px;
    height: 400px;
    
}
.register p,.login p{
    margin-top: 10px;
}
</style>
