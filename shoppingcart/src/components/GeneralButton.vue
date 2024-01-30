<template>

    <div>
        <button @click="general()">{{ label }}</button>
    </div>

</template>

<script>

export default {

    props:{
        label: String,
    },

    methods:{
        general(){
            this.$emit('generalEvent')
        }
    }

}

</script>

<style>

</style>