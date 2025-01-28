/** Calculates in how many years, or how many years ago, the father will be or was twice as old as the son.
 * @param {number} fatherYears - The number of years of the father.
 * @param {number} sonYears - The number of years of the son.
 * @returns {String} The string with calculated value or a notification about incorrectly entered data.
 */
function calculateYearsDifference(fatherYears, sonYears) {
  if (
    fatherYears > sonYears &&
    fatherYears - sonYears >= 15 &&
    0 < fatherYears &&
    0 < sonYears
  ) {
    switch (true) {
      case fatherYears / sonYears === 2: {
        return "The father is currently twice as old as the son.";
      }
      case fatherYears / sonYears > 2: {
        return `The father was twice as old as the son ${Math.abs(
          fatherYears - sonYears * 2
        )} years ago.`;
      }
      case fatherYears / sonYears < 2: {
        return `The father will be twice as old as the son in ${Math.abs(
          fatherYears - sonYears * 2
        )} years.`;
      }
      default: {
        return "Invalid input detected";
      }
    }
  }
  return "Invalid input detected";
}

let father = Number(prompt("Input father years: "));
let son = Number(prompt("Input son years: "));

console.log(calculateYearsDifference(father, son));
