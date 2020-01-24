<template>
    <ejs-chart :legendSettings='legendSettings' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :title='title'
               :tooltip='tooltip' id="container">
        <e-series-collection>
            <e-series :dataSource='updateData' name='Forecast' type='Line' xName='time' yName='minTemp'/>
        </e-series-collection>
    </ejs-chart>
</template>

<script>
    import {Category, LineSeries, Tooltip} from "@syncfusion/ej2-vue-charts";

    export default {
        name: "ForecastChart",
        data() {
            return {
                primaryXAxis: {
                    valueType: 'Category'
                },
                primaryYAxis: {
                    labelFormat: '{value}°c'
                },
                legendSettings: {
                    visible: true
                },
                marker: {
                    dataLabel: {
                        visible: true
                    }
                },
                tooltip: {enable: true},
                title: "Next 5 Days"
            };
        }, provide: {
            chart: [LineSeries, Category, Tooltip]
        },
        props: {
            data: null
        },
        computed: {
            updateData() {
                return this.data;
                //{'2017-01-01 00:00:00 -0800': 0, '2017-01-01 00:01:00 -0800': 5};
            }
        }
    }
</script>

<style scoped>
    #container {
        height: 350px;
    }
</style>
