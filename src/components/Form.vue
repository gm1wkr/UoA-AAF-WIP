<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import Button from "./Button.vue";

const name = ref("");
const email = ref("");
let showForm = ref(false);
const levelStudy = ref("");
const noAccomAvailable = ref(false);
const data = ref(null);

const onSelect = () => {
  let level = levelStudy.value;

  if (level === "new-undergraduate") {
    showForm.value = true;
    noAccomAvailable.value = false;
    return true;
  }
  showForm.value = false;
  noAccomAvailable.value = true;
  return;
};

const submitForm = () => {
  console.log(
    "Form submitted with name:",
    name.value,
    "and email:",
    email.value
  );
};

onMounted(async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/data"
    );
    data.value = response.data;
    console.log("BACKEND:", data.value.sessions);
    console.log("BACKEND:", data.value.available_for);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
});
</script>

<template>
  <p class="info">
    Please fill out the form below. If you need any help please contact someone at info here.
  </p>

  <p>
    npx json-server --watch db.json
  </p>

  <div v-if="data">
    <p class="dataTest">Mock data from backend<br>{{ data }}</p>
  </div>
  <div v-else>
    <p class="dataTest">Loading...</p>
  </div>

  <form class="form">
    <div class="form-control">
      <label for="studentType">Level of Study</label>
      <select
        @change="onSelect"
        v-model="levelStudy"
        id="studentType"
        name="studentType"
      >
        <optgroup label="Level of Study">
          <option value="0" disabled>Please Select</option>
          <option value="new-undergraduate">New Undergraduate</option>
          <option value="post-graduate">Post-graduate</option>
          <option value="PGDE">PGDE</option>
          <option value="ERASMUS">Erasum</option>
          <option value="study-abroad-exchange">Study Abroad Exchange</option>
        </optgroup>
      </select>
    </div>

    <div v-if="showForm" class="form-control">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" v-model="name" />
    </div>

    <div v-if="showForm" class="form-control">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" v-model="email" />
    </div>

    <div v-if="showForm" class="form-control">
      <label for="student-id">Student Id</label>
      <input type="student-id" id="student-id" name="student-id" />
    </div>

    <div v-if="showForm" class="form-control">
      <label for="dob">Date of Birth</label>
      <input type="date" id="dob" name="dob" />
    </div>

    <div v-if="showForm" class="form-control">
      <label></label>
      <Button @click.prevent="submitForm">Next</Button>
    </div>
  </form>

  <div class="no-accom-available shadow" v-if="noAccomAvailable">
    <h3>Sorry!</h3>
    <p>
      Sorry there is no accomodation available for {{ levelStudy }} students for
      the 2024 session.
    </p>
    <p>Please contact the Accommodation Office if you have any questions.</p>
  </div>
</template>

<style lang="scss" scoped>
.no-accom-available {
  background-color: #fff3f3;
  border: 1px solid #880707;
  margin-top: 2rem;
  padding: 1rem;

  & h3 {
    font-weight: bold;
    margin-bottom: 1rem;
  }
}

.info{
    padding: .3rem 0 .4rem 0;;
}

.dataTest{
    color: #aaa;
    font-size: 80%;
}

.form {
  border: 1pt solid #ecebeb;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  margin: 1.4rem auto 0 auto;
  width: 100%;

  .form-control {
    background-color: #f5f5f5;
    border-bottom: 1px solid rgba(230, 230, 230, 0.89);
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    // align-items: center;
    // justify-content: space-between;
    padding: 0.9rem 1rem;
    width: 100%;
    transition: 0.3s all ease-in-out;

    & label {
      font-weight: 600;
      margin-right: 2rem;
      //   min-width: 8rem;
    }

    & input,
    select,
    button {
      font-size: 1.04rem;
      padding: 0.3rem;
      border: 1px solid #dddddd;
      border-radius: 4px;
      margin: 0.6rem 1rem 0.6rem 1rem;
      //   flex: 1;
    }
  }
  .form-control:nth-child(odd) {
    background-color: #F1F1F1;
  }

  .form-control:hover, form-control:focus {
    background-color: #ebebeb;
  }
}
</style>
