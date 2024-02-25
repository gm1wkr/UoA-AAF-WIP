<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");

const submitForm = () => {
  console.log(
    "Form submitted with name:",
    name.value,
    "and email:",
    email.value
  );
};
</script>

<template>

  <p>Please fill out the form below.  If you need any help please contact someone.</p>

  <form class="form">

    <div class="form-control">
      <label for="studentType">Level of Study</label>
      <select type="studentType" id="studentType" name="studentType"> 
        
        <optgroup label="Level of Study">
            <option value="0" disbaled>Please Select</option>
            <option value="1">New Undergraduate</option>
            <option value="2">Post-graduate</option>
            <option value="3">PGDE</option>
            <option value="4">Erasum</option>
            <option value="5">Study Abroad Exchange</option>
        </optgroup>
      </select>
    </div>


    <div class="form-control">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" v-model="name" />
    </div>

    <div class="form-control">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" v-model="email" />
    </div>


    <div class="form-control">
      <label for="student-id">Student Id</label>
      <input type="student-id" id="student-id" name="student-id" />
    </div>



    <div class="form-control">
        <label></label>
        <button type="submit" @click.prevent="submitForm">Submit</button>
    </div>

  </form>
</template>

<style lang="scss" scoped>
    p{
        margin: 2rem 0;
    }

.form {
  border: 1pt solid #ecebeb;
  border-radius: .4rem;
  display: flex;
  flex-direction: column;
  margin: 1.4rem auto 0 auto;
  width: 100%;
  

  .form-control {
      background-color: #f7f8fc;
      border-bottom: 1px solid rgba(230, 230, 230, 0.89);
      display: flex;
      margin-bottom: 0;
      align-items: center;
      justify-content: space-between;
      padding: .9rem 1rem;
      width: 100%;
      transition: .3s all ease-in-out;

      & label {
        font-weight: 600;
        margin-right: 2rem;
        min-width: 8rem;
      }
    
      & input, select, button {
        font-size: 1.14rem;
        padding: 0.3rem;
        border: 1px solid #dddddd;
        border-radius: 4px;
        flex: 1;
      }
  }
  .form-control:nth-child(even){
    background-color: #f1f2f8;
  }

  .form-control:hover{
    background-color: #fff;
  }
}
</style>
