<script setup>
    
</script>
    
<template>
    <div class="panel-container">
        <div class="panel">
            <slot/>
        </div>
    </div>
</template>

<style lang="scss">

.panel-container{
    display: flex;
    align-items: flex-start;
    min-height: 100%;

    & .panel{
        background-color: #ffffff;
        border-left: 1pt solid #e0ecf3;
        border-right: 1pt solid #e0ecf3;
        margin: 0rem  auto;
        padding: 1.3rem 1rem;
        max-width: 67ch;
        min-height: 100%;
    }
}

</style>