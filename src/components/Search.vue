<template>
    <div>
        <input type="text" v-model="inputValue"/>
        <button @click="GetData">Emit</button>
    </div>
</template>

<script>
    import Connector from "./Client";

    export default {
        name: "Search",
        data() {
            return {
                inputValue: ""
            }
        },
        methods: {
            GetData() {
                let d = Connector("https://api.openweathermap.org/data/2.5/forecast?q=berlin&apikey=fcadd28326c90c3262054e0e6ca599cd");
                console.log(d.data);
                this.$emit("notify", d.data)
            }
        },
    }
</script>

<style scoped>

</style>
