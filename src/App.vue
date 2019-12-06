<template>
    <div id="app">
        <h2>前端组件库</h2>
        <span class="item" v-for="(item, index) in compoentArray" :key="index" @click="showItem(item.value)">{{item.name}}</span>
        <div v-if="showComponent === 'zdAudio'">
            <zdAudio></zdAudio>
        </div>
        <div v-if="showComponent === 'zdCanvas'">
            <zdCanvas></zdCanvas>
        </div>
    </div>
</template>

<script>
import zdAudio from './component/zdAudio';
import zdCanvas from './component/zdCanvas';

export default {
    name: 'app',
    components: {
        zdAudio,
        zdCanvas
    },
    data () {
        return {
            compoentArray: [
                {
                    name: '自定义音频组件',
                    value: 'zdAudio'
                },
                {
                    name: '自定义画布生成图片',
                    value: 'zdCanvas'
                }
            ],
            showComponent: ''
        }
    },
    methods: {
        showItem (components) {
            this.showComponent = components;
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    .item {
        cursor: pointer;
        display: block;
        line-height: 30px;
    }
    .item:hover {
        color: #0cbdf3;
    }
}

h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
