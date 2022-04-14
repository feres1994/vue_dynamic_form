<template>
  <div class="hello">
    <DropDown :options="getMainData" @select-option="selectOption" />

    <div>
      <div v-for="(field, index) in typeFields" :key="index">
        {{field}}
        <input type="text" v-if="field.type === 'text'"  />
       
        <textarea v-if="field.type === 'textarea'" placeholder="add multiple lines"></textarea>
        <DropDown v-if="field.type === 'select'" :options="field.options" />
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from "../partials/DropDown.vue";
import Form from "../services/form.js";
import reviewTypes from "./data";
export default {
  name: "Form",
  data() {
    return {
      form: new Form({
        id: "",
      }),
      typeFields: [],
    };
  },
  components: {
    DropDown,
  },
  computed: {
    getData() {
      return reviewTypes;
    },
    getMainData() {
      return reviewTypes.map((el) => el.id);
    },
  },
  methods: {
    selectOption(value) {
      console.log(this.getData.filter((el) => el.id === value));
      this.typeFields = this.getData.filter((el) => el.id === value)[0].fields;
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
