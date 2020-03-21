<template>
    <div>
电影详情
{{$route.query.id}}
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        created(){
            axios.get("https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/subject/" +this.$route.query.id)
            .then((res)=>{
                console.log(res.data)
            }).catch((res)=>{
                console.log(res)
            })
        }
        
    }
</script>
    

<style lang="scss" scoped>

</style>