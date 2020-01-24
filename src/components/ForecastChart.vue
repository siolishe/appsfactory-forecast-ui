<template>
    <b-container v-if="this.data">
        <h5>Next 5 Days</h5>
        <ejs-chart :legendSettings='legendSettings' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
                   :title='title'
                   :tooltip='tooltip' id="chart">
            <e-series-collection>
                <e-series :dataSource='updateData' name='' type='Line' xName='time' yName='minTemp'/>
            </e-series-collection>
        </ejs-chart>
    </b-container>
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
                tooltip: {enable: true}
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
            }
        }
    }
</script>

<style scoped>
    #chart {
        height: 350px;
    }
</style>
