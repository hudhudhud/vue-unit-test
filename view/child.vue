<template>
   <div  class="test" @click='toggleClick' :class="{'is-active':isActive}">
        i m child
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
        isActive:{
            type:Boolean,
            default:false,
        }
    },
    methods:{
        toggleClick(){
            this.$emit('toggleClick')
        }
    }
}
</script>