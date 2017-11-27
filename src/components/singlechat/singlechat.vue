<template>
    <div class="singlechat">
        <div class="header" ref="top">
            <router-link to="/dialogue">
                <div class="back">
                    <i class="iconfont icon-back"></i>
                </div>
            </router-link>
            <div class="title">机器人曹小仲</div>
            <div class="man">
                <i class="iconfont icon-ren"></i>
            </div>
        </div>
    
        <div class="chatcontent" ref="singleHeight">
            <div class="info">
                ——我是V的机器人儿子，我们可以开始聊天了——
            </div>
            <div v-for="item in news" class="mainnews">
                <newsitem :singlenews="item"></newsitem>
            </div>
        </div>
    
        <div class="sendbox" ref="bottom">
            <div class="sound">
                <i class="iconfont icon-yuyin-copy"></i>
            </div>
            <input v-model="message" @keyup="keysend($event)" maxlength="25">
            <div class="smile">
                <i class="iconfont icon-buoumaotubiao49"> </i>
            </div>
            <button class="send" @click="send">发送</button>
        </div>
    
    </div>
</template>
<script>
import newsitem from '../newsitem/newsitem'

function ObjStory(rec, send, id, info) //声明对象
{
    this.rec = rec
    this.send = send
    this.id = id
    this.info = info
}


export default {
    props: {
        id: {
            type: String
        }
    },
    data() {
        return {
            news: [], // 存放消息的数组
            roobet: '',
            message: ''
        }
    },
    components: {
        newsitem
    },
    methods: {
        send() {
            if (this.message === '') {
                return
            }//禁止发送空消息
            let input = this.message
            this.message = '' //尽量快速清楚message
            var item = new ObjStory(false, true, this.id, input)
            this.news.push(item)
            this.$http.post(
                'http://www.tuling123.com/openapi/api?key=7214bc92224340b793483a4d13fd4e15&info='
                + input, { emulateJSON: true })
                .then(
                (response) => {
                    if (typeof (response.body.text) === 'object') {
                        this.roobet = response.body.text.text
                    } else
                        this.roobet = response.body.text
                    var item = new ObjStory(true, false, '22', this.roobet)
                    this.news.push(item)
                },
                (error) => {
                    console.log('失败')
                }
                )
            setTimeout(() => {
                window.scrollTo(0, this.$refs.singleHeight.offsetHeight + this.$refs.top.offsetHeight
                    + this.$refs.bottom.offsetHeight
                    - window.innerHeight)
            }, 300)
        },
        keysend(event) {
            if (event.keyCode == 13) {
                this.send()
            }
        }
    }
}
</script>
<style lang="stylus">
 @import "../../common/stylus/mixin";
  .singlechat
    padding-top : 3rem
    padding-bottom : 2rem
    .header
      position : fixed
      width : 100%
      background: black
      height: 3rem
      top: 0
      left : 0 
      .back
        display : inline-block
        margin: 0 1rem
        i
          font-size : 1rem
          color : white
      .title
        display : inline-block
        line-height: 3rem
        color: white
        font-size: 1.05rem
        margin-left: 0.5rem
      .man
        display : inline-block
        float : right
        heigh : 3rem
        line-height : 3rem
        margin-right : 1rem
        i
          color : white
          font-size : 1.2rem
    .chatcontent
       height :auto
      .info
        font-size : 0.8rem
        text-align : center
        margin-top: 0.2rem
        color : rgb(150,150,150)
        font-weight : 700  

    .sendbox
      position : fixed
      left : 0 
      bottom: 0
      height : 2.5rem
      width : 100%
      border-top :rgb(217,217,217) 1px solid
      background : #f5f5f5
      input
        vertical-align : top
        width  : 13rem
        @media screen and (max-width: 321px) {
          width  : 10rem    
        }
        @media screen and (min-width: 410px) {       
          width  : 16rem
        } 
        @media screen and (width: 768px) {       
          width  : 9rem
        }       
        line-height : 2.3rem
        height : 2.3rem
        font-size : 1.1rem
        font-weight : 400
        outline : none
        background:none
        border-bottom : rgb(217,217,217) 1px solid
      .sound
        display : inline-block
        margin 0.4rem 0.4rem 0 0.4rem        
        i 
          font-size : 2rem
      .smile
        display: inline-block
        margin-left : 0.2rem
        i 
          font-size : 2rem
          font-weight : 400
      .send
        vertical-align : top
        border: none
        border-radius : 0.3rem
        background : #16af17
        color : white
        width : 3rem
        height : 2rem
        font-size : 0.8rem
        margin : 0.3rem 0 0 0.3rem

</style>