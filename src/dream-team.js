const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let clrMemb = members.filter((v) => typeof v === "string");
  return clrMemb
    .map((v) => v.replace(/ /g, "")[0].toUpperCase())
    .sort()
    .join("");
};
