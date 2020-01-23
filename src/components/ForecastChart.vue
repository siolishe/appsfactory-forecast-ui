<template>
    <area-chart :data="updateData" v-if="data"/>
</template>

<script>
    export default {
        name: "ForecastChart",
        props: {
            data: null
        },
        computed: {
            updateData() {
                let x = this.data.map(function (item) {
                    console.log('{ ' + item.dayOfWeek + ': ' + item.minTemp + ' }');
                    '{ ' + item.dayOfWeek + ': ' + item.minTemp + ' }';
                });
                return x;
                //{'2017-01-01 00:00:00 -0800': 0, '2017-01-01 00:01:00 -0800': 5};
            }
        }
    }
</script>

<style scoped>

</style>
