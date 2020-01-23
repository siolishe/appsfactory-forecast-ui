<template>
    <img :alt="weatherIcon" :src="require(`../assets/Icons/${weatherIcon}.png`)" width="64">
</template>

<script>
    const iconMapper = {
        "01d": "day-clear-sky",
        "02d": "day-few-clouds",
        "03d": "scattered-clouds",
        "04d": "day-broken-clouds",
        "09d": "day-shower-rain",
        "10d": "day-rain",
        "11d": "day-thunderstorm",
        "13d": "day-snow",
        "50d": "day-mist",

        "01n": "night-clear-sky",
        "02n": "night-few-clouds",
        "03n": "scattered-clouds",
        "04n": "night-broken-clouds",
        "09n": "night-shower-rain",
        "10n": "night-rain",
        "11n": "night-thunderstorm",
        "13n": "night-snow",
        "50n": "night-mist",
        "": "undefined"
    };
    export default {
        name: "IconTranslator",
        props: {
            weatherStatus: String
        },
        computed: {
            weatherIcon() {
                return iconMapper[this.weatherStatus]
            }
        }
    }
</script>

<style scoped>

</style>
