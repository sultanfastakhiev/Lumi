<template>
<form class="boxin" @submit.prevent="onAuth">
    <h1>Вход</h1>
    <input v-bind:value="username" @input="username = $event.target.value" type="text" placeholder="email">
    <input v-bind:value="password" @input="password = $event.target.value" type="password" placeholder="Пароль">
    <button type="submit" class="enter">Войти</button>
    <button onclick="location.href = '/registration'" type="button" class="reg">Регистрация</button>
</form>

</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        onAuth() {
            axios
                .post(
                    `http://127.0.0.1:8000/`,
                    { username: this.username, password_hash: this.password }
                )
                .then((response) => {
                    if (response.data.access_token == null) {
                        alert("Неверный пароль")
                    }
                    if ((response.data.access_token != null) && (response.status == 200)) {
                        window.localStorage.setItem('token', response.data.access_token);
                        location.href = '/patients';
                    }
                   
                })
                .catch((error) => {
                    if (error) {
                        alert("Ошибка, попробуйте ещё раз")
                    }
                })
        }
    }


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.boxin{
    width: 400px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #191919;
    text-align: center;
}

.boxin h1{
    color: white;
    text-transform: uppercase;
    font-weight: 500;
}

.boxin input[type = "text"],.boxin input[type = "password"]{
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
}

.boxin input[type = "text"]:focus,.boxin input[type = "password"]:focus{
    width: 280px;
    border-color: #2ecc71;
}

.boxin button{
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #2ecc71;
    padding: 14px 40px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
}

.boxin button:hover{
    background: #2ecc71;
}

</style>