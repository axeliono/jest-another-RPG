module.exports = function Potion(name) {
  this.types = ["strength", "agility", "health"];
  this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

  return this.name === "health"
    ? (this.value = Math.floor(Math.random() * 10 + 30))
    : (this.value = Math.floor(Math.random() * 5 + 7));
};