<template>
    <div id="app">
        <search @notify="updateData"/>
        <current-weather :data="this.currentData"/>
        <Next5DaysForecast :next5="this.weatherData"/>
    </div>
</template>

<script>
    import Next5DaysForecast from "./components/Next5DaysForecast";
    import CurrentWeather from "./components/CurrentWeather";
    import Search from "./components/Search";
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: 'app',
        components: {
            CurrentWeather,
            Next5DaysForecast,
            Search
        },
        data() {
            return {
                weatherData: null,
                currentData: null
            }
        },
        methods: {
            updateData(data, data2) {
                console.log(data, data2);
                this.weatherData = data;
                this.currentData = data2
            }
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
