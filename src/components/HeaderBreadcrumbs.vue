<script setup></script>

<template>
  <div class="">
    <ol>
      <li><a href="#">University Home</a></li>
      <li><a href="#">Apply For Accomodation</a></li>
      <li>Step One</li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  background-color: #95dafd;
  padding: 0.3rem 0;
}

ol {
    display: flex;
    font-size: 90%;
    padding: 0;
    padding: 1rem;

  li {
    display: flex;
    margin-right: 0.4rem;
    // min-width: max-content;
  }

  li:not(:first-child)::before {
    content: ">";
    color: #bbb;
    margin-right: 0.4rem;
  }
}
</style>
