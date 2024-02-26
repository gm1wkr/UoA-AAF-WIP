<script setup>
    
</script>
    
<template>
    <button>
        <slot/>
    </button>
</template>

<style lang="scss" scoped>
    button{
        background-color: #1f3165;
        border-radius: .4rem;
        color: #fff;
        font-weight: bold;
        width: auto;
        padding: .3rem .7rem;

    }
    button:hover{
        background-color: #1c2541;
    }

</style>