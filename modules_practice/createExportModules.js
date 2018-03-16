
const MyList = {
  add: function(...args) {
    this.arr.push(...args);
    return this.arr;
  },

  sort: function(arr) {
    return this.arr.sort((a, b) => (a-b));
    }
  }

  MyList.arr = [];

  module.exports = MyList;