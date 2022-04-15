<template>
  <div class="input-container">
    <label :for="label" class="bold"
      >{{ label }}<span v-if="isRequired" class="is-required">*</span>
    </label>
    <textarea
      class="text-area-input"
      v-model="value"
      @blur="displayValidationError"
      @click="setFocus"
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
    this.$emit("set-input-value", this.value);
  },
  watch: {
    value() {
      this.$emit("set-input-value", this.value);
    },
  },

  methods: {
    displayValidationError() {
      if (this.isRequired && this.value === "") {
        this.error = "Required Input";
      } else {
        this.error = "";
      }
    },
    setFocus() {
      this.error = "";
    },
  },
};
</script>

<style scoped>
@import "inputs.css";
</style>
