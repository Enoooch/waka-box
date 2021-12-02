const chalk = require("chalk");
const { bar_styles, unicodeProgressBar } = require("./utils.js");

for (let i = 1; i <= Object.values(bar_styles).length; i++) {
  console.log(
    chalk.black.bgRgb(246, 248, 250)(`${i} ${unicodeProgressBar(55, i)}`)
  );
}
