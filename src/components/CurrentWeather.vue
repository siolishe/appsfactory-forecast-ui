<template>
    <b-container v-if="this.data.cityName">
        <h5>Current Weather</h5>
        <b-row class="justify-content-center">
            <icon-translator :weather-status="data.icon" width="128"/>
        </b-row>
        <b-row class="justify-content-center">City Name : {{data.cityName}}</b-row>
        <b-row class="justify-content-center">Status : {{data.status}}</b-row>
        <b-row class="justify-content-center">Tempe : {{data.temperature}} <small>°c</small></b-row>
        <b-row class="justify-content-center">Max : {{data.maxTemp}} <small>°c</small></b-row>
        <b-row class="justify-content-center">Min : {{data.minTemp}} <small>°c</small></b-row>
        <b-row class="justify-content-center">Wind : {{data.windSpeed}} <small> km/h</small></b-row>
        <b-row class="justify-content-center">Humidity : {{data.humidity}}<small>%</small></b-row>
    </b-container>
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
