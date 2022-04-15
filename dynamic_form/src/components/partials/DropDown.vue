<template>
  <div class="input-container">
    <label :for="label" class="bold"
      >{{ label }} <span v-if="isRequired" class="is-required">*</span></label
    >
    <div class="custom-select" v-click-outside="hideMenu">
      <div class="selected" :class="{ open: open }" @click="toggleMenu">
        {{ selected }}
      </div>
      <div class="items" :class="{ selectHide: !open }">
        <div
          v-for="(option, i) of options"
          :key="i"
          @click="selectOption(option)"
        >
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
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
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("select-option", this.selected);
  },
  methods: {
    selectOption(option) {
      this.selected = option;
      this.open = false;
      this.$emit("select-option", option);
    },
    toggleMenu() {
      this.open = !this.open;
    },
    hideMenu() {
      this.open = false;
    },
  },
};
</script>

<style scoped>
@import "inputs.css";
</style>
