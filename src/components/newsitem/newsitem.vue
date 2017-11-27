<template>
  <div :class="{'newsitem-send' : singlenews.send , 'newsitem-rec' : singlenews.rec}">
    <span class="avater">
      <img :src="avatarurl" />
    </span>
    <div class="news">
      <span class="triangle">
      </span>
      <span class="content">
        <div class="info">{{singlenews.info}}</div>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    avatarurl: {
      type: String
    }
    }
  },
  props: {
    singlenews: {
      type: Object
    }
  },
  created () {
     this.avatarurl = "../static/img/"+this.singlenews.id+".jpg"
  }
}
</script>
<style lang="stylus">
  .newsitem-send
    display : block
    line-height : 1.5rem
    min-height : 4rem
    margin-bottom : 0.8rem
    padding-right : 0.8rem
    .avater
      float : right
      img
        height : 2.5rem
        height : 2.5rem
    .news
      float : right
      display : inline-block
      margin-right : 0.5rem 
      .triangle
        float : right
        margin-top : 0.8rem
        width: 0
        height: 0
        border-top: 0.3rem solid transparent
        border-left: 0.6rem solid #9fe658
        border-bottom: 0.3rem solid transparent
      .content
        display: table
        float : right
        background : #9fe658
        border-radius : 0.5rem
        padding : 0.3rem 0.5rem
        .info
          display: table-cell
          vertical-align : middle
          word-break:break-all
          max-width : 13rem
          height : 2rem
          font-size : 1rem
          font-weight : 200
          color : black

  .newsitem-rec
    display : table
    height : 4rem
    line-height : 1.5rem
    margin-bottom : 0.8rem
    padding-left  : 0.8rem
    .avater
      float : left
      img
        height : 2.5rem
        height : 2.5rem
    .news
      float : left
      display : inline-block
      margin-left : 0.5rem 
      .triangle
        float : left
        margin-top : 0.8rem
        width: 0
        height: 0
        border-top: 0.3rem solid transparent
        border-right: 0.6rem solid white
        border-bottom: 0.3rem solid transparent
      .content
        display: table
        float : left
        background : white
        border-radius : 0.5rem
        padding : 0.3rem 0.5rem
        .info
          display: table-cell
          vertical-align : middle
          word-break:break-all
          max-width : 13rem
          height : 2rem
          font-size : 1rem
          font-weight : 200
          color : black          
</style>
