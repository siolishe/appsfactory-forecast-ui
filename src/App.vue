<template>
    <div id="app">
        <search @notify="updateData"/>
        <p>{{ data.text }}</p>
        <current-weather city-name="test" current-temperature="20" humidity="52%" wind="10 k/h"/>
        <Next5DaysForecast :next5="
        [
            {'day':'Fri','icon':'sunny','min':'1','max':'5'}
            ,{'day':'Fri','icon':'sunny','min':'1','max':'5'}
            ,{'day':'Fri','icon':'shower','min':'1','max':'5'}
            ,{'day':'Fri','icon':'sunny','min':'1','max':'5'}
            ,{'day':'Fri','icon':'sunny','min':'1','max':'5'}
            ]"/>
    </div>
</template>

<script>
    import Next5DaysForecast from "./components/Next5DaysForecast";
    import CurrentWeather from "./components/CurrentWeather";
    import Search from "./components/Search";

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
                data: {
                    text: 'a'
                }
            }
        },
        methods: {
            updateData(data) {
                console.log(data);
                this.weatherData = data
            }
        },
        mounted() {
            setTimeout(() => {
                this.data = {
                    text: 'b'
                }
            }, 3000)
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
