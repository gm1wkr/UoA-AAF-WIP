<script setup>
import axios from "axios";
import { ref, onMounted, watch } from "vue";
import Button from "./Button.vue";

const name = ref("");
const email = ref("");
const dob = ref();
const studentId = ref('');
const isStudentIdDisabled = ref(false);
const isStudentValid = ref(false);
const canNoteInterest = ref(false);

let showStudentId = ref('');
let showForm = ref(false);

const levelStudy = ref("");
const noAccomAvailable = ref(false);
const data = ref(null);

const validateStudentId = () => {
    if(studentId.value.length === 8) {
        isStudentIdDisabled.value = true;
        isStudentValid.value = (studentId.value === '40004000') ? 'valid' : 'invalid';
        canNoteInterest.value = (studentId.value === '50005000') ? true : false;
    }
}

const onSelect = () => {
  let level = levelStudy.value;

  if (level === "new-undergraduate") {
    showStudentId.value = true;
    noAccomAvailable.value = false;
    return true;
  }
  showForm.value = false;
  noAccomAvailable.value = true;
  return;
};

const submitForm = () => {
  alert(`Form Submitted with Name: ${name.value}.  DOB: ${dob.value}`);
};

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3000/data");
    data.value = response.data;
    console.log("BACKEND:", data.value.sessions);
    console.log("BACKEND:", data.value.available_for);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
});

watch(studentId, (newValue) => {
  if (newValue.length ===  8) {
    validateStudentId();
  }
});
</script>

<template>
    <p class="info">
        Please fill out the form below. If you need any help please contact
        someone at info here.
    </p>
    
    <p>npx json-server --watch db.json</p>
    
    <div>
        <div v-if="data">
            <p class="dataTest">Mock data from backend<br />{{ data }}</p>
        </div>
        <div v-else>
            <p class="dataTest">Loading...</p>
        </div>
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
          <optgroup label="">
            <option value="0" disabled>Please Select</option>
            <option value="new-undergraduate">New Undergraduate</option>
            <option value="post-graduate">Post-graduate</option>
            <option value="PGDE">PGDE</option>
            <option value="ERASMUS">Erasum</option>
            <option value="study-abroad-exchange">Study Abroad Exchange</option>
        </optgroup>
    </select>
</div>

    <transition>
      <div v-if="showStudentId" class="form-control">
        <label for="studentId">Student ID</label>
        <input
            type="text"
            id="studentId"
            name="studentId"
            min="8"
            max="8"
            :class="{ 'validated-input': isStudentValid, 'error-validated-input': isStudentValid === 'invalid' }"
            :disabled="isStudentIdDisabled"
            @change="validateStudentId($event)"
            v-model="studentId"
        />{{ studentId.length }}
      </div>
    </transition>

    <transition>
        <p class="form-help-block" v-if="canNoteInterest">
            Our records show you have a Conditional Offer and can not apply for accomodation at this time.  Please carry
            on filling out the form if you wish to note interest.  We will Email you when you can apply for Accommodation.
        </p>
    </transition>

    <transition>
        <div v-if="isStudentValid" class="form-control">
        <label for="name">Your Name</label>
        <input type="name" id="name" name="name" v-model="name" />
        </div>
    </transition>

      <transition>
          <div v-if="isStudentValid" class="form-control">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="email" />
          </div>
      </transition>


      <div v-if="isStudentValid" class="form-control">
        <label for="dob">Date of Birth</label>
        <input type="date" id="dob" name="dob" v-model="dob" />
      </div>

      <div v-if="isStudentValid" class="form-control">
        <label></label>
        <Button @click.prevent="submitForm">Next</Button>
      </div>
    </form>


    <transition>
        <div class="no-accom-available shadow" v-if="noAccomAvailable">
          <h3>Sorry!</h3>
          <p>
            Sorry there is no accomodation available for {{ levelStudy }} students
            for the 2024 session.
          </p>
          <p>Please contact the Accommodation Office if you have any questions.</p>
        </div>
    </transition>
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

.info {
  padding: 0.3rem 0 0.4rem 0;
}

.dataTest {
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

  .form-help-block {
    padding: 1rem;
  }

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
    background-color: #f1f1f1;
  }

  .form-control:hover,
  form-control:focus {
    background-color: #ebebeb;
  }
}

.validated-input {
    background-color: rgba(21, 255, 0, 0.123);
}

.error-validated-input {
    background-color: rgba(255, 0, 0, 0.094);
}

.v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}

.v-enter-active {
    transition: opacity 2s ease;
}
.v-leave-active {
  transition: opacity .3s ease;
}
.v-leave-from {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
</style>
