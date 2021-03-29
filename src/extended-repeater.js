const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (String(options.addition) === "null") options.addition = "null";
  return new Array(options.repeatTimes)
    .fill(
      String(str) +
        new Array(options.additionRepeatTimes)
          .fill(options.addition)
          .join(options.additionSeparator || "|")
    )
    .join(options.separator || "+");
};
