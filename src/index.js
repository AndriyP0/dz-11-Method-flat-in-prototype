function MyArray(...items) {
  this.length = 0;
  for (let i = 0; i < items.length; i++) {
    this[i] = items[i];
    this.length++;
  }
}
MyArray.prototype.flat = function (depth = 1) {
  const result = new MyArray();
  const flatten = (arr, depth) => {
    for (let i = 0; i < arr.length; i++) {
      if (!(i in arr)) continue;
    const item = arr[i];
      if ((item instanceof MyArray || Array.isArray(item)) && depth > 0) {
        flatten(item, depth - 1);
      } else {
        result[result.length] = item;
        result.length++;
      }
    }
  };
  flatten(this, depth);
  return result;
};
const arr = new MyArray(1, 2, new MyArray(3, 4, [5, 6, ,]), 7);
const flattened = arr.flat(2);
console.log(flattened);
