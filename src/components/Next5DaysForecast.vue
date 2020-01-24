<template>
    <b-container>
        <h4>Next 5 Days Forecast</h4>
        <b-row class="justify-content-md-center">
            <b-col :key="index" cols="2" v-for="(item,index) in next5">
                <b-row class="justify-content-md-center">{{item.dayOfWeek}}</b-row>
                <b-row class="justify-content-md-center">
                    <icon-translator :weather-status="item.icon"/>
                </b-row>
                <b-row class="justify-content-md-center">{{item.minTemp}} °c</b-row>
                <b-row class="justify-content-md-center">{{item.maxTemp}} °c</b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import IconTranslator from "./IconTranslator";

    export default {
        name: "Next5DaysForecast",
        components: {
            IconTranslator
        },
        props: {
            next5: Array
        }
    }
</script>

<style scoped>

</style>
