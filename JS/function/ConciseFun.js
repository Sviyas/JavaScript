const bicycle = {
  gear: "",
  setGear(newGear) {
    this.gear = newGear; // this ES6 Function features
  },
};

bicycle.setGear(1);
console.log(bicycle.gear);
