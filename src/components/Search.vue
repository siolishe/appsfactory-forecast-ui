<template>
    <b-container fluid="sm">
        <b-input-group
                class="mb-3">
            <b-form-input placeholder="Enter a city name or zipCode" v-model="inputValue"/>
            <b-input-group-append>
                <b-button @click="GetData" size="sm" text="Button">Search</b-button>
            </b-input-group-append>
        </b-input-group>
    </b-container>
</template>

<script>
    import Client from "../Client";

    export default {
        name: "Search",
        data() {
            return {
                inputValue: ""
            }
        },
        methods: {
            async GetData() {
                let next5DaysData = await Client("http://localhost:5000/WeatherForecast/forecast?input=" + this.inputValue);
                let currentData = await Client("http://localhost:5000/WeatherForecast/weather?input=" + this.inputValue);
                let chartData = await Client("http://localhost:5000/WeatherForecast/forecastChart?input=" + this.inputValue);
                this.$emit("notify", next5DaysData, currentData, chartData)
            }
        },
    }
</script>

<style scoped>

</style>
