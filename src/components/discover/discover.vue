<template>
  <div class="addresslist">
    <div class="header">
      <div class="title">微信</div>
      <div class="add">
        <i class=" iconfont icon-add1"></i>
      </div>
      <div class="find">
        <i class=" iconfont icon-sousuo"></i>
      </div>
    </div>
    <div class="content">
      <div class="top"></div>
      <div class="friend">
        <span class="avatar">
          <i class="iconfont icon-pengyouquan"></i>
        </span>
        <div class="title">朋友圈</div>
      </div>
      <div class="null"></div>
      <div class="scan">
        <span class="avatar">
          <i class="iconfont icon-saoyisao"></i>
        </span>
        <div class="title">扫一扫</div>
      </div>
      <div class="null"></div>
      <div class="shop">
        <span class="avatar">
          <i class="iconfont icon-gouwu"></i>
        </span>
        <div class="title">购物</div>
      </div>
      <div class="game">
        <span class="avatar">
          <i class="iconfont icon-youxi"></i>
        </span>
        <div class="title">游戏</div>
      </div>
      <div class="null"></div>
      <div class="programmer">
        <span class="avatar">
          <i class="iconfont icon-xiaochengxu"></i>
        </span>
        <div class="title">小程序</div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style lang="stylus">
  .header
    position : fixed
    width : 100%
    top : 0
    left : 0
    background: black
    height: 3rem
    .title
      display : inline-block
      line-height: 3rem
      color: whitewhite
      font-size: 1.1rem
      margin-left:0.7rem
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

  .content
    background : white
    .null 
      background : #ebebeb
      height : 1.5rem
    .top
      height : 3rem
    .friend
      padding-left : 1rem
      border-bottom: 1px solid #e0e0e0
      height : 3rem
      .avatar
        margin-right :0.7rem
        i 
          height : 3rem
          line-height : 3rem
          font-size : 1.5rem
          color : red
      .title
        display : inline-block
        vertical-align : top
        height : 3rem
        line-height : 3rem
    .scan
      border-bottom: 1px solid #e0e0e0
      padding-left : 1rem
      height : 3rem
      margin-left : -0.1rem
      .avatar
        margin-right :0.7rem
        i 
          height : 3rem
          line-height : 3rem
          font-size : 1.8rem
          color : rgb(16, 174, 255)
      .title
        display : inline-block
        vertical-align : top
        height : 3rem
        line-height : 3rem
    .shop
      border-bottom: 1px solid #e0e0e0
      padding-left : 1rem
      height : 3rem
      margin-left : -0.1rem
      .avatar
        margin-right :0.7rem
        i 
          height : 3rem
          line-height : 3rem
          font-size : 1.5rem
          color : red
      .title
        display : inline-block
        vertical-align : top
        height : 3rem
        line-height : 3rem
    .game
      border-bottom: 1px solid #e0e0e0
      padding-left : 1rem
      height : 3rem
      margin-left : -0.1rem
      .avatar
        margin-right :0.7rem
        i 
          height : 3rem
          line-height : 3rem
          font-size : 1.5rem
          color : green
      .title
        display : inline-block
        vertical-align : top
        height : 3rem
        line-height : 3rem
    .programmer
      border-bottom: 1px solid #e0e0e0
      padding-left : 1rem
      height : 3rem
      margin-left : -0.1rem
      .avatar
        margin-right :0.7rem
        i 
          height : 3rem
          line-height : 3rem
          font-size : 1.5rem
          color : rgb(117, 134, 219)
      .title
        display : inline-block
        vertical-align : top
        height : 3rem
        line-height : 3rem
</style>

