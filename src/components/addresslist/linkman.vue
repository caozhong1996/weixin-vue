<template>
       <div class="linkman">
        <span class="avatar">
          <img :src="item.src">
        </span>
        <div class="title">{{item.name}}</div>
      </div>
</template>
<script>
export default {
  props : {
      item : {
          type : Object
      }
  }
}
</script>
<style lang="stylus">
    .linkman
      border-bottom: 1px solid #e0e0e0
      padding : 0 1rem
      height : 3rem
      margin-left : -0.1rem
      .avatar  
        display : inline-block
        height : 3rem     
        margin-right : 0.5rem
        margin-top : 0.3rem
        img 
          height : 2.3rem
          line-height : 2.3rem
      .title
        display : inline-block
        vertical-align : top
        height : 3rem
        line-height : 3rem
</style>
