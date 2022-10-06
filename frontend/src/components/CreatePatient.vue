<template>
  <form @submit.prevent="onCreatePatient" class="box">
    <h1>Пациент</h1>
    <input v-bind:value="pat_last_name" @input="pat_last_name = $event.target.value" type="text" placeholder="Фамилия">
    <input v-bind:value="pat_name" @input="pat_name = $event.target.value" type="text" placeholder="Имя">
    <input v-bind:value="pat_pat" @input="pat_pat = $event.target.value" type="text" placeholder="Отчество">
    <input v-bind:value="pat_birth" @input="pat_birth = $event.target.value" type="date" placeholder="Дата рождения">
    <button type="submit" class="reg">Создать</button>
</form>
</template>

<script>
import axios from 'axios';
const token = window.localStorage.getItem('token');
const config = { headers: {"Authorization" : `Bearer ${token}`} };
export default {
    data() {
        return {
            pat_last_name: '',
            pat_name: '',
            pat_pat: '',
            pat_birth: '',

        }
    },
    methods: {
        onCreatePatient() {
            axios
                .post(
                    `http://127.0.0.1:8000/patients/create_patient`,
                    
                    { last_name: this.pat_last_name, 
                    name: this.pat_name,
                    patronymic: this.pat_pat,
                    birthday: this.pat_birth },
                    config,
                )
                .then((response) => {
                    if (response.status == 200) {
                        location.href = '/patients'
                    }
                })
                .catch((error) => {
                    if (error != null) {
                        alert("Ошибка, попробуйте ещё раз")
                    }
                })
        }
    }
}
</script>

<style>
.box{
    width: 400px;
    padding: 40px;
    position: absolute;
    margin-top: 300px;
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