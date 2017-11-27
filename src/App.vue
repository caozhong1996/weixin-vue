<template>
  <div id="app"> 
    <router-view :id="id" keep-alive></router-view>
    <div class="footer" v-if="$route.meta.showframe">
      <div class="weixin">
        <router-link to="/dialogue">  
        <div class="icon"><i class="iconfont icon-xiaoxi"></i></div>
        <div class="name">微信</div>
        </router-link>
      </div>
      <div class="addresslist">
        <router-link to="/addresslist">        
        <div class="icon"><i class=" iconfont icon-tongxunlu"></i></div>
        <div class="name">通讯录</div>
        </router-link>
      </div>
      <div class="discover">
        <router-link to="/discover">  
        <div class="icon"><i class=" iconfont icon-faxian"></i></div>
        <div class="name">发现</div>
        </router-link>
      </div>
      <div class="me">
        <router-link to="/me">  
        <div class="icon"><i class=" iconfont icon-wo"></i></div>
        <div class="name">我</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    id : {
      type : Number
    }
    }
  },
  created () {
    this.id = parseInt(20*Math.random())+""
  },
  components: {
  }
}
</script>

<style lang="stylus">
  #app
    .footer
      display :flex
      position : fixed
      bottom : 0rem
      left : 0rem
      height : 3.2rem
      width : 100%  
      border-top : #6666 1px solid
      background :white
      .weixin 
        flex : 1 1 auto
        text-align : center
        & > a        
          &.active
            color: green
        .icon
          margin-top : 0.3rem
          i 
            font-size : 1.6rem
            & > a
              display: block
              color: rgb(77, 85, 93)
              &.active
                color: green
        .name
          margin-top : 0.3rem
          font-size : 0.6rem
          color : rgb(150,150,150)
      .addresslist
        flex : 1 1 auto
        text-align : center
        font-size : 0.8rem
        color : rgb(150,150,150)
        & > a        
          &.active
            color: green
        .icon
          margin-top : 0.2rem
          i 
            font-size : 2rem
        .name
          font-size : 0.45rem
          color : rgb(150,150,150) 
      .discover
        flex : 1 1 auto
        text-align : center
        color : rgb(150,150,150)
        & > a        
          &.active
            color: green
        .icon
          margin-top : 0.5rem
          i 
            font-size : 1.4rem 
        .name
          margin-top : 0.4rem
          font-size : 0.6rem
          color : rgb(150,150,150)   
      .me
        flex : 1 1 auto
        text-align : center
        color : rgb(150,150,150)
        & > a        
          &.active
            color: green
        .icon
          margin-top : 0.5rem
          i 
            font-size : 1.4rem
        .name
          margin-top : 0.3rem
          font-size : 0.6rem
          color : rgb(150,150,150) 
</style>
