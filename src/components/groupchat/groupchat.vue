<template>
    <div class="groupchat">
        <div class="header" ref="top">
            <router-link to="/dialogue">
                <div class="back">
                    <i class="iconfont icon-back"></i>
                </div>
            </router-link>
            <div class="title">微信交流群~</div>
            <div class="man">
                <i class="iconfont icon-ren"></i>
            </div>
        </div>
    
        <div class="chatcontent" ref="singleHeight">
            <div class="addinfo" @click="addnews">
                {{addinfo}}
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

const socket = io('http://112.74.51.201:80/');

function ObjStory(rec, send, id, info) //声明对象
{
    this.rec = rec
    this.send = send
    this.info = info
    this.id = id
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
            message: '',
            num: 0,
            addinfo: ' ↑ ↑点击加载更多聊天记录ヾ(≧O≦)〃'
        }
    },
    created() {
        socket.emit('select', this.num)
        this.num += 20
    },
    components: {
        newsitem
    },
    mounted() {
        //第一次进入群聊接受20个聊天记录
        socket.on('selected', (result) => {
            if (result.length < 20) {
                this.addinfo = '讨厌，被你看光了ミ(ﾉ゜д゜)ﾉ打你哦'
            }
            for (let i = 0;i<result.length;i++) {
                var item = new ObjStory(true, false, result[i].id, result[i].data)
                this.news.unshift(item)
            }
        }),
            //保持接受消息的监听
            socket.on('chat', (data, recid) => {
                if (!data) {
                    return
                }
                var item = new ObjStory(true, false, recid, data)
                this.news.push(item)
                this.$nextTick(() => {
                    window.scrollTo(0, this.$refs.singleHeight.offsetHeight + this.$refs.top.offsetHeight
                        + this.$refs.bottom.offsetHeight
                        - window.innerHeight)
                })
            })
    },
    methods: {
        send() {
            if(this.message === ''){
                return 
            }//禁止发送空消息
            let input = this.message
            this.message = '' //尽量快速清除message
            var item = new ObjStory(false, true, this.id, input)
            this.news.push(item)
            socket.emit('send', input, this.id)
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
        },
        addnews() {
            socket.emit('select', this.num)
            this.num += 20
        }
    }
}
</script>
<style lang="stylus">
 @import "../../common/stylus/mixin";
  .groupchat
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
      .addinfo
        height  : 2rem
        line-height  : 2rem
        font-size : 1rem
        text-align : center
        margin: 0.19rem 0
        color : #16af17
        background : white
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