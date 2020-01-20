<template>
    <div>
        <h4>Current Weather</h4>
        <img alt="" src="../assets/Icons/sunny.png" width="128"/>
        <br/>
        City Name: {{cityName}}
        <br/>
        Temperature : {{currentTemperature}}
        <br/>
        Wind km/h : {{wind}}
        <br/>
        Humidity : {{humidity}}
    </div>
</template>

<script>
    export default {
        name: "CurrentWeather",
        props: {
            cityName: String,
            currentTemperature: String,
            wind: String,
            humidity: String
        }
    }
</script>

<style scoped>

</style>