<script setup>
    import HeaderLogo from './HeaderLogo.vue'
</script>
    
<template>

    <div class="header-brand">
        <HeaderLogo/>
        <h1>
            Apply for Accommodation
        </h1>
    </div>

</template>

<style lang="scss">
    .header-brand{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        & h1{
            color: #555;
            justify-content: center;
        }
    }
</style>