<template>
<form @submit.prevent="onCreateUser" class="box">
    <h1>Регистрация</h1>
    <input v-bind:value="last_name" @input="last_name = $event.target.value" type="text" placeholder="Фамилия">
    <input v-bind:value="name" @input="name = $event.target.value" type="text" placeholder="Имя">
    <input v-bind:value="patronymic" @input="patronymic = $event.target.value" type="text" placeholder="Отчество">
    <input v-bind:value="birthday" @input="birthday = $event.target.value" type="date" placeholder="Дата рождения">
    <input v-bind:value="username" @input="username = $event.target.value" type="text" placeholder="email">
    <input v-bind:value="password_hash" @input="password_hash = $event.target.value" type="password" placeholder="Пароль">
    <button type="submit" class="reg">Регистрация</button>
    <button type="button" onclick="location.href = '/'">Вход</button>
</form>

</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            last_name: '',
            name: '',
            patronymic: '',
            birthday: '',
            username: '',
            password_hash: '',
        }
    },
    methods: {
        onCreateUser() {
            axios
                .post(
                    `http://127.0.0.1:8000/reg`,
                    { last_name: this.last_name, name: this.name, patronymic: this.patronymic, birthday: this.birthday, username: this.username, password_hash: this.password_hash },
                )
                .then((response) => {
                    if (response.status == 200) {
                        location.href = '/';
        
                    }
                })
                .catch((error) => {
                    if (error) {
                        alert("Ошибка, попробуйте ещё раз")
                    }
                })
        },
    },
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
    width: 400px;
    padding: 40px;
    position: absolute;
    margin-top: 400px;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #191919;
    text-align: center;
}

.box h1{
    color: white;
    text-transform: uppercase;
    font-weight: 500;
}

.box input[type = "text"],.box input[type = "password"],.box input[type = "date"]{
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

.box input[type = "text"]:focus,.box input[type = "password"]:focus,.box input[type = "date"]:focus{
    width: 280px;
    border-color: #2ecc71;
}

.box button{
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

.box button:hover{
    background: #2ecc71;
}

</style>