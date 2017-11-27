<template>
    <div class="chatItem">
        <div class="avatar">
            <img  src="./roobter.jpg">
        </div>
        <div class="detail">
            <div class="name">机器人聊天</div>
            <div class="news">点击进入机器人聊天~~</div>
        </div>
        <span class="time">
          12:00
        </span>
    </div>
</template>
<script>
export default {
  props : {
    name : {
      type : String
    },
    avatar : '',
    news : ''
  }
}
</script>
<style lang="stylus">
 @import "../../common/stylus/mixin";
  .chatItem
    height :4rem
    border-1px(rgb(215,215,215))
    background :white
    .avatar
      display : inline-block
      margin : 0.5rem       
      img 
        height : 3rem
        width  : 3rem
    .detail
      display :inline-block
      height :3.5rem
      max-width : 20rem  
      .name
        font-size :1rem  
        line-height : 3rem  
        color : black
      .news
        vertical-align :top
        line-height :0.5rem
        font-size : 0.8rem
        color : rgb(150,150,150)
    .time
      float : right
      margin-right :0.5rem
      margin-top: 0.8rem
      font-size :0.8rem
      color : rgb(150,150,150)
</style>
