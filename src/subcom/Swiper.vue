
<template>
        <mt-swipe :auto="4000">
             <mt-swipe-item v-for="item in parentlists" :key="item.url">
                <a :href="item.url"><img :src="item.picUrl" alt=""></a>
            </mt-swipe-item>
        </mt-swipe>
</template>

<script>
export default {
    data(){
        return {
            lists:[]
        }
    },
    created() {
        // this.getParentDate()
    },
    mounted(){
        this.getParentDate()
    },
    props:["parentlists"],
    methods:{
        getParentDate(){
            // this.lists=this.parentlists
            // console.log(this.lists)
            console.log("这是子组件的数据"+this.parentlists)
            console.log(this.parentlists)
        }
    }
}
</script>

<style lang="css" scoped>
    .mint-swipe{
        height: 200px;
        width: 100%;
    }
    .mint-swipe-item:nth-child(1){
        background-color: red;
    }
    .mint-swipe-item:nth-child(2){
        background-color: yellow;
    }
    .mint-swipe-item:nth-child(3){
        background-color: blue;
    }
    a{
        display: block;

    }
    a>img{
        width:100%;
        height:200px;
    }
</style>
 