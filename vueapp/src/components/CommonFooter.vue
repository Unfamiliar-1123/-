<template>
    <footer :style="{background:$store.state.color}">
        <router-link v-for="(obj,index) in menu" 
        :key="index" 
        :to="obj.path" 
        @click.native="$store.commit('change',obj)"
        >{{obj.title}}</router-link>
        
    </footer>
</template>

<script>
    export default {
        data(){
            return{
                menu:[
                { title:"电影",
                    path:"/movie",
                    color:"darkorange"
                    
                },
                { title:"音乐",
                    path:"/music",
                    color:"indianred"
                    
                },
                { title:"图书",
                    path:"/book",
                    color:"gold"
                    
                },
                { title:"图片",
                    path:"/photo",
                    color:"skyblue"
                    
                },
                ]
                
            }
        },
        created(){
            // console.log(this.$route)
            this.menu.forEach((obj,index)=>{
                if(this.$route.path.includes(obj.path)){
                    this.$store.commit('change',obj);
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    footer{
        height: 1rem;
        background: tan;
        line-height: 1rem;
        text-align: center;
        font-size: 16px;
        position: fixed;
        bottom: 0px;
        width: 100%;
        display: flex;
        // color: gold;
        a{
            flex: 1;
            text-align: center;
            color: saddlebrown;
            font-size: 20px;
            cursor: pointer;
        }
        .router-link-active{
            color: seashell;
            text-decoration: none;
            
        }
    }
</style>