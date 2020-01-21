<template>
    <div>
        <h4>Next 5 Days Forecast</h4>
        <span :key="index" v-for="(item,index) in next5">
            {{item.day}}
            <!--{{item.icon}}-->
            <!--            <img v-bind:alt="item.icon" v-bind:src="require(`../assets/Icons/${item.icon}.png`)" width="64">-->
            {{item.minTemp}}
            {{item.maxTemp}}
            {{item.dayOfWeek}}
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
