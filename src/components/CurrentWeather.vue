<template>
    <div>
        <h4>Current Weather</h4>
        <img alt="" src="../assets/Icons/sunny.png" width="128"/>
        <br/>
        City Name: {{data.cityname}}
        <br/>
        Max : {{data.maxTemp}}
        <br/>
        Min : {{data.minTemp}}
        <br/>
        Temperature : {{data.temprature}}
        <br/>
        Wind km/h : {{data.windspeed}}
        <br/>
        Humidity : {{data.humidity}}%
    </div>
</template>

<script>
    export default {
        name: "CurrentWeather",
        props: {
            data: null
        }
    }
</script>

<style scoped>

</style>