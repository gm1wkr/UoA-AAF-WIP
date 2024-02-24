<script setup>
import Button from "./components/Button.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import PanelContainer from "./components/PanelContainer.vue";
</script>

<template>
  <Header />

  <main>
    <PanelContainer>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laboriosam tenetur nihil tempore est natus quaerat repudiandae debitis!
        Quaerat vero autem modi totam hic fugit. Esse quos ipsum rem
        repudiandae.
      </p>
      <p>
        <Button :disbaled="disabled">Next</Button>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laboriosam tenetur nihil tempore est natus quaerat repudiandae debitis!
        Quaerat vero autem modi totam hic fugit. Esse quos ipsum rem
        repudiandae.
      </p>      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laboriosam tenetur nihil tempore est natus quaerat repudiandae debitis!
        Quaerat vero autem modi totam hic fugit. Esse quos ipsum rem
        repudiandae.
      </p>      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laboriosam tenetur nihil tempore est natus quaerat repudiandae debitis!
        Quaerat vero autem modi totam hic fugit. Esse quos ipsum rem
        repudiandae.
      </p>

    </PanelContainer>
  </main>

  <Footer />
</template>

<style lang="scss" scoped>
main {
  background-color: #f1f1f1;
  border-top: 1pt solid #d4dfe6;
  border-bottom: 1pt solid #d4dfe6;
  min-height: 100%;
}
</style>
