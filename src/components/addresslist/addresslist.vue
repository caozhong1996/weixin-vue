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
      <div class="newfriend">
        <span class="avatar">
          <i class="iconfont icon-xindepengyou"></i>
        </span>
        <div class="title">新的朋友</div>
      </div>
      <div class="groupchat">
        <span class="avatar">
          <i class="iconfont icon-qunliao"></i>
        </span>
        <div class="title">群聊</div>
      </div>
      <div class="tag">
        <span class="avatar">
          <i class="iconfont icon-biaoqian"></i>
        </span>
        <div class="title">标签</div>
      </div>
      <div class="tag">
        <span class="avatar">
          <i class="iconfont icon-xindepengyou"></i>
        </span>
        <div class="title">公众号</div>
      </div>
      <div class="null">
        <span>A</span>
      </div>
      <linkman :item="nameA"></linkman>
      <div class="null">
        <span>C</span>
      </div>
      <linkman :item="nameC"></linkman>
      <div class="null">
        <span>H</span>
      </div>
      <linkman :item="nameH"></linkman>
      <div class="null">
        <span>M</span>
      </div>
      <linkman :item="nameM"></linkman>
      <div class="null">
        <span>W</span>
      </div>
      <linkman :item="nameW"></linkman>
      <div class="null">
        <span>X</span>
      </div>
      <linkman :item="nameX"></linkman>
      <div class="null">
        <span>Z</span>
      </div>
      <linkman :item="nameZ"></linkman>
    </div>
  </div>
</template>
<script>
import linkman from './linkman'
export default {
  data() {
    return {
      nameA: {
        src: 'http:/' + '/img4.imgtn.bdimg.com/it/u=269435016,2220746152&fm=26&gp=0.jpg',
        name: '阿里-马云'
      },
      nameC: {
        src: 'http://img1.imgtn.bdimg.com/it/u=3576065916,2527731245&fm=26&gp=0.jpg',
        name: '曹仲'
      },
      nameH: {
        src: 'http://img4.imgtn.bdimg.com/it/u=2517551755,85056243&fm=26&gp=0.jpg',
        name: '胡一菲'
      },
      nameM: {
        src: 'http://img2.imgtn.bdimg.com/it/u=928669275,2223950063&fm=26&gp=0.jpg',
        name: '马化腾'
      },
      nameW: {
        src: 'data:image/jpeg;base64,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',
        name: '王健林'
      },
      nameX: {
        src: 'data:image/jpeg;base64,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',
        name: '薛之谦'
      },
      nameZ: {
        src: 'http://img1.imgtn.bdimg.com/it/u=905910129,1043637184&fm=26&gp=0.jpg',
        name: '周杰伦'
      }
    }
  },
  components: {
    linkman
  }
}
</script>
<style lang="stylus">
.addresslist
  padding-bottom :6rem
  .header
    width : 100%
    position : fixed
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

  .content
    background : white
    .null
      height : 1.3rem
      background : #ebebeb
      span 
        height : 1rem
        line-height : 1rem
        margin-left : 0.5rem
        font-size : 0.3rem
        color : #8a8a8a
    .top
      height:3rem
    .newfriend
      border-bottom: 1px solid #e0e0e0
      padding : 0 1rem
      height : 3rem
      .avatar
        margin-right : 0.5rem
        i 
          height : 3rem
          line-height : 3rem
          font-size : 2.3rem
          color : rgb(243, 152, 0)
      .title
        display : inline-block
        vertical-align : top
        height : 3rem
        line-height : 3rem
    .groupchat
      border-bottom: 1px solid #e0e0e0
      padding : 0 1rem
      height : 3rem
      margin-left : -0.1rem
      .avatar
        margin-right : 0.5rem
        i 
          height : 3rem
          line-height : 3rem
          font-size : 2.6rem
          color : rgb(70, 191, 24)
      .title
        display : inline-block
        vertical-align : top
        height : 3rem
        line-height : 3rem
    .tag
      border-bottom: 1px solid #e0e0e0
      padding : 0 1rem
      height : 3rem
      margin-left : -0.1rem
      .avatar
        margin-right : 0.5rem
        i 
          height : 3rem
          line-height : 3rem
          font-size : 2.3rem
          color : rgb(44, 121, 191)
      .title
        display : inline-block
        vertical-align : top
        height : 3rem
        line-height : 3rem
</style>

