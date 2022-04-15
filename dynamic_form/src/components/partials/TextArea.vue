<template>
  <div class="input-container">
    <label :for="label" class="bold"
      >{{ label }}<span v-if="isRequired" class="is-required">*</span>
    </label>
    <textarea class="text-area-input"
     v-model="value"
      @blur="checkRequiredInput"
    ></textarea>
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
  mounted() {
    this.checkRequiredInput();
  },
  methods: {
    checkRequiredInput() {
      if (this.isRequired && this.value.length === "") {
        this.$emit("input-empty-required", true);
      }
      else {
          this.$emit("input-empty-required", false); 
      }
    },
    displayValidationError() {
      this.error = "Required Input";
      this.checkRequiredInput();
    },
  },
};
</script>

<style scoped>
@import "inputs.css";
</style>
