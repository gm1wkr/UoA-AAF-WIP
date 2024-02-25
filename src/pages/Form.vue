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
        
        // display: flex;
        // align-items: flex-start;
        min-height: 100%;
        min-height: 56vh;
        padding: 0;
    }
</style>