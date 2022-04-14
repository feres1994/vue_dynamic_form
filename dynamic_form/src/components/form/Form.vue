<template>
  <div class="hello">
    <DropDown :options="getMainData" @select-option="selectOption" />
  </div>
</template>

<script>
import DropDown from "../partials/DropDown.vue";
import data from "./data";
export default {
  name: "Form",
  components: {
    DropDown,
  },
  computed: {
    getMainData() {
      return data.map((el) => el.id);
    },
   
  },
  methods:{
     selectOption(value) {
      console.log(value);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
