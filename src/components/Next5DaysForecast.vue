<template>
    <div>
        <h4>Next 5 Days Forecast</h4>
        <span :key="item" v-for="item in next5">
            {{item.day}}
            <!--{{item.icon}}-->
            <img v-bind:alt="pic" v-bind:src="`../assets/Icons/${item.icon}.png`" width="64">
            {{item.min}}
            {{item.max}}
        </span>
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