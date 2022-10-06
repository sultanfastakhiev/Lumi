<template>
<header>
    <a href="/" class="logo">LUMI</a>
</header>
<router-view></router-view>
</template>

<script>

export default {

}
</script>

<style>

body{
    margin: 0;
    padding: 0;
    background: #34495e;
}

header{
    margin: 0px auto;
    max-width: 100%;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    background-color: #191919;
}

.logo{
    text-decoration: none;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: xx-large;
    margin-left: 20px;
    margin-top: 10px;
}
</style>
