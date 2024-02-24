<script setup>
    
    import HeaderBrand from './HeaderBrand.vue'
    import HeaderBreadcrumbs from './HeaderBreadcrumbs.vue'
</script>
    
<template>
<header>
    <HeaderBrand />
    <HeaderBreadcrumbs class="headerBreadcrumbs"/>
</header>
</template>

<style lang="scss">
    header{
        background-color: #f0f4f7;
        font-size: .9rem;
        padding-top: 1rem;
        
    }
</style>