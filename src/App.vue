<template>
    <b-container id="app">
        <search @notify="updateData"/>
        <div v-if="!currentData & !weatherData">
            Here you can search weather condition of your destination!
        </div>
        <div v-else-if="!currentData.cityName ">
            Oh-Ah! Sorry :( <br>
            Your destination could not be found!
        </div>
        <div v-else>
            <b-row>
                <b-col>
                    <current-weather :data="this.currentData"/>
                </b-col>
                <b-col class="d-none d-md-block" cols="9">
                    <forecast-chart :data="this.chartData"/>
                </b-col>
            </b-row>
            <b-row>
                <Next5DaysForecast :data="this.weatherData"/>
            </b-row>
        </div>
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
    import {ChartPlugin} from '@syncfusion/ej2-vue-charts';

    Vue.use(BootstrapVue);
    Vue.use(IconsPlugin);
    Vue.use(ChartPlugin);

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
            updateData(weatherData, currentData, chartData) {
                this.weatherData = weatherData;
                this.currentData = currentData;
                this.chartData = chartData;
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
