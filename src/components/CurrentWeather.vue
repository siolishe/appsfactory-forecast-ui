<template>
    <div>
        <h4>Current Weather</h4>
        <icon-translator :weather-status="data.icon" width="128"/>
        <br/>
        City Name: {{data.cityName}}
        <br/>
        Max : {{data.maxTemp}} °c
        <br/>
        Min : {{data.minTemp}} °c
        <br/>
        Temperature : {{data.temperature}} °c
        <br/>
        Wind km/h : {{data.windSpeed}}
        <br/>
        Humidity : {{data.humidity}}%
    </div>
</template>

<script>
    import IconTranslator from "./IconTranslator";

    export default {
        name: "CurrentWeather",
        components: {
            IconTranslator
        },
        props: {
            data: null
        }
    }
</script>

<style scoped>

</style>
