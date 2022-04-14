class Form {
    constructor(data) {
      this.originalData = data;
      Object.keys(data).forEach((key) => {
        this[key] = data[key];
      });
    }
  
    reset() {
      Object.keys(this.originalData).forEach((key) => {
        this[key] = "";
      });
    }
  }
  
  export default Form;