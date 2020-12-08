const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  const bestResult = Math.max(...values);
  const indexBestResult = values.indexOf(bestResult);
  const keys = Object.keys(employees);
  return keys[indexBestResult];
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
