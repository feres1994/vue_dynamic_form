<template>
  <div class="input-container">
    <label :for="label" class="bold"
      >{{ label }}<span v-if="isRequired" class="is-required">*</span>
    </label>
    <textarea class="text-area-input"></textarea>
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
};
</script>

<style scoped>
@import "inputs.css";
</style>
