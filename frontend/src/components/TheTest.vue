<template>
    <button type="button" onclick="location.href = '/patients'">Назад</button>
    <label>
        <h3>Загрузите файл</h3>
      <input class="stin1" ref="file" @change="onFileSel()" type="file">
    </label>
    <div class="results">
        <p>Киста: {{this.cyst}}</p>
        <p>Здоров: {{this.normal}}</p>
        <p>Камень: {{this.stone}}</p>
        <p>Опухоль: {{this.tumor}}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            file: '',
            cyst: '',
            normal: '',
            stone: '',
            tumor: ''
        }
    },
    methods: {
        onFileSel() {
            this.file = this.$refs.file.files[0];
            let formData = new FormData;
            formData.append('file', this.file);
            axios
                .post(
                    'http://127.0.0.1:8000/test',
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        }
                    }

                )
                .then((response) => {
                    console.log(response);
                    this.cyst = 'Киста: ' + response.data.cyst + '%';
                    this.normal = 'Здоров: ' + response.data.normal + '%';
                    this.stone = 'Камень: ' + response.data.stone + '%';
                    this.tumor = 'Опухоль: ' + response.data.tumor + '%';
                })
        }
    }
}
</script>

<style scoped>
input[type = "file"]{
    display: none;
}

h3 {
    display: block;
    margin: 120px auto;
    color: white;
}

label{
    display: block;
    margin: 20px auto;
    text-align: center;
    width: 500px;
    height: 300px;
    border-radius: 24px;
    background: #2ecc71;
    border: 2px solid #2ecc71
}

button{
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #2ecc71;
    padding: 14px 40px;
    width: 150px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
}

button:hover{
    background: #2ecc71;
}

.results{
    color: white;
    display: block;
    margin: 20px auto;
    width: 150px;
}
</style>