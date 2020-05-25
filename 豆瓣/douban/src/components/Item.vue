<template>
    <div class="item" @click='toggleTab()'>
        <span v-show="!flag"><slot name="imgnormal"></slot></span>
        <span v-show="flag"><slot name="imgactive"></slot></span>
        <br/>
       <span :class="{active:flag}">{{title}}</span>
    </div>
</template>
<script>
export default {
    name:'item',
    props:['title','makc','current'],
    data:function(){
        return{
            
        }
    },
    computed: {
        flag(){
            if(this.makc==this.current){
                return true
            }
            return false
        }
    },
    methods: {
        toggleTab(){
           this.$emit('child',this.makc)
		   this.$router.push('/'+this.makc).catch(err=>{err})
        }
    },
}
</script>
<style lang="less">
    .item{
	padding-bottom:5px ;
	font-size:12px ;
        flex: 1;
		color: #b2b2b2;
        img{
            width: 100%;
			height: 100/100rem;
        }
		.active{
			color: #42bd56;
		}
    }
</style>