<template>
    <div  >
        <child @add='add'  @toggleClick='click'>{{num}}</child>
    </div>    
</template>
<script>
import child from './child'
export default {
    components:{
        child,
    },
    data(){
        return {
            num:0,
        }
    },
    methods:{
        add(payload){
            this.num+=payload
        },
        click(){
            this.num=55
        }
    }
}
</script>
