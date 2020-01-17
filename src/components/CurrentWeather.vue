<template>
    <div>
        <h4>Current Weather</h4>
        {{cityName}}
        {{currentTemperature}}
        {{wind}}
        {{humidity}}
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