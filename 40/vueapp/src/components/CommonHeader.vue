<template>
    <header :style="{background:$store.state.color}">
        {{$store.state.title}}
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    header{
        background: tan;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        font-size: 16px;
        position: fixed;
        top: 0px;
        width: 100%;
        color: saddlebrown;
            font-size: 20px;
    }
</style>