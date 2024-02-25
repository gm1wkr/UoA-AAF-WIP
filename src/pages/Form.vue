<script setup>
    import Button from "../components/Button.vue";
    import Form from "../components/Form.vue";
    import PanelContainer from "../components/PanelContainer.vue";
</script>
    
<template>
 <PanelContainer>

    <h2>Form - Step 1</h2>

    <div class="form-container">
        <Form/>
    </div>

    </PanelContainer>
</template>

<style lang="scss">
    .form-container{
        background-color: $background-color;
        // display: flex;
        // align-items: flex-start;
        min-height: 100%;
        max-width: 100%;
    }
</style>