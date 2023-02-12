module.exports = function reverse (arg) {
   let arr = String(Math.abs(arg)).split("");

  let arr2 = arr.reverse();

  let arr3 = arr2.join("");

  let num = +arr3;
  return num;
}
