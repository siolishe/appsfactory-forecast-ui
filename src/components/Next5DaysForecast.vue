<template>
    <b-container class="container" v-if="this.data">
        <h5>Next 5 Days Forecast</h5>
        <b-row class="justify-content-center">
            <b-col :key="index" cols="2" v-for="(item,index) in data">
                <b-row class="d-none d-md-block">{{item.dayOfWeek}}</b-row>
                <b-row class="justify-content-center">
                    <icon-translator :weather-status="item.icon"/>
                </b-row>
                <b-row class="justify-content-center">
                    <b-icon-arrow-up/>
                    {{item.maxTemp}} <small>°c</small></b-row>
                <b-row class="justify-content-center">
                    <b-icon-arrow-down/>
                    {{item.minTemp}} <small>°c</small></b-row>
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
            data: Array
        }
    }
</script>

<style scoped>
    .container {
        margin-top: 3%;
    }
</style>
