<template>
    <button type="button" onclick="location.href = '/test'">Проверить</button>
    <button type="button" onclick="location.href = '/patients/create_patient'">Создать пациента</button>
    <div class="for" v-for="patient in patients" :key = 'patient' @click="$router.push(`/patients/${patient.id}`)">
        <div class="click1" >
            <p>{{ patient.last_name }} {{patient.name}} {{ patient.patronymic }}</p>
            <p>{{ patient.birthday }}</p>
        </div>
    </div>
</template>

<script>
const token = window.localStorage.getItem('token');
import axios from 'axios';
export default {
    data() {
        return {
            patients: []
        }
    },
    mounted() {
        axios
            .get(
                `http://127.0.0.1:8000/patients`,
                { headers: {"Authorization" : `Bearer ${token}`} }
            )
            .then((response) => {
                this.patients = response.data.result;
            });
    }
}
</script>

<style scoped>

button{
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #2ecc71;
    padding: 14px 40px;
    width: 350px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
}

button:hover{
    background: #2ecc71;
}


.for {
    padding: 15px;
    border: 2px solid #2ecc71;
    margin-top: 15px;
    width: 800px;
    background: #191919;
    color: white;
    display: block;
    margin: 20px auto;
    border-radius: 24px;
    /* cursor: pointer; */
    /* position: absolute; */
    /* left: 50%; */
    /* transform: translate(-50%,-50%); */
}

.click1 {
    cursor: pointer;
}


</style>