<template>

    <div v-for="(res, index) in prodsInCart" :key="index">
        <img v-bind:src='prod.image'>
        <br>
        <h2>{{ res.title }}</h2>
        <br>
        <h2>US$ {{ res.price }}</h2>
    </div>

</template>

<script>

export default {

}

</script>

<style>

</style>