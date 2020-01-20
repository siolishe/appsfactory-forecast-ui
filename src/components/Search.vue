<template>
    <div>
        <input type="text" v-model="inputValue"/>
        <button @click="GetData">Emit</button>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                inputValue: ""
            }
        },
        methods: {
            GetData() {
                console.log("fetchdata");
                this.$emit("notify", this.inputValue)
            }
        },
    }
</script>

<style scoped>

</style>
