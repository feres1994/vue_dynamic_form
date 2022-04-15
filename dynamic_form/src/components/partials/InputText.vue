<template>
  <div class="input-container">
    <label :for="label" class="bold"
      >{{ label }} <span v-if="isRequired" class="is-required">*</span></label
    >
    <input type="text" class="input" v-model="value" @blur="displayValidationError" @click="setFocus" />
    <p class="is-required">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    isRequired: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      value: "",
      error: "",
    };
  },

  methods: {
    displayValidationError() {
      if (this.isRequired && this.value === "") {
        this.error = "Required Input";
      } else {
        this.error = "";
      }
    },
    setFocus(){
        this.error = ""
    }
   
  },
};
</script>

<style scoped>
@import "inputs.css";
</style>
