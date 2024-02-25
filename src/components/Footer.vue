<script setup>
    import FooterCopyright from './FooterCopyright.vue';
    import FooterTechnicalSupport from './FooterTechnicalSupport.vue';
    import FooterLinks from './FooterLinks.vue';
</script>

<template>
  <footer>
    <div class="text-center flex-col-end">
        <FooterCopyright/>
        <FooterTechnicalSupport/>
        <FooterLinks/>
    </div>

  </footer>
</template>

<style lang="scss" scoped>
    footer{
        background-color: #f1f1f1;
        font-size: 80%;
        padding: 1rem 0;
        text-align: center;

        & p{
            margin-bottom: 1rem;
        }
        & p:last-of-type{
            margin: 0;
        }
    }
</style>
