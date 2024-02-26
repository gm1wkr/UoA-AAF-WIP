<script setup></script>

<template>
  <div class="breadcrumbs">
    <ol>
      <li><a href="#">University Home</a></li>
      <li><a href="#">Apply For Accomodation</a></li>
      <li>Step One</li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
    background-color: #edeff1;
    border-top: 1pt solid #d4dfe6;
    padding: 0.6rem 0 .6rem 1rem;
}

ol {
    display: flex;
    font-size: 86%;
    padding: 0;

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
