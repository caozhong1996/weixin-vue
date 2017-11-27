<template>
  <div class="me">
    <div class="header">
      <div class="title">微信</div>
      <div class="add">
        <i class=" iconfont icon-add1"></i>
      </div>
      <div class="find">
        <i class=" iconfont icon-sousuo"></i>
      </div>
  
    </div>
    <div class="top"></div>
    <div class="accounts">
      <div class="avatr">
        <img src="http://img2.imgtn.bdimg.com/it/u=552906144,4220705124&fm=26&gp=0.jpg" />
      </div>
      <div class="info">
        <div class="number">
          <div class="name">曹仲</div>
          <div class="weinumber">微信号 : goog836934184</div>
        </div>
        <div>
        </div>      
      </div>
       <div class="barcode">
            <i class="iconfont icon-erweima"></i>
          </div>
    </div>
        <div class="content">
      <div class="packet">
        <span class="avatar">
          <i class="iconfont icon-qianbao"></i>
        </span>
        <div class="title">钱包</div>
      </div>
      <div class="null"></div>
      <div class="shoucang">
        <span class="avatar">
          <i class="iconfont icon-dongtaiyemianxiaotubiao03"></i>
        </span>
        <div class="title">收藏</div>
      </div>
      <div class="null"></div>
      <div class="photo">
        <span class="avatar">
          <i class="iconfont icon-xiangce"></i>
        </span>
        <div class="title">相册</div>
      </div>
      <div class="kabao">
        <span class="avatar">
          <i class="iconfont icon-qiabao1"></i>
        </span>
        <div class="title">卡包</div>
      </div>
      <div class="null"></div>
      <div class="set">
        <span class="avatar">
          <i class="iconfont icon-12"></i>
        </span>
        <div class="title">设置</div>
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
    top: 0
    left : 0
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
  .top
    height : 3rem
  .accounts  
    height : 4.5rem
    margin-top : 1rem
    background : white
    .avatr
      display : inline-block
      margin : 0.3rem 1rem
      height : 4rem
      width : 4rem
      img 
        height : 3.9rem
        width  : 3.9rem
    .info  
      display : inline-block
      vertical-align : top
    .number
      display : inline-block
      margin-top : 1rem
      .name
        line-height : 1.5rem
        font-size : 0.9rem
        color: rgb(150,150,150)
      .weinumber
        line-height : 1.5rem
        font-size : 0.9rem
        color: rgb(150,150,150)
    .barcode
      float : right
      height : 4rem
      margin-right : 2rem
      display : inline-block
      i 
        line-height : 4rem
        font-size : 1.5rem
        color: rgb(150,150,150)

  .content
    background : white
    .null 
      background : #ebebeb
      height : 1.5rem
    .packet
      margin-top : 1rem
      padding-left : 1rem
      border-bottom: 1px solid #e0e0e0
      height : 3rem
      .avatar
        margin-right :0.7rem
        i 
          height : 3rem
          line-height : 3rem
          font-size : 1.5rem
          color : #10aeff
      .title
        display : inline-block
        vertical-align : top
        height : 3rem
        line-height : 3rem
    .shoucang
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
          color : red
      .title
        display : inline-block
        vertical-align : top
        height : 3rem
        line-height : 3rem
    .photo
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
          color : #10aeff
      .title
        display : inline-block
        vertical-align : top
        height : 3rem
        line-height : 3rem
    .kabao
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
    .set
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

