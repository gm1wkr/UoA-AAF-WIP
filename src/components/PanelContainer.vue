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
        background-color: #f0f4f7;
        border-left: 1pt solid #e0ecf3;
        border-right: 1pt solid #e0ecf3;
        margin: 0rem  auto;
        padding: 2rem 1rem;
        max-width: 79ch;
        min-height: 100%;
    }
}

</style>