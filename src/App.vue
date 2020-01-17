<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <current-weather city-name="test" current-temperature="20" humidity="52%" wind="10 k/h"/>
        <Next5DaysForecast next5="[65,2]"/>
    </div>
</template>

<script>
    import Next5DaysForecast from "./components/Next5DaysForecast";
    import CurrentWeather from "./components/CurrentWeather";

    export default {
        name: 'app',
        components: {
            CurrentWeather,
            Next5DaysForecast
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
