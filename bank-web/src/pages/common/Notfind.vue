<template>
  <div id="notfind">
     <div class="homeclick" @click="gohome">点击返回主页喔</div>
  </div>
</template>

<script>
export default {
    methods:{
        gohome(){
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss">
    #notfind{
        position: absolute;
        left: 0;
        top:0;
        bottom: 0;
        right: 0;
        background: url('../../assets/timg.jpeg');
        background-size: cover;
        background-color: #fff;
        z-index: 999;
    }
    .homeclick{
        position: absolute;
        font-size: 32px;
        bottom: 150px;
        left: 600px;
    }
</style>