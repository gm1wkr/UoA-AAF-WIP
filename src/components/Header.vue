<script setup>
    
    import HeaderBrand from './HeaderBrand.vue'
    import HeaderBreadcrumbs from './HeaderBreadcrumbs.vue'
</script>
    
<template>
<header>
    <HeaderBrand />
</header>
<HeaderBreadcrumbs class="headerBreadcrumbs"/>
</template>

<style lang="scss" scoped>
    header{
        background-color: #f7f7f7;
        font-size: .86rem;
        padding: 1rem;
        
    }
</style>