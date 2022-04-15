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
        />

        <TextArea
          v-if="field.type === 'textarea'"
          placeholder="add multiple lines"
          :label="field.title"
          :is-required="field.required"
        />
        <DropDown
          v-if="field.type === 'select'"
          :options="field.options"
          :label="field.title"
          @select-option="selectSubValues($event, field.title)"
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
import Form from "../services/form.js";
import reviewTypes from "./data";
export default {
  name: "Form",
  data() {
    return {
      form: new Form({}),
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
        console.log(this.selectedOption.fields);
        this.selectedOption.fields.forEach((element) => {
          this.form[element.id] =
            element.type === "select" ? element.options[0] : "";
        });
      }
    },
    submitForm() {
      console.log("ghhihhihihi");
    },
    selectSubValues(value, y) {
      console.log(value);
      console.log(y);
    },
  },
};
</script>

<style scoped>
@import "../../assets/main.css";
</style>
