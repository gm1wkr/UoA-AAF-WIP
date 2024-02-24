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

<style lang="scss">
    footer{
        background-color: #f1f1f1;
        font-size: .9rem;
        padding: 2rem 0;
    }
</style>
