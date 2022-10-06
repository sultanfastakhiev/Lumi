<template>
  <form @submit.prevent="onUpdatePatient" class="update_form">
    <h1>Пациент</h1>
    <input class="stin" v-bind:value="pat_last_name" @input="pat_last_name = $event.target.value" type="text" placeholder="Фамилия">
    <input class="stin" v-bind:value="pat_name" @input="pat_name = $event.target.value" type="text" placeholder="Имя">
    <input class="stin" v-bind:value="pat_pat" @input="pat_pat = $event.target.value" type="text" placeholder="Отчество">
    <input class="stin" v-bind:value="pat_birth" @input="pat_birth = $event.target.value" type="date" placeholder="Дата рождения">
    <textarea v-model="pat_consult" @input="pat_consult = $event.target.value" placeholder="Консультации"></textarea>
    <textarea v-model="pat_diag" @input="pat_diag = $event.target.value" placeholder="Диагнозы"></textarea>
    <textarea v-model="pat_oper" @input="pat_oper = $event.target.value" placeholder="Операции"></textarea>
    <button type="submit" class="update-btn">Сохранить</button>
    <button type="button" class="update-btn" onclick="location.href = '/patients'">Отмена</button>
    <button type="button" class="delete" @click="onDeletePatient">Удалить</button>
</form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            pat_last_name: '',
            pat_name: '',
            pat_pat: '',
            pat_birth: '',
            pat_consult: '',
            pat_diag: '',
            pat_oper: ''
        }
    },
    mounted() {
        axios
            .get(
                `http://127.0.0.1:8000/patients/${this.$route.params.patient_id}`
            )
            .then((response) => {
                this.pat_last_name = response.data.last_name;
                this.pat_name = response.data.name;
                this.pat_pat = response.data.patronymic;
                this.pat_birth = response.data.birthday;
                this.pat_consult = response.data.consultations;
                this.pat_diag = response.data.diagnosis;
                this.pat_oper = response.data.operations;
                console.log(response);
            })
    },

    methods: {
        onUpdatePatient() {
            axios
                .patch(
                    `http://127.0.0.1:8000/patients/${this.$route.params.patient_id}`,
                    {
                        last_name: this.pat_last_name,
                        name: this.pat_name,
                        patronymic: this.pat_pat,
                        birthday: this.pat_birth,
                        consultations: this.pat_consult,
                        diagnosis: this.pat_diag,
                        operations: this.pat_oper
                    }
                )
                .then((response) => {
                    if (response.status == 200) {
                        location.href = '/patients';
                    }
                })
        },
        onDeletePatient() {
            axios
                .delete(
                    `http://127.0.0.1:8000/patients/${this.$route.params.patient_id}`
                )
                .then((response) => {
                    if(response.status == 200) {
                        location.href = '/patients'
                    }
                })
        }
    }
}
</script>

<style scoped>
.update_form{
    width: 900px;
    padding: 40px;
    display: block;
    margin: 20px auto;
    background: #191919;
    text-align: center;
}

.update_form h1{
    color: white;
    text-transform: uppercase;
    font-weight: 500;
}

.stin{
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

.stin:focus{
    width: 280px;
    border-color: #2ecc71;
}

.update-btn{
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

.update-btn:hover{
    background: #2ecc71;
}
textarea {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: left;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 700px;
    height: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
}

textarea:focus {
    border-color: #2ecc71;
}

.delete {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid red;
    padding: 14px 40px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
}

.delete:hover {
    background: red;
}
</style>