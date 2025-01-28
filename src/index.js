/** Calculates in how many years, or how many years ago, the father will be or was twice as old as the son.
 * @param {number} fatherYears - The number of years of the father.
 * @param {number} sonYears - The number of years of the son.
 * @returns {(number|String)} The calculated value or a notification about incorrectly entered data.
 */
function yearsDifferenceCalc(fatherYears, sonYears) {
  if (
    Math.abs(fatherYears - sonYears) >= 15 &&
    0 < fatherYears &&
    0 < sonYears
  ) {
    return Math.abs(fatherYears - sonYears * 2);
  } else {
    return "Invalid input detected";
  }
}
let father = Number(prompt("Input father years: "));
let son = Number(prompt("Input son years: "));

console.log(yearsDifferenceCalc(father, son));
