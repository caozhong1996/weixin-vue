<template>
    <div class="dialogue">
        <div class="Dheader">
            <div class="title">微信</div>
            <div class="add"><i class=" iconfont icon-add1"></i></div>
            <div class="find"><i class=" iconfont icon-sousuo"></i></div>
            
        </div>
        <router-link to="/singlechat">
        <chatRoobter></chatRoobter>
        </router-link>
        <router-link to="/groupchat">
        <chatGroup></chatGroup>
        </router-link>
    </div>
</template>
<script>
import chatRoobter from '../chatItem/chatRoobter'
import chatGroup from '../chatItem/chatGroup'
export default {
    components: {
        chatRoobter,
        chatGroup
    }
}
</script>

<style lang="stylus">
  .Dheader
    background: black
    height: 3rem
    .title
      display : inline-block
      line-height: 3rem
      color: white
      font-size: 1.1rem
      margin-left: 0.5rem
    .add
      display : inline-block
      float : right
      margin-right : 1rem 
      height : 3rem
      line-height : 3rem  
      color : white
      i
        font-size : 1.3rem
    .find
      display : inline-block
      float : right
      margin-right : 2.8rem  
      height : 3rem
      line-height : 3rem     
      color : white
      i
        font-size : 1.3rem

</style>
