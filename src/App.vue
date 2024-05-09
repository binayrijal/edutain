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

.register input,
.login input,
.piechart input,
.forgot-password input,
.reset-pass input {
    width: 300px;
    height: 40px;
    display: block;
    margin-bottom: 20px;
    padding-left: 10px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 3px;
    border: 1px solid #1E2851;
}

.submit {
    width: 300px;
    height: 40px;
    color: black;
    background: #007BFF;
    border: 1px solid rgb(230, 246, 87);
    border-radius: 3px;
    cursor: pointer;
}

img {
    height: 60px;
}

.register,
.login,
.piechart,
.forgot-password,
.reset-pass {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
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

body {
    margin: 0px;
    padding: 0px;
    color: #007BFF;
}

.fig img {
    width: 500px;
    height: 400px;

}

.register p,
.login p .router-link {
    width: 300px;
    height: 40px;
    color: black;
    background: white;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 3px;
    cursor: pointer;
    text-decoration: none;
}


.container {
    width: 300px;
    /* padding: 20px; */
    margin: 0 auto;
    font-family: 'Inter', sans-serif;
}

.did-floating-label-content {
    position: relative;
}

.did-floating-label {
    color: #1e4c82;
    font-size: 12px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 15px;
    top: 12px;
    padding: 0 5px;
    background: #fff;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
}

.did-floating-input,
.did-floating-select {
    font-size: 12px;
    display: block;
    width: 100%;
    height: 36px;
    padding: 0 20px;
    background: #fff;
    color: #323840;
    border: 1px solid #3D85D8;
    border-radius: 4px;
    box-sizing: border-box;

    &:focus {
        outline: none;

        ~.did-floating-label {
            top: -8px;
            font-size: 10px;
        }
    }
}

select.did-floating-select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

select.did-floating-select::-ms-expand {
    display: none;
}

.did-floating-input:not(:placeholder-shown)~.did-floating-label {
    top: -8px;
    font-size: 13px;
}
</style>
