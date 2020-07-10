<template>
    <div>
        <div class="detail-top">
            <img src="movie.images.medium" alt="">
            <!-- <img src="http://5b0988e595225.cdn.sohucs.com/images/20191115/dc5981945484440d90249f00f6001b3a.jpeg" alt="picture"> -->
            <div class="detail-info">
                <h2>{{movie.original_title}}</h2>
                <p>{{movie.pubdate}}</p>
                <p></p>
            </div>
        </div>
        <div class="bottom">
            电影详情
        </div>
<!-- 电影详情
{{$route.query.id}} -->
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
.detail-top{
    display: flex;
    img{
        width: 3rem;
    }
    .detail-info{
        flex: 1;
    }
}

</style>