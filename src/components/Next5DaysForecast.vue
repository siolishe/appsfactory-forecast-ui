<template>
    <div>
        <h4>Next 5 Days Forecast</h4>
        <ul>
            <li :key="item" v-for="item in next5">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Next5DaysForecast",
        props: {
            next5: Array
        }
    }
</script>

<style scoped>

</style>