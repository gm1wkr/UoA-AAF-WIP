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
      Welcome to the Accomodation Application application.
    </p>
    <p>
    </p>
    <h3>Before You Start</h3>
    <p>
        You will need to have the following information at hand before starting your application:
    </p>
    <ul>
        <li>Student ID</li>
        <li>A Name</li>
        <li>Your Email adrress</li>
    </ul>
    
    <p>
        You can get help at anytime by contacting <a href="mailto:uni@uni.uni">Helpful Person</a> or by telephoning
        <a href="tel: 01224 555555">01224 555555</a>.
    </p>
    
    <Button @click="navigateToHome">Start Application</Button>


  </PanelContainer>
</template>

<style lang="scss">
    p{
        margin: 1rem .3rem;
    }
</style>
