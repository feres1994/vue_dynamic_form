<template>
  <div class="form-container">
    <button
      class="btn primary-btn bold"
      :disabled="disabled"
      @click="submitForm"
      :class="[disabled ? 'not-allowed disabled' : 'cursor-pointer']"
    >
      Submit
    </button>
    <DropDown
      :options="getMainData"
      @select-option="selectOption"
      label="Review Types"
    />

    <div>
      <div v-for="(field, index) in typeFields" :key="index">
        <InputText
          v-if="field.type === 'text'"
          :label="field.title"
          :is-required="field.required"
          @set-input-value="updateSelected($event, field.id)"
        />

        <TextArea
          v-if="field.type === 'textarea'"
      
          :label="field.title"
          :is-required="field.required"
          @set-input-value="updateSelected($event, field.id)"
        />
        <DropDown
          v-if="field.type === 'select'"
          :options="field.options"
          :label="field.title"
          @select-option="selectSubValues($event, field.id)"
          :is-required="field.required"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from "../partials/DropDown.vue";
import InputText from "../partials/InputText.vue";
import TextArea from "../partials/TextArea.vue";
import reviewTypes from "./data";
export default {
  name: "Form",
  data() {
    return {
      form: {},
      typeFields: [],
      selectedOption: {},
      disabled: false,
    };
  },
  components: {
    DropDown,
    InputText,
    TextArea,
  },
  computed: {
    getData() {
      return reviewTypes;
    },
    getMainData() {
      return reviewTypes.map((el) => el.id);
    },
  },

  mounted() {
    this.fillForm();
  },
  methods: {
    selectOption(value) {
      this.selectedOption = this.getData.filter((el) => el.id === value)[0];
      this.typeFields = this.getData.filter((el) => el.id === value)[0].fields;

      this.fillForm();
    },
    fillForm() {
      this.form = {};
      if (this.selectedOption !== {}) {
        this.form.id = this.selectedOption?.id;
        this.selectedOption.fields.forEach((element) => {
          this.form[element.id] =
            element.type === "select" ? element.options[0] : "";
        });
      }
    },
    submitForm() {
      console.log(this.form);
    },
    selectSubValues(value, property) {
      this.form[property] = value;
    },
    updateSelected(value, property) {
      this.form[property] = value;
      this.inputValidation(property, value);
    },
    inputValidation(inputName, inputValue) {
      let inputField = this.typeFields.filter((el) => el.id === inputName);
      if (inputField[0].required && inputValue === "") {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    },
  },
};
</script>

<style scoped>
@import "../../assets/main.css";
</style>
