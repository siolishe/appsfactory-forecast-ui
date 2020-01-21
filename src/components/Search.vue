<template>
    <div>
        <label>
            <input type="text" v-model="inputValue"/>
        </label>
        <button @click="GetData">Emit</button>
    </div>
</template>

<script>
    import Client from "./Client";

    export default {
        name: "Search",
        data() {
            return {
                inputValue: ""
            }
        },
        methods: {
            async GetData() {
                let next5DaysData = await Client("http://localhost:5000/WeatherForecast/forecast?city=" + this.inputValue);
                let currentData = await Client("http://localhost:5000/WeatherForecast/forecast?city=" + this.inputValue);
                console.log(currentData);
                this.$emit("notify", next5DaysData.list, currentData)
            }
        },
    }
</script>

<style scoped>

</style>
