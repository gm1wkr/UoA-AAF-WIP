<script setup>
import Button from "../components/Button.vue";
import PanelContainer from "../components/PanelContainer.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToHome = () => {
  router.push({ name: "Form" });
};
</script>

<template>
  <PanelContainer>
    <h2>Page One</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      laboriosam tenetur nihil tempore est natus quaerat repudiandae debitis!
      Quaerat vero autem modi totam hic fugit. Esse quos ipsum rem repudiandae.
    </p>
    <p>
      <Button @click="navigateToHome">Next</Button>
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      laboriosam tenetur nihil tempore est natus quaerat repudiandae debitis!
      Quaerat vero autem modi totam hic fugit. Esse quos ipsum rem repudiandae.
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      laboriosam tenetur nihil tempore est natus quaerat repudiandae debitis!
      Quaerat vero autem modi totam hic fugit. Esse quos ipsum rem repudiandae.
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      laboriosam tenetur nihil tempore est natus quaerat repudiandae debitis!
      Quaerat vero autem modi totam hic fugit. Esse quos ipsum rem repudiandae.
    </p>
  </PanelContainer>
</template>

<style lang="scss"></style>
