<template>
    <b-container id="app">
        <search @notify="updateData"/>
        <b-row>
            <b-col cols="3">
                <current-weather :data="this.currentData"/>
            </b-col>
            <b-col cols="9">
                <forecast-chart :data="this.weatherData"/>
            </b-col>
        </b-row>
        <b-row>
            <Next5DaysForecast :next5="this.weatherData"/>
        </b-row>
    </b-container>
</template>

<script>
    import Next5DaysForecast from "./components/Next5DaysForecast";
    import CurrentWeather from "./components/CurrentWeather";
    import Search from "./components/Search";
    import Vue from 'vue';
    import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import ForecastChart from "./components/ForecastChart";
    import Chartkick from 'vue-chartkick'
    import Chart from 'chart.js'

    Vue.use(BootstrapVue);
    Vue.use(IconsPlugin);
    Vue.use(Chartkick.use(Chart));

    export default {
        name: 'app',
        components: {
            ForecastChart,
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
            updateData(weatherData, currentData) {
                this.weatherData = weatherData;
                this.currentData = currentData
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
