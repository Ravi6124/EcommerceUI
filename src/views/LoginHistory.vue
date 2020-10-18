<template>
    <main class="main">
        <div class="loop" v-for="(item, index) in items" v-bind:key="index">
            <div class="tag">
                <span>Login Time:</span><br>
                <span>Login Source:</span><br>
                <span>Type of Medium:</span><br>
            </div>
            <div class="info">
                <span>{{ item.loginTime }}</span><br>
                <span>{{ item.loginSource }}</span><br>
                <span>{{ item.type }}</span>
            </div>
        </div>
    </main>
</template>

<script>
const axios = require('axios').default;
export default {
    name: 'Cart',
    data: function(){
        return {
            items: [],
            userId: '585'
        }
    },
    created() {
        axios.get(`http://172.16.20.119:8091/login/login/loginhistory/${this.userId}`)
        .then(result => {
            this.items = result.data;
        })
    }
}
</script>

<style scoped>
.loop {
    display: flex;
    justify-content:  center;
    flex-direction: row;
}
span {
    padding-left: 40px;
}
</style>